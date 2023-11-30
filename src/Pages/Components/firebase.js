// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUQU4jUVwcz3CEjFFWvbV3bn3X0sEoboA",
  authDomain: "expense-tracker-9901a.firebaseapp.com",
  projectId: "expense-tracker-9901a",
  storageBucket: "expense-tracker-9901a.appspot.com",
  messagingSenderId: "607125787270",
  appId: "1:607125787270:web:5073c5ff9d10f17c157707",
  measurementId: "G-6N8FT7RM9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
export {app,auth}