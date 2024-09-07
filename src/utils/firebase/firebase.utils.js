import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNUgmYtvAVisG8a3HJKZPCRCc0iOxKCjo",
  authDomain: "crwn-project-db-af799.firebaseapp.com",
  projectId: "crwn-project-db-af799",
  storageBucket: "crwn-project-db-af799.appspot.com",
  messagingSenderId: "746835842164",
  appId: "1:746835842164:web:af67b5c918d17aab90ad21",
};

// Initialize Firebase App Instance
const firebaseApp = initializeApp(firebaseConfig);

// Authentication with Google
// 1- Create a provider (instance of Google Provider)
const googleProvider = new GoogleAuthProvider();

// 2- Set parameters to this provider
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Create an instance of authentication
export const auth = getAuth();

// Create a Google Authentication Popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
