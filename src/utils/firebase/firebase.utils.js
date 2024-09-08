import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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

// Create a DB instance
export const db = getFirestore();

// Create a Google Authentication Popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Create a Google Authentication redirect page
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Save user in DB from Google Auth
export const createUserDocumentFromAuth = async (userAuth) => {
  // Create an instance of document (doc take a db, a collection name, an id)
  const userDocRefInstance = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRefInstance);

  console.log(userSnapshot.exists());

  // If user doesnt exist in DB, wer create it
  const userExist = userSnapshot.exists();

  if (!userExist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    const userData = {
      displayName,
      email,
      createdAt,
    };

    try {
      await setDoc(userDocRefInstance, userData);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  // if user exist, we return the userDocRef
  return userDocRefInstance;
};
