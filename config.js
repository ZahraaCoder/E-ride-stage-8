import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAKN9ZMZBI4nB1V2wU1NTuqe2g_OYZXT_g",
  authDomain: "pro71-50362.firebaseapp.com",
  projectId: "pro71-50362",
  storageBucket: "pro71-50362.appspot.com",
  messagingSenderId: "1089588246869",
  appId: "1:1089588246869:web:7ac5c9e9837e064222d7dc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
