import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 

var firebaseConfig = {
    apiKey: "AIzaSyCrvs6YpnG6aLF0Us-7QE3RQhqolZ9nVzA",
    authDomain: "firegram-f228b.firebaseapp.com",
    databaseURL: "https://firegram-f228b.firebaseio.com",
    projectId: "firegram-f228b",
    storageBucket: "firegram-f228b.appspot.com",
    messagingSenderId: "739352958031",
    appId: "1:739352958031:web:d525a02d3f03ae2d87463a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const getTimestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, getTimestamp };