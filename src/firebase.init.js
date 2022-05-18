// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC81V6WzP0u7PtNa86e26ojJsDPcyMhBO4",
  authDomain: "to-do-app-1c9bc.firebaseapp.com",
  projectId: "to-do-app-1c9bc",
  storageBucket: "to-do-app-1c9bc.appspot.com",
  messagingSenderId: "148515462543",
  appId: "1:148515462543:web:fa797cc56173f70304bffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;