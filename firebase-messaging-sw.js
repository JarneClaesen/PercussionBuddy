import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


// Retrieve an instance of Firebase Messaging so that it can handle background messages.
// This is the only thing needed for receiving push messages in the service worker.
const messaging = getMessaging(firebaseApp);

/*
onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Extract title and body from payload.data or payload.notification
    const notificationTitle = payload.notification.title || 'Default Title';
    const notificationBody = payload.notification.body || 'Default body text.';
    const notificationOptions = {
        body: notificationBody,
        icon: '/firebase-logo.png' // Adjust this path to your actual icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
*/
