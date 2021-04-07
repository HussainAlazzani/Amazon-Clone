import firebase from "firebase";
require("dotenv").config();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "project-91850.firebaseapp.com",
    projectId: "project-91850",
    storageBucket: "project-91850.appspot.com",
    messagingSenderId: "760097466828",
    appId: "1:760097466828:web:66352cd844960920a21569",
    measurementId: "G-EYVTFHGKYD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };