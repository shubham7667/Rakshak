import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import dotenv from 'dotenv'
// dotenv.config()
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "rakshak-1f1ae.firebaseapp.com",
  projectId: "rakshak-1f1ae",
  storageBucket: "rakshak-1f1ae.firebasestorage.app",
  messagingSenderId: "1086574669882",
  appId: "1:1086574669882:web:5709069b6078e5f22ac503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}