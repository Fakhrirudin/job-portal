// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7qpqJ2HGp8R7YAkA3l5_w1hWouR-EoY0",
  authDomain: "jobb-c43b9.firebaseapp.com",
  projectId: "jobb-c43b9",
  storageBucket: "jobb-c43b9.appspot.com",
  messagingSenderId: "731674707937",
  appId: "1:731674707937:web:f80a50e54b9398b255f4a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };