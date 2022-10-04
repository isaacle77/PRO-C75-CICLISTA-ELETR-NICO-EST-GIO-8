import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyADumbLIsXZMUQvB2Ytsv5u56E8sb_IXUU",
  authDomain: "pro-71-bicicleta.firebaseapp.com",
  databaseURL: "https://pro-71-bicicleta-default-rtdb.firebaseio.com",
  projectId: "pro-71-bicicleta",
  storageBucket: "pro-71-bicicleta.appspot.com",
  messagingSenderId: "375702355936",
  appId: "1:375702355936:web:86c0adf69165490ee77585"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
