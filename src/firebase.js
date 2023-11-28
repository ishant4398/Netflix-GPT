// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa7O2kAddwvYzmtqyf5nFw3Kexs6CT3Tk",
  authDomain: "netflix-gpt-e52da.firebaseapp.com",
  projectId: "netflix-gpt-e52da",
  storageBucket: "netflix-gpt-e52da.appspot.com",
  messagingSenderId: "98354223210",
  appId: "1:98354223210:web:c3c0e166d5088e045bd213",
  measurementId: "G-DD6CSZWZ58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();