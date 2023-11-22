
import { initializeApp } from "firebase/app";

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

