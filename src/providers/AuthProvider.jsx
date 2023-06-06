// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Iyx52JiNMxTfG6aYerQ2OTV5DeExWo8",
  authDomain: "shutter-camp.firebaseapp.com",
  projectId: "shutter-camp",
  storageBucket: "shutter-camp.appspot.com",
  messagingSenderId: "138213486872",
  appId: "1:138213486872:web:2943c8adc5fe0f1f83ee6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;