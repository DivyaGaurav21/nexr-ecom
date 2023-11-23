
//----FIREBASE CONFIGURATION FOR USER AUTHENTICATION----//

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRwSKiy3tiQhBbXfHaL7-ZNxGj7sU-FQ4",
    authDomain: "ecommerce-ipsator.firebaseapp.com",
    projectId: "ecommerce-ipsator",
    storageBucket: "ecommerce-ipsator.appspot.com",
    messagingSenderId: "1091662411953",
    appId: "1:1091662411953:web:6d39066f90913678098a90",
    measurementId: "G-11F9WBH0HC"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
