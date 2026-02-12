// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_t_H7uUbNn0e63pdYdeGKY-AvI_A-ndo",
  authDomain: "game-center-3de58.firebaseapp.com",
  projectId: "game-center-3de58",
  storageBucket: "game-center-3de58.firebasestorage.app",
  messagingSenderId: "885728990891",
  appId: "1:885728990891:web:e1fa17519d0fcffdcc89ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
