import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAN4vWqrKfpbT8yV82rOQj1Wir-WehSGSo",
    authDomain: "teamtempo-auth-dev.firebaseapp.com",
    projectId: "teamtempo-auth-dev",
    storageBucket: "teamtempo-auth-dev.appspot.com",
    messagingSenderId: "764392497327",
    appId: "1:764392497327:web:1b4643e4eeee6a4f5e345a"
  };

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)