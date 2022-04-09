import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI01IofUMVYKItBbKzama98gzZg0z9nUQ",
  authDomain: "house-listing-app-12832.firebaseapp.com",
  projectId: "house-listing-app-12832",
  storageBucket: "house-listing-app-12832.appspot.com",
  messagingSenderId: "965944178110",
  appId: "1:965944178110:web:512d1515fd62b58fbcb5ef",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
