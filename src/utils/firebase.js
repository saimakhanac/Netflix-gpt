// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsQ-2fvLbQjMc3Gyhbo0CxF8SImKiCERQ",
  authDomain: "netflix-gpt-11429.firebaseapp.com",
  projectId: "netflix-gpt-11429",
  storageBucket: "netflix-gpt-11429.firebasestorage.app",
  messagingSenderId: "969452273342",
  appId: "1:969452273342:web:92b3c2a7e48ae6b50668ef",
  measurementId: "G-5XPH6XCWFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
