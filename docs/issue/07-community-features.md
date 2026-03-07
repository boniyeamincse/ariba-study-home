# Issue #07: Community Features

## Priority: Low

## Description
Build community engagement features including discussion forums, solution sharing, and peer learning support.

## Problem Statement
Learning is more effective with community support. Users need:
- Help when stuck on concepts
- Ability to share knowledge
- Peer feedback on solutions
- Motivation through social interaction
- Different perspectives on problems

## Proposed Solution

### Features
1. **Discussion Forums**
   - Forum per lesson/topic
   - Create threads and replies
   - Upvote/downvote system
   - Mark solutions as accepted
   - Rich text formatting

2. **Solution Sharing**
   - Share code solutions
   - Comment on others' solutions
   - Rate solution quality
   - Alternative approaches
   - Best practices discussions

3. **User Profiles**
   - Public profile pages
   - Activity history
   - Reputation points
   - Badges and achievements
   - Following system

4. **Moderation Tools**
   - Report inappropriate content
   - Community moderators
   - Automated spam detection
   - Content guidelines
   - User blocking

## Technical Implementation

### Database Schema
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  reputation INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Discussions table
CREATE TABLE discussions (
  id UUID PRIMARY KEY,
  lesson_id VARCHAR(100) NOT NULL,
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Comments table
CREATE TABLE comments (
  id UUID PRIMARY KEY,
  discussion_id UUID REFERENCES discussions(id),
  user_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  is_solution BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Votes table
CREATE TABLE votes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  target_id UUID NOT NULL,
  target_type VARCHAR(20) NOT NULL, -- 'discussion' or 'comment'
  vote_type INT NOT NULL, -- 1 for upvote, -1 for downvote
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, target_id)
);
```

### API Endpoints
```javascript
// Discussion endpoints
GET    /api/discussions?lessonId=xxx
POST   /api/discussions
GET    /api/discussions/:id
PUT    /api/discussions/:id
DELETE /api/discussions/:id

// Comment endpoints
GET    /api/discussions/:id/comments
POST   /api/discussions/:id/comments
PUT    /api/comments/:id
DELETE /api/comments/:id

// Vote endpoints
POST   /api/vote
DELETE /api/vote/:id

// User endpoints
GET    /api/users/:id
GET    /api/users/:id/activity
PUT    /api/users/:id
```

### Frontend Components

#### Discussion Thread
```html
<div class="discussion-thread">
  <header class="thread-header">
    <h2>{{ discussion.title }}</h2>
    <div class="thread-meta">
      <span class="author">by {{ discussion.author }}</span>
      <span class="timestamp">{{ discussion.createdAt }}</span>
      <span class="category">{{ discussion.category }}</span>
    </div>
  </header>
  
  <div class="thread-content">
    <div class="vote-buttons">
      <button class="upvote">▲ {{ discussion.upvotes }}</button>
      <button class="downvote">▼</button>
    </div>
    <div class="content-body">
      {{ discussion.content }}
    </div>
  </div>
  
  <div class="comments-section">
    <h3>{{ discussion.commentCount }} Replies</h3>
    <div class="comments-list">
      <!-- Comments rendered here -->
    </div>
    <form class="comment-form">
      <textarea placeholder="Write a reply..."></textarea>
      <button type="submit">Post Reply</button>
    </form>
  </div>
</div>
```

#### User Profile
```html
<div class="user-profile">
  <header class="profile-header">
    <img src="{{ user.avatar }}" alt="{{ user.username }}" />
    <h1>{{ user.username }}</h1>
    <p class="bio">{{ user.bio }}</p>
  </header>
  
  <div class="profile-stats">
    <div class="stat">
      <span class="stat-value">{{ user.reputation }}</span>
      <span class="stat-label">Reputation</span>
    </div>
    <div class="stat">
      <span class="stat-value">{{ user.postsCount }}</span>
      <span class="stat-label">Posts</span>
    </div>
    <div class="stat">
      <span class="stat-value">{{ user.solutionsCount }}</span>
      <span class="stat-label">Solutions</span>
    </div>
  </div>
  
  <div class="profile-badges">
    <h2>Badges</h2>
    <div class="badges-grid">
      <!-- Badges displayed here -->
    </div>
  </div>
  
  <div class="profile-activity">
    <h2>Recent Activity</h2>
    <ul class="activity-list">
      <!-- Activity items -->
    </ul>
  </div>
</div>
```

### Reputation System
```javascript
const REPUTATION_ACTIONS = {
  POST_DISCUSSION: 5,
  POST_COMMENT: 2,
  RECEIVE_UPVOTE: 10,
  RECEIVE_DOWNVOTE: -2,
  SOLUTION_ACCEPTED: 25,
  COMPLETE_LESSON: 10,
  DAILY_LOGIN: 1
};

function updateReputation(userId, action) {
  const points = REPUTATION_ACTIONS[action];
  // Update user reputation in database
  db.users.update(userId, { 
    reputation: db.raw('reputation + ?', [points]) 
  });
}
```

### Moderation System
```javascript
class ModerationSystem {
  async reportContent(contentId, contentType, reason, reporterId) {
    await db.reports.create({
      contentId,
      contentType,
      reason,
      reporterId,
      status: 'pending'
    });
    
    // Auto-hide if multiple reports
    const reportCount = await db.reports.count({ contentId });
    if (reportCount >= 3) {
      await this.hideContent(contentId, contentType);
    }
  }

  async hideContent(contentId, contentType) {
    const table = contentType === 'discussion' ? 'discussions' : 'comments';
    await db[table].update(contentId, { hidden: true });
  }

  async detectSpam(content) {
    // Simple spam detection
    const spamKeywords = ['viagra', 'casino', 'lottery'];
    const hasSpam = spamKeywords.some(keyword => 
      content.toLowerCase().includes(keyword)
    );
    
    return hasSpam;
  }
}
```

## Acceptance Criteria
- [ ] Users can create discussions
- [ ] Comments can be posted and nested
- [ ] Voting system works correctly
- [ ] Reputation updates accurately
- [ ] User profiles display correctly
- [ ] Moderation tools functional
- [ ] Email notifications for replies
- [ ] Search within discussions
- [ ] Mobile responsive design

## Estimated Effort
- Backend API: 10 days
- Frontend UI: 8 days
- User Authentication: 5 days
- Moderation System: 4 days
- Notification System: 3 days
- Testing: 5 days
- **Total: 35 days**

## Dependencies
- User authentication system
- Database (PostgreSQL recommended)
- Email service (SendGrid, AWS SES)
- Real-time updates (WebSockets optional)

## Security Considerations
- Input sanitization (prevent XSS)
- Rate limiting on posts
- CAPTCHA for new users
- Content moderation
- Privacy controls

## Future Enhancements
- Real-time chat
- Video/audio discussions
- Mentorship program
- Study groups
- Live coding sessions
- Integration with Discord/Slack
- Gamification leaderboards
