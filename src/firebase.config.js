// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsqed9U0QgHsZ6aCtNC5hyIXUhboCJvjg",
  authDomain: "blog-site-aea07.firebaseapp.com",
  projectId: "blog-site-aea07",
  storageBucket: "blog-site-aea07.appspot.com",
  messagingSenderId: "1014849978815",
  appId: "1:1014849978815:web:ec54cf3029a7a6e406610a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;