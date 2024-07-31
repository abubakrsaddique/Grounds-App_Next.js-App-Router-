import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3KsunN7KbtazKzgUxQ05VVJUUw0r057s",
  authDomain: "groundsapp-app-router.firebaseapp.com",
  projectId: "groundsapp-app-router",
  storageBucket: "groundsapp-app-router.appspot.com",
  messagingSenderId: "498183522365",
  appId: "1:498183522365:web:9e105c791f19c27015c254",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage().ref();

export { firebase, auth, firestore, storage, googleProvider };
