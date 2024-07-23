// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5BcnN8Y2jyyNCF2SM6yi-hZD6YkfH3SE",
  authDomain: "iheartyou-f11af.firebaseapp.com",
  projectId: "iheartyou-f11af",
  storageBucket: "iheartyou-f11af.appspot.com",
  messagingSenderId: "610345514558",
  appId: "1:610345514558:web:d0541808470e68fc99436f",
  measurementId: "G-987WXYQK6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();