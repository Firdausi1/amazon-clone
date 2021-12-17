import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9JIboJTuS_S0y9OQ5cc7pi6gDtDlTfWY",
    authDomain: "clone-a1611.firebaseapp.com",
    databaseURL: "https://clone-a1611.firebaseio.com",
    projectId: "clone-a1611",
    storageBucket: "clone-a1611.appspot.com",
    messagingSenderId: "996057864119",
    appId: "1:996057864119:web:fb15d18d9f52c844da7a32",
    measurementId: "G-1WW0049STZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

export {database, auth};