// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
    } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe-O_ip0CHYkSzAVFE3zX4csGLU1mjrug",
    authDomain: "cap-frontend.firebaseapp.com",
    projectId: "cap-frontend",
    storageBucket: "cap-frontend.appspot.com",
    messagingSenderId: "496109629399",
    appId: "1:496109629399:web:089780fd576aab17f1a592"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
    };

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
    };

const logout = () => {
    signOut(auth);
    };

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout
    };

