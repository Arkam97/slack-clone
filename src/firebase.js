// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJWehjPSDcZCXPbK741jhkSyq5Ab9AKU8",
    authDomain: "slack-clone-a0ead.firebaseapp.com",
    projectId: "slack-clone-a0ead",
    storageBucket: "slack-clone-a0ead.appspot.com",
    messagingSenderId: "905901060480",
    appId: "1:905901060480:web:695b86eec902d555061165",
    measurementId: "G-9PGFPVVVKV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;