import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0xGlbwQPPm7KNqXJjceByfWb4G2ih5f0",
  authDomain: "voice-ai-a0f6e.firebaseapp.com",
  projectId: "voice-ai-a0f6e",
  storageBucket: "voice-ai-a0f6e.firebasestorage.app",
  messagingSenderId: "86247939490",
  appId: "1:86247939490:web:055b67b928a175c7b026fb",
  measurementId: "G-PPSGT784TG",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
