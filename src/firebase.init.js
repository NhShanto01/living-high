// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_WrYKnF1dNylirwfNqx-IiZi4Ymz0NLo",
    authDomain: "living-high.firebaseapp.com",
    projectId: "living-high",
    storageBucket: "living-high.appspot.com",
    messagingSenderId: "558142082225",
    appId: "1:558142082225:web:18ac031aa420e7a602e690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;