// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API_TOKEN",
  authDomain: "re-auth-app.firebaseapp.com",
  projectId: "re-auth-app",
  storageBucket: "re-auth-app.firebasestorage.app",
  messagingSenderId: "271851683397",
  appId: "1:271851683397:web:0ac3823eb6a6173f20ad2c",
  measurementId: "G-R21EC5F8CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
