import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDNompT2jDPpT2BpjlrvAXaUlp-V9X7MoQ",
  authDomain: "crwn-db-6f78f.firebaseapp.com",
  projectId: "crwn-db-6f78f",
  storageBucket: "crwn-db-6f78f.appspot.com",
  messagingSenderId: "798991868180",
  appId: "1:798991868180:web:338f760e01c092aa91a201",
  measurementId: "G-5B2LFQ1X09",
};
// api request is asynchronous action
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email}  = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
