## Firebase CDN
3. Ajouter les liens à la fin du **body**
```
// require
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>

// Analytics
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-analytics.js"></script>

// Auth
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-auth.js"></script>

// Firestore
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js"></script>

// Functions
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-functions.js"></script>

// Cloud messaging
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js"></script>
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.

// Cloud Storage
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-storage.js"></script>

// Performance
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-performance.js"></script>
// Beta release

// Realtime Database
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-database.js"></script>

// Remote Config
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-remote-config.js"></script>
// Beta release | For an optimal experience using Remote Config, also add the Firebase SDK for Analytics.
```

4. Initialisé Firebase dans le projet (init-firebase.js)
```
let firebaseConfig = {
  // ..
}

firebase.initializeApp(firebaseConfig);
```