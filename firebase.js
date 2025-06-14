// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Lcx9nmynAYykGB3054hRS35R87cNYZQ",
  authDomain: "codechrono-975de.firebaseapp.com",
  projectId: "codechrono-975de",
  storageBucket: "codechrono-975de.firebasestorage.app",
  messagingSenderId: "121076254526",
  appId: "1:121076254526:web:4a77afe265a986e13c8e6f",
  measurementId: "G-90MWV5GKR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
