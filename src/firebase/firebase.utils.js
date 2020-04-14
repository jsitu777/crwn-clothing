import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVLdpgkBuCIKOa_Ye9D15nuOhL8qHzY_Q",
    authDomain: "crwn-db-ea666.firebaseapp.com",
    databaseURL: "https://crwn-db-ea666.firebaseio.com",
    projectId: "crwn-db-ea666",
    storageBucket: "crwn-db-ea666.appspot.com",
    messagingSenderId: "822633676724",
    appId: "1:822633676724:web:e6d644d0aadcd1ed28fce1",
    measurementId: "G-L4JPT1EP71"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
