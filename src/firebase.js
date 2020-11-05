import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYb2CamTNz_6Bp1d4N5tYF8Rgw8QmYhu8",
  authDomain: "todo-app-976b2.firebaseapp.com",
  databaseURL: "https://todo-app-976b2.firebaseio.com",
  projectId: "todo-app-976b2",
  storageBucket: "todo-app-976b2.appspot.com",
  messagingSenderId: "993376054988",
  appId: "1:993376054988:web:e812f9d5df919f83cddc69",
  measurementId: "G-4W7H3SQM3N",
});

const db = firebaseApp.firestore();

export default db;
