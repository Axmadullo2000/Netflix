// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCefmHKl_w5GKHtBFJRKNfOfHGnxt2Qwv8",
    authDomain: "netflix-app-c40bf.firebaseapp.com",
    projectId: "netflix-app-c40bf",
    storageBucket: "netflix-app-c40bf.appspot.com",
    messagingSenderId: "1009958496022",
    appId: "1:1009958496022:web:8c7c564ce5a63e55695237",
    measurementId: "G-HT1ZQTCTR4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()
export default app
export {db, auth}


