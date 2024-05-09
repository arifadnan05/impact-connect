// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQDLzUAbyDmdui2SqsYWXP3-8caqS20h4",
  authDomain: "impact-connect-19304.firebaseapp.com",
  projectId: "impact-connect-19304",
  storageBucket: "impact-connect-19304.appspot.com",
  messagingSenderId: "63463414407",
  appId: "1:63463414407:web:cb15451a1c313f537e7622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;