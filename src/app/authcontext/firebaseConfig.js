// // Integrate firebase in contextApi
// import { initializeApp } from 'firebase/app';

// //firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDjf5Onq1FEnJTfnY-DTp_pTl95G34gV6Q",
//     authDomain: "ipsator-dg.firebaseapp.com",
//     projectId: "ipsator-dg",
//     storageBucket: "ipsator-dg.appspot.com",
//     messagingSenderId: "628899840749",
//     appId: "1:628899840749:web:b82100f51ffd24733642e4",
//     measurementId: "G-HXEH5VGJ2C",
//     databaseURL: "https://ipsator-dg-default-rtdb.firebaseio.com"
// };

// // -----firebaseApp is ready to connect------//
// export const firebaseApp = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjf5Onq1FEnJTfnY-DTp_pTl95G34gV6Q",
    authDomain: "ipsator-dg.firebaseapp.com",
    databaseURL: "https://ipsator-dg-default-rtdb.firebaseio.com",
    projectId: "ipsator-dg",
    storageBucket: "ipsator-dg.appspot.com",
    messagingSenderId: "628899840749",
    appId: "1:628899840749:web:383d521fa1cfb8623642e4",
    measurementId: "G-2TG91NFW7B"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
