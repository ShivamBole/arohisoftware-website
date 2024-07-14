// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHaFtR22GioNgE0_4w45Ku1aAwkz-35KE",
  authDomain: "arohisoftware-6464e.firebaseapp.com",
  projectId: "arohisoftware-6464e",
  storageBucket: "arohisoftware-6464e.appspot.com",
  messagingSenderId: "69631505964",
  appId: "1:69631505964:web:e36c5b6f5e4c13214a8389",
  measurementId: "G-FWECRB4QQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider , db };