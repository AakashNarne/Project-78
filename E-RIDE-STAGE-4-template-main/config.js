import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBGbe4VPET8j6eKVJaVLumzNLslz0eEa7s",
  authDomain: "e-ride-57a07.firebaseapp.com",
  projectId: "e-ride-57a07",
  storageBucket: "e-ride-57a07.appspot.com",
  messagingSenderId: "880035513379",
  appId: "1:880035513379:web:772488eabebebd0b2d5d96"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


