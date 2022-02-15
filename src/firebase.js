// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsPE8OJMSjJaFStw3dALzpgFh16EmarBI",
  authDomain: "purple-fish-3bae3.firebaseapp.com",
  projectId: "purple-fish-3bae3",
  storageBucket: "purple-fish-3bae3.appspot.com",
  messagingSenderId: "445955734933",
  appId: "1:445955734933:web:f82e127a6a5b44df00ca9c",
  measurementId: "G-D6R3D940K7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
