import firebase from 'firebase/compact/app';
import 'firebase/compact/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDx2jeMLUPTNRBATKOaMnAoU6YEfHqbdOk",
    authDomain: "blog-72397.firebaseapp.com",
    projectId: "blog-72397",
    storageBucket: "blog-72397.appspot.com",
    messagingSenderId: "9093496905",
    appId: "1:9093496905:web:582f4d54ac8c003bb43f98"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase;