import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIb0NLI9lAAKp5EX2mqNoIh_gvbtJJ5Gs",
  authDomain: "clone-561d0.firebaseapp.com",
  databaseURL: "https://clone-561d0.firebaseio.com",
  projectId: "clone-561d0",
  storageBucket: "clone-561d0.appspot.com",
  messagingSenderId: "662526303623",
  appId: "1:662526303623:web:797ec6b71ae5a315548722",
  measurementId: "G-9B7WEY9LRR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
