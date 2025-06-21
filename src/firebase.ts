import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For more information on how to get this, visit:
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB1RiMVtmrdhEznMa-21NgTCjfiXhtmRE8",
    authDomain: "testing-dashboard-eb1a7.firebaseapp.com",
    projectId: "testing-dashboard-eb1a7",
    storageBucket: "testing-dashboard-eb1a7.firebasestorage.app",
    messagingSenderId: "432222352472",
    appId: "1:432222352472:web:8127bd063544864e52c62d",
    measurementId: "G-FZVZQNM8PJ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 