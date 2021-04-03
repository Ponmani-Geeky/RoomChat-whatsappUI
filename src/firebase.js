// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2O59j_ea_9WoJckTQObyEnafnsw3lQc8",
  authDomain: "whatsapp-clone-44a49.firebaseapp.com",
  projectId: "whatsapp-clone-44a49",
  storageBucket: "whatsapp-clone-44a49.appspot.com",
  messagingSenderId: "413879778542",
  appId: "1:413879778542:web:1af5d47f7eae7f142907ff",
  measurementId: "G-8P9M6V3W0Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
