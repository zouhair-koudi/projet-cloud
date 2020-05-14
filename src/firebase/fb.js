import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDoum24Aolzbh8aYNuHWRrzjmnHTQaLW8w",
    authDomain: "gestion-des-fichiers.firebaseapp.com",
    databaseURL: "https://gestion-des-fichiers.firebaseio.com",
    projectId: "gestion-des-fichiers",
    storageBucket: "gestion-des-fichiers.appspot.com",
    messagingSenderId: "207267323343",
    appId: "1:207267323343:web:ce91dcd15ef4a5a9cb46ba"
  };
   // Initialize Firebase
   firebase.initializeApp(config);
   export const auth = firebase.auth();
   export const storage= firebase.storage();

   const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
export default firebase;


