// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgV_LUMg2A8QD1l_7jiQ6wYRMaqSMuqmM",
  authDomain: "portafolio-germanriveros.firebaseapp.com",
  projectId: "portafolio-germanriveros",
  storageBucket: "portafolio-germanriveros.firebasestorage.app",
  messagingSenderId: "592862145930",
  appId: "1:592862145930:web:39a141b0d2c6872dcdec73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;