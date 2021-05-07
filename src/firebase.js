import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCwQFj2ayjbtBFHUo5EvrH1lptHClPTuLQ",
  authDomain: "todo-370f5.firebaseapp.com",
  projectId: "todo-370f5",
  storageBucket: "todo-370f5.appspot.com",
  messagingSenderId: "139790146348",
  appId: "1:139790146348:web:b57567859ace79c8c2aa89",
  measurementId: "G-43CXN4YF4Q"
   
});

const db=firebaseApp.firestore();  
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();


export {provider,auth};
export default db ;