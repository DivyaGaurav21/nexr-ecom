'use client'
import React, { createContext, useContext, useState } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    TwitterAuthProvider,
    signOut
} from 'firebase/auth';
// import real time firebase database 
import { getDatabase, set, ref } from 'firebase/database'
// import firebaseApp Configuration
import { firebaseApp } from './firebaseConfig'

// Create Firebase context
const AppContext = createContext(null);
//IMPORTANT LINE: Create custom hook for Firebase context
export const useFirebaseAppContext = () => {
    return useContext(AppContext);
}

// ==============================================================//
const FirebaseContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // //establish database by firebase
    const firebaseDatabase = getDatabase(firebaseApp);
    //establish auth credentials by firebase
    const firebaseAuth = getAuth(firebaseApp);

    //---sign up user function to inject in app context----//
    const signUpUserWithEmailAndPassword = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            const userDetail = result.user;
            setUser(userDetail);
        } catch (err) {
            console.log(err);
        }
    }
    //----function to put data into firebase database------//
    const putData = (key, data) => {
        return set(ref(firebaseDatabase, key), data);
    }
    //------function to sign-in with google account--------//
    const handleSignInWithGoogle = async () => {
        const googleProvider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            const userDetail = result.user;
            setUser(userDetail);
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    };
    //------function to sign-in with facebook account--------//
    const handleSignInWithFacebook = async () => {
        try {
            // Create a FacebookAuthProvider instance
            const facebookProvider = new FacebookAuthProvider();
            // Sign in with Facebook using a popup
            const result = await signInWithPopup(firebaseAuth, facebookProvider);
            // Get user details from the result
            const userDetail = result.user;
            // Update user state or perform other actions as needed
            setUser(userDetail);
        } catch (error) {
            console.error('Facebook Sign-In Error:', error);
        }
    };
    const handleSignInWithGithub = async () => {
        try {
            // Create a FacebookAuthProvider instance
            const githubProvider = new GithubAuthProvider();
            // Sign in with Facebook using a popup
            const result = await signInWithPopup(firebaseAuth, githubProvider);
            // Get user details from the result
            const userDetail = result.user;
            // Update user state or perform other actions as needed
            setUser(userDetail);
        } catch (error) {
            console.error('Github Sign-In Error:', error);
        }
    };
    const handleSignInWithTwitter = async () => {
        try {
            // Create a FacebookAuthProvider instance
            const twitterProvider = new TwitterAuthProvider();
            // Sign in with Facebook using a popup
            const result = await signInWithPopup(firebaseAuth, twitterProvider);
            // Get user details from the result
            const userDetail = result.user;
            // Update user state or perform other actions as needed
            setUser(userDetail);
        } catch (error) {
            console.error('Twitter Sign-In Error:', error);
        }
    };

    //function to sign in with user details using gmail and password
    const handleSignInWithEmailAndPassword = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const userDetail = result.user;
            setUser(userDetail);
            console.log(userDetail);
        } catch (err) {
            console.log(err);
        }
    }

    // function to sign out of firebase
    const handleSignOut = async () => {
        try {
            await signOut(firebaseAuth);
            setUser(null);
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <AppContext.Provider value={{
            signUpUserWithEmailAndPassword,
            putData,
            handleSignInWithGoogle,
            handleSignInWithFacebook,
            handleSignInWithGithub,
            handleSignInWithEmailAndPassword,
            handleSignOut,
            handleSignInWithTwitter,
            user
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default FirebaseContextProvider;