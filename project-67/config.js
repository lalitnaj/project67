import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCrxpmMKaacKt89XEWISnmD9n1t5wcNp8w",
    authDomain: "class-test-a7cdc.firebaseapp.com",
    databaseURL: "https://class-test-a7cdc-default-rtdb.firebaseio.com",
    projectId: "class-test-a7cdc",
    storageBucket: "class-test-a7cdc.appspot.com",
    messagingSenderId: "133058211236",
    appId: "1:133058211236:web:8857c08c23a11bcdcf2531"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();