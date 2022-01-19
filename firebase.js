// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrW0ur1bQU64OCG7Id-LNf66zunNaNzI8",
  authDomain: "blog-0-1.firebaseapp.com",
  projectId: "blog-0-1",
  storageBucket: "blog-0-1.appspot.com",
  messagingSenderId: "930477340796",
  appId: "1:930477340796:web:259925b4d6430b641ff1f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}
