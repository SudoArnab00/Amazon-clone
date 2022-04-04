import * as firebase from "firebase/app"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA25iUypUJjABNA9PRxt7uggZgoq-a6AyM",
    authDomain: "challenge-8c6e9.firebaseapp.com",
    projectId: "challenge-8c6e9",
    storageBucket: "challenge-8c6e9.appspot.com",
    messagingSenderId: "380397217389",
    appId: "1:380397217389:web:aab7cef36bd67d9808c164"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};