// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getMessaging, getToken} from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messaging = getMessaging(app);

let instrumentsList = []; // Variable to store the cached list of instruments

// Request permission and get token...
function requestPermissionAndGetToken() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // Get registration token
            getToken(messaging, { vapidKey: process.env.FIREBASE_VAPID_KEY }).then((currentToken) => {
                if (currentToken) {
                    console.log('Registration token:', currentToken);
                    // Send the token to your server and update the UI if necessary
                    // ...
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                    // Show permission request UI
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('/service-worker.js', import.meta.url), {type: 'module'})
        .then(function(registration) {
            console.log('Service Worker service-worker.js Registered', registration);
        })
        .catch(function(err) {
            console.log('Service Worker service-worker.js registration failed: ', err);
        });

    navigator.serviceWorker.register(new URL('/firebase-messaging-sw.js', import.meta.url), {type: 'module'})
        .then(function(registration) {
            console.log('Service Worker firebase-messaging-sw.js Registered', registration);
        })
        .catch(function(err) {
            console.log('Service Worker firebase-messaging-sw.js registration failed: ', err);
        });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can install the PWA
    showInstallButton();
});

function showInstallButton() {
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';
    installButton.addEventListener('click', async () => {
        // Hide the install button
        installButton.style.display = 'none';
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null;
    });
}

window.addEventListener('appinstalled', (evt) => {
    console.log('App was installed.');
    // Optionally, send analytics event to indicate successful install
});


document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const instrumentDetails = document.getElementById('instrument-details');
    const enableNotificationsButton = document.getElementById('enable-notifications');


    // Hide containers initially
    searchResults.classList.add('hidden');
    instrumentDetails.classList.add('hidden');

    requestPermissionAndGetToken();

    if ('Notification' in window) {
        // Check if the browser supports notifications
        if (Notification.permission === 'default') {
            // If permission hasn't been asked yet
            enableNotificationsButton.style.display = 'block';
            enableNotificationsButton.addEventListener('click', requestPermissionAndGetToken);
        } else {
            // Hide button if permission was already granted or denied
            enableNotificationsButton.style.display = 'none';
        }
    } else {
        // Notifications aren't supported
        enableNotificationsButton.style.display = 'none';
        console.log('This browser does not support notifications.');
    }

    // Fetch the instruments list from Firestore or retrieve from Local Storage
    async function fetchInstrumentsList() {
        const storedInstruments = localStorage.getItem('instrumentsList');
        if (storedInstruments) {
            instrumentsList = JSON.parse(storedInstruments);
            console.log('Instruments list retrieved from Local Storage');
        } else {
            const instrumentsCol = collection(db, "Instruments");
            const instrumentsSnapshot = await getDocs(instrumentsCol);
            const instruments = instrumentsSnapshot.docs.map(doc => doc.data());
            instrumentsList = instruments;
            localStorage.setItem('instrumentsList', JSON.stringify(instrumentsList));
            console.log('Instruments list fetched from Firestore and stored in Local Storage');
        }
    }

    function searchInstruments(searchText) {
        try {
            // Convert the search text to lowercase to make the search case-insensitive
            const searchTextLower = searchText.toLowerCase();
            console.log('Search text:', searchTextLower); // Log the search text for debugging

            // Filter the cached instruments list based on the search text
            const results = instrumentsList.filter((instrument) => {
                if (instrument.InstrumentName && instrument.InstrumentName.toLowerCase().includes(searchTextLower)) {
                    console.log('Matching instrument:', instrument.InstrumentName); // Log the matching instrument name
                    return true;
                }
                return false;
            });
            console.log('Search results:', results); // Log the search results for debugging

            if (results.length === 0) {
                displayNoResults();
            } else {
                displaySearchResults(results);
            }
        } catch (error) {
            console.error("Error searching instruments:", error);
            displayError("An error occurred while searching instruments.");
        }
    }

    function displaySearchResults(instruments) {
        console.log('Displaying search results'); // Log for debugging
        searchResults.innerHTML = ''; // Clear previous results
        instruments.forEach((instrument) => {
            const div = document.createElement('div');
            div.textContent = instrument.InstrumentName;
            div.addEventListener('click', () => {
                displayInstrumentDetails(instrument);
                searchResults.classList.add('hidden'); // Hide search results after clicking an item
            });
            searchResults.appendChild(div);
        });
        searchResults.classList.remove('hidden'); // Show search results container
    }

    function displayInstrumentDetails(instrument) {
        instrumentDetails.innerHTML = `
            <h2>${instrument.InstrumentName}</h2>
            <p>${instrument.Description}</p>
            <p>French: ${instrument.French}</p>
            <p>German: ${instrument.German}</p>
            <p>Italian: ${instrument.Italian}</p>
            <p>Spanish: ${instrument.Spanish}</p>
        `;
        instrumentDetails.classList.remove('hidden'); // Show instrument details container
    }

    function displayNoResults() {
        searchResults.innerHTML = '<div>No results found.</div>';
        searchResults.classList.remove('hidden'); // Show search results container
        instrumentDetails.classList.add('hidden'); // Hide instrument details container
    }

    function displayError(message) {
        searchResults.innerHTML = `<div class="error">${message}</div>`;
        searchResults.classList.remove('hidden'); // Show search results container
        instrumentDetails.classList.add('hidden'); // Hide instrument details container
    }

    // Fetch the instruments list when the page loads
    await fetchInstrumentsList();

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        console.log('Search input value:', query); // Log the search input value for debugging
        if (query) {
            searchInstruments(query);
        } else {
            searchResults.classList.add('hidden'); // Hide search results container
            instrumentDetails.classList.add('hidden'); // Hide instrument details container
        }
    });
});
