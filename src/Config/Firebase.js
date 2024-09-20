// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const auth =  getAuth(app);
const db = getFirestore(app);

export {auth,db}
