// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3cGAHBRo-lT9bPHdRKCQgMI7h8Q7IiVs",
  authDomain: "nanuchocolata.firebaseapp.com",
  projectId: "nanuchocolata",
  storageBucket: "nanuchocolata.appspot.com",
  messagingSenderId: "715963040359",
  appId: "1:715963040359:web:21caf51a42c08b343bcac2",
  measurementId: "G-4ZEH0FXVDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)