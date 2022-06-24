import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7ylAJi0l-rSMnKrqdGbJ7IeGS595Ki9w",
  authDomain: "whatsapp-clone-52f6e.firebaseapp.com",
  projectId: "whatsapp-clone-52f6e",
  storageBucket: "whatsapp-clone-52f6e.appspot.com",
  messagingSenderId: "904404396972",
  appId: "1:904404396972:web:50b8760625da8306aa6809",
  measurementId: "G-EXSG2DJ7ZZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // main db
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
