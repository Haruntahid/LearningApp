// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtw_6zD5YkJrnp66HlXRNcvmQZvtaCi9E",

  authDomain: "appuser-f8ed3.firebaseapp.com",

  projectId: "appuser-f8ed3",

  storageBucket: "appuser-f8ed3.appspot.com",

  messagingSenderId: "68419480625",

  appId: "1:68419480625:web:10bed0b837a4be0608b910",
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
// const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
