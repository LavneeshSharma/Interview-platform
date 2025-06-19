// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFX-qOF2TcR-8vtb7SCoW7PKuEOtpMytA",
    authDomain: "prepwise-c375f.firebaseapp.com",
    projectId: "prepwise-c375f",
    storageBucket: "prepwise-c375f.firebasestorage.app",
    messagingSenderId: "843297565150",
    appId: "1:843297565150:web:b6ab74f63200da466e154f",
    measurementId: "G-TQM08LH8PP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


