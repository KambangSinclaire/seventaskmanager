// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Mc522mgy0zFRpWNeLtc0a7OXdkel9GY",
  authDomain: "taskmanager47-a5a51.firebaseapp.com",
  projectId: "taskmanager47-a5a51",
  storageBucket: "taskmanager47-a5a51.appspot.com",
  messagingSenderId: "717268187406",
  appId: "1:717268187406:web:24a06c43be02ac828ebf5f",
  measurementId: "G-QQZFCE2QSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);