// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBqxGKLTCLPU3F97wJvMRIkEwOelVOqvAA",
    authDomain: "clone-2022.firebaseapp.com",
    projectId: "clone-2022",
    storageBucket: "clone-2022.appspot.com",
    messagingSenderId: "68174984457",
    appId: "1:68174984457:web:e6ee58b6d74a7d3f344fd8",
    measurementId: "G-HJZ9HHWN0L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };