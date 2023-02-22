// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF8wjLjSdCeDpndlPUTM6KW_LRbh1eHqo",
  authDomain: "car-service-22485.firebaseapp.com",
  projectId: "car-service-22485",
  storageBucket: "car-service-22485.appspot.com",
  messagingSenderId: "334848422790",
  appId: "1:334848422790:web:1b42b5415dc15e95baf207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;