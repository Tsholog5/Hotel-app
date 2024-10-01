// Firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Storage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Q1U5tKLJLGCfCxavE26qurNz088_V4w",
  authDomain: "views-boutique-hotel.firebaseapp.com",
  projectId: "views-boutique-hotel",
  storageBucket: "views-boutique-hotel.appspot.com",
  messagingSenderId: "459067470539",
  appId: "1:459067470539:web:59dcbc35b7ea3a9eaba14e",
  measurementId: "G-X8CKJ056GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Storage

export { auth, db, storage }; // Ensure storage is exported
