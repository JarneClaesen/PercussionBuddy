import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

document.getElementById("add-instrument-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const instrumentName = document.getElementById("instrument-name").value;
    const description = document.getElementById("description").value;
    const french = document.getElementById("french").value;
    const german = document.getElementById("german").value;
    const italian = document.getElementById("italian").value;
    const spanish = document.getElementById("spanish").value;

    try {
        // Call the Firebase Function to send an email to the developer
        const sendInstrumentSubmission = httpsCallable(functions, "sendInstrumentSubmission");
        await sendInstrumentSubmission({
            instrumentName,
            description,
            french,
            german,
            italian,
            spanish,
        });

        alert("Instrument submission sent to the developer for review.");
        document.getElementById("add-instrument-form").reset();
    } catch (error) {
        console.error("Error sending instrument submission:", error);
        alert("An error occurred while sending the instrument submission.");
    }

    //todo
    if (navigator.onLine) {
        // User is online, proceed with the submission
        submitInstrumentData({ instrumentName, description, french, german, italian, spanish });
    } else {
        // User is offline, store the data and register for background sync
        storeInstrumentDataForSync({ instrumentName, description, french, german, italian, spanish });
        registerForBackgroundSync();
    }
});

//todo
function registerForBackgroundSync() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then(registration => {
            return registration.sync.register('sync-instruments');
        }).catch(error => {
            // system was unable to register for a sync,
            // this could be an OS-level restriction
            console.error('Background sync could not be registered:', error);
        });
    }
}

//todo
async function storeInstrumentDataForSync(data) {
    // Store the data in IndexedDB or Local Storage
}

//todo
async function submitInstrumentData(data) {
    // Submit the data to the server
    // This is where you'd have your existing code to submit the form data
}
