// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxx59CGW34tHT_QBhthr66dSNAVqpnJTc",
  authDomain: "e-library-cc5f5.firebaseapp.com",
  projectId: "e-library-cc5f5",
  storageBucket: "e-library-cc5f5.appspot.com",
  messagingSenderId: "216897560858",
  appId: "1:216897560858:web:9c774682e19b0c7654cca3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()