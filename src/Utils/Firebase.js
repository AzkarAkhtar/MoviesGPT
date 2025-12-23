// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASOQz81PPLgPtIKd8EH5vV1dbe6HFB4s0",
  authDomain: "moviesgpt-9eb82.firebaseapp.com",
  projectId: "moviesgpt-9eb82",
  storageBucket: "moviesgpt-9eb82.firebasestorage.app",
  messagingSenderId: "711353317626",
  appId: "1:711353317626:web:801c04431431c4201e7143",
  measurementId: "G-GZE3KHM5Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);