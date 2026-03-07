# Issue #06: Offline Access

## Priority: Low

## Description
Enable users to download lessons for offline study and sync progress when reconnected.

## Problem Statement
Users may want to study in environments without reliable internet:
- During commutes (trains, planes)
- In areas with poor connectivity
- To save mobile data
- For uninterrupted learning

## Proposed Solution

### Features
1. **Download Lessons**
   - Download individual lessons
   - Download entire categories
   - Bulk download option
   - Storage management

2. **Offline Mode**
   - Automatic offline detection
   - Cached content display
   - Offline indicator in UI
   - Queue actions for sync

3. **Progress Sync**
   - Auto-sync when online
   - Manual sync trigger
   - Conflict resolution
   - Sync status indicator

4. **Service Worker**
   - Cache static assets
   - Cache lesson content
   - Background sync
   - Update notifications

## Technical Implementation

### Service Worker Registration
```javascript
// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker registered'))
    .catch(err => console.error('SW registration failed', err));
}
```

### Service Worker (sw.js)
```javascript
const CACHE_NAME = 'study-platform-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/images/logo.png'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Background sync
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});
```

### Offline Manager
```javascript
class OfflineManager {
  constructor() {
    this.isOnline = navigator.onLine;
    this.setupListeners();
  }

  setupListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.syncPendingData();
      this.updateUI();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.updateUI();
    });
  }

  async downloadLesson(lessonId) {
    const lesson = await fetch(`/api/lessons/${lessonId}`).then(r => r.json());
    
    // Store in IndexedDB
    const db = await this.openDB();
    const tx = db.transaction('lessons', 'readwrite');
    await tx.objectStore('lessons').put(lesson);
    
    return lesson;
  }

  async downloadCategory(categoryId) {
    const lessons = await fetch(`/api/categories/${categoryId}/lessons`)
      .then(r => r.json());
    
    for (const lesson of lessons) {
      await this.downloadLesson(lesson.id);
    }
  }

  async getOfflineLessons() {
    const db = await this.openDB();
    const tx = db.transaction('lessons', 'readonly');
    return tx.objectStore('lessons').getAll();
  }

  async syncPendingData() {
    const pendingActions = await this.getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await this.executeAction(action);
        await this.removePendingAction(action.id);
      } catch (error) {
        console.error('Sync failed for action:', action, error);
      }
    }
  }

  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('StudyPlatform', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        if (!db.objectStoreNames.contains('lessons')) {
          db.createObjectStore('lessons', { keyPath: 'id' });
        }
        
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress', { keyPath: 'lessonId' });
        }
        
        if (!db.objectStoreNames.contains('pendingActions')) {
          db.createObjectStore('pendingActions', { 
            keyPath: 'id', 
            autoIncrement: true 
          });
        }
      };
    });
  }
}
```

### Storage Management UI
```html
<div class="offline-settings">
  <h2>Offline Storage</h2>
  
  <div class="storage-info">
    <p>Used: <span id="storage-used">0 MB</span></p>
    <p>Available: <span id="storage-available">0 MB</span></p>
    <div class="storage-bar">
      <div class="storage-used-bar" style="width: 0%"></div>
    </div>
  </div>
  
  <div class="downloaded-content">
    <h3>Downloaded Lessons</h3>
    <ul id="downloaded-lessons">
      <!-- List of downloaded lessons -->
    </ul>
  </div>
  
  <button id="clear-cache">Clear All Offline Data</button>
</div>
```

## Acceptance Criteria
- [ ] Service worker installs correctly
- [ ] Static assets cached on first visit
- [ ] Lessons can be downloaded for offline use
- [ ] Offline indicator shows when disconnected
- [ ] Progress syncs automatically when online
- [ ] Storage usage displayed accurately
- [ ] Users can manage downloaded content
- [ ] Works across all major browsers
- [ ] No data loss during sync

## Estimated Effort
- Service Worker Setup: 3 days
- IndexedDB Implementation: 3 days
- Download Manager: 3 days
- Sync Logic: 4 days
- UI Components: 2 days
- Testing: 3 days
- **Total: 18 days**

## Dependencies
- Service Worker API support
- IndexedDB API
- Background Sync API
- Cache API

## Storage Considerations
- Quota management (typically 50MB-100MB)
- Automatic cleanup of old content
- User control over storage
- Compression for larger lessons

## Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Partial support (no background sync)
- Mobile browsers: Good support

## Future Enhancements
- Progressive Web App (PWA) installation
- Push notifications for updates
- Selective sync (only changed content)
- Peer-to-peer content sharing
- Offline video lessons
- Offline search
