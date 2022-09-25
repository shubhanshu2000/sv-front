// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwrYdhqAuB5oHABi1qAKzJOnNHpgfMXn0",
  authDomain: "login-form-27441.firebaseapp.com",
  projectId: "login-form-27441",
  storageBucket: "login-form-27441.appspot.com",
  messagingSenderId: "920471020583",
  appId: "1:920471020583:web:fd7acc207e3170d0a39a02",
  measurementId: "G-TSEBM7QP03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
