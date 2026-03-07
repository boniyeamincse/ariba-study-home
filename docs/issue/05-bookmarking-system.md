# Issue #05: Bookmarking System

## Priority: Low

## Description
Allow users to bookmark favorite lessons and add personal notes for quick reference and personalized learning.

## Problem Statement
Users often want to:
- Save important lessons for later review
- Mark frequently referenced content
- Add personal notes and insights
- Create custom study collections
- Quickly access favorite resources

## Proposed Solution

### Features
1. **Bookmark Lessons**
   - One-click bookmark button on each lesson
   - Visual indicator for bookmarked content
   - Bookmark counter
   - Quick unbookmark option

2. **Bookmarks Page**
   - Dedicated page listing all bookmarks
   - Grid or list view options
   - Sort by date added, title, category
   - Search within bookmarks

3. **Personal Notes**
   - Add notes to any lesson
   - Rich text editor support
   - Markdown formatting
   - Attach notes to specific sections

4. **Collections/Folders**
   - Organize bookmarks into collections
   - Create custom study paths
   - Share collections (future)
   - Export/import bookmarks

## Technical Implementation

### Data Structure
```javascript
{
  userId: "user123",
  bookmarks: [
    {
      id: "bm-001",
      lessonId: "linux-basics",
      lessonTitle: "Introduction to Linux",
      category: "Getting Started",
      bookmarkedAt: "2026-03-05T10:30:00Z",
      collection: "Fundamentals",
      notes: [
        {
          id: "note-001",
          content: "Remember: Everything is a file in Linux",
          createdAt: "2026-03-05T10:35:00Z",
          updatedAt: "2026-03-06T14:20:00Z"
        }
      ],
      tags: ["important", "review"]
    }
  ],
  collections: [
    {
      id: "col-001",
      name: "Fundamentals",
      description: "Core concepts to master",
      color: "#007bff",
      createdAt: "2026-03-01T09:00:00Z"
    }
  ]
}
```

### UI Components

#### Bookmark Button
```html
<button 
  class="bookmark-btn" 
  data-lesson-id="linux-basics"
  aria-label="Bookmark this lesson"
>
  <svg class="bookmark-icon">
    <use href="#icon-bookmark"></use>
  </svg>
  <span class="bookmark-text">Bookmark</span>
</button>
```

#### Bookmarks Page
```html
<div class="bookmarks-page">
  <header class="bookmarks-header">
    <h1>My Bookmarks</h1>
    <div class="bookmarks-controls">
      <input type="search" placeholder="Search bookmarks..." />
      <select id="sort-by">
        <option value="date">Date Added</option>
        <option value="title">Title</option>
        <option value="category">Category</option>
      </select>
      <button id="view-toggle">Grid/List</button>
    </div>
  </header>
  
  <aside class="collections-sidebar">
    <h2>Collections</h2>
    <ul id="collections-list">
      <!-- Collections populated here -->
    </ul>
    <button id="new-collection">+ New Collection</button>
  </aside>
  
  <main class="bookmarks-grid">
    <!-- Bookmarked lessons displayed here -->
  </main>
</div>
```

### JavaScript Implementation
```javascript
class BookmarkManager {
  constructor() {
    this.bookmarks = this.loadBookmarks();
    this.collections = this.loadCollections();
  }

  loadBookmarks() {
    const data = localStorage.getItem('bookmarks');
    return data ? JSON.parse(data) : [];
  }

  saveBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  addBookmark(lessonId, lessonData) {
    const bookmark = {
      id: `bm-${Date.now()}`,
      lessonId,
      ...lessonData,
      bookmarkedAt: new Date().toISOString(),
      notes: [],
      tags: []
    };
    
    this.bookmarks.push(bookmark);
    this.saveBookmarks();
    this.updateUI(lessonId, true);
    
    return bookmark;
  }

  removeBookmark(lessonId) {
    this.bookmarks = this.bookmarks.filter(b => b.lessonId !== lessonId);
    this.saveBookmarks();
    this.updateUI(lessonId, false);
  }

  isBookmarked(lessonId) {
    return this.bookmarks.some(b => b.lessonId === lessonId);
  }

  addNote(bookmarkId, noteContent) {
    const bookmark = this.bookmarks.find(b => b.id === bookmarkId);
    if (bookmark) {
      const note = {
        id: `note-${Date.now()}`,
        content: noteContent,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      bookmark.notes.push(note);
      this.saveBookmarks();
    }
  }

  searchBookmarks(query) {
    const lowerQuery = query.toLowerCase();
    return this.bookmarks.filter(b => 
      b.lessonTitle.toLowerCase().includes(lowerQuery) ||
      b.notes.some(n => n.content.toLowerCase().includes(lowerQuery)) ||
      b.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }

  exportBookmarks() {
    const data = JSON.stringify({
      bookmarks: this.bookmarks,
      collections: this.collections,
      exportedAt: new Date().toISOString()
    }, null, 2);
    
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookmarks-${Date.now()}.json`;
    a.click();
  }
}
```

## Acceptance Criteria
- [ ] Users can bookmark/unbookmark lessons
- [ ] Bookmarks persist across sessions
- [ ] Bookmarks page displays all saved items
- [ ] Notes can be added and edited
- [ ] Collections can be created and managed
- [ ] Search works within bookmarks
- [ ] Export/import functionality works
- [ ] Mobile responsive design
- [ ] Keyboard shortcuts available

## Estimated Effort
- Design: 2 days
- Frontend Development: 5 days
- Notes Editor Integration: 2 days
- Testing: 2 days
- **Total: 11 days**

## Dependencies
- localStorage or backend API
- Rich text editor (Quill.js or similar)
- User authentication (for cloud sync)

## Future Enhancements
- Cloud sync across devices
- Share bookmarks with others
- Collaborative collections
- Smart recommendations based on bookmarks
- Bookmark analytics
- Browser extension for quick bookmarking
- Email digest of bookmarked content
- Spaced repetition reminders
