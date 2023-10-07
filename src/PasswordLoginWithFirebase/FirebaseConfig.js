// Import necessary Firebase functions and modules
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Firebase project configuration containing API keys and settings
const firebaseConfig = {
    apiKey: "AIzaSyAN4vWqrKfpbT8yV82rOQj1Wir-WehSGSo",
    authDomain: "teamtempo-auth-dev.firebaseapp.com",
    projectId: "teamtempo-auth-dev",
    storageBucket: "teamtempo-auth-dev.appspot.com",
    messagingSenderId: "764392497327",
    appId: "1:764392497327:web:1b4643e4eeee6a4f5e345a"
  };

// Initialize the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Export the Firebase authentication service instance for use in the application
export const database = getAuth(app)