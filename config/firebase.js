// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnGa6q0iOE-n9tZAOglSKo__koudzEc78",
  authDomain: "tjob-f6016.firebaseapp.com",
  projectId: "tjob-f6016",
  storageBucket: "tjob-f6016.appspot.com",
  messagingSenderId: "510975280581",
  appId: "1:510975280581:web:4d1976b7de13e5873377ac",
  measurementId: "G-8HWV34CT2P"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export{db, auth, provider};