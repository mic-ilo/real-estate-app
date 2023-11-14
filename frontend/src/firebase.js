// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c546.firebaseapp.com",
  projectId: "mern-estate-6c546",
  storageBucket: "mern-estate-6c546.appspot.com",
  messagingSenderId: "423026250414",
  appId: "1:423026250414:web:99a2985ac8df4c5eff933f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);