importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDhkpS7hG9SJa5QGqXC2xs-wf9G2p1X3Y8",
  authDomain: "fr-kanyoza-2026-new.firebaseapp.com",
  projectId: "fr-kanyoza-2026-new",
  storageBucket: "fr-kanyoza-2026-new.firebasestorage.app",
  messagingSenderId: "1054111043868",
  appId: "1:1054111043868:web:5283f3228f3b7f816c6ad9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});
