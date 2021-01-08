import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyApZvN9Qs6pWasmpEc69GHpiKOzooWl0Qk",
    authDomain: "gymbo-113dd.firebaseapp.com",
    projectId: "gymbo-113dd",
    storageBucket: "gymbo-113dd.appspot.com",
    messagingSenderId: "318823339094",
    appId: "1:318823339094:web:4a34f2f5457a2cf14f97f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export{firebase};

  let db = firebase.firebase();

 