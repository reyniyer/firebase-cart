import firebase from 'firebase'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqO1WgFRJrSyyF0qTqW0d5Vu_r6s_F15Y",
  authDomain: "asi-midterm-d3b41.firebaseapp.com",
  projectId: "asi-midterm-d3b41",
  storageBucket: "asi-midterm-d3b41.appspot.com",
  messagingSenderId: "87949056092",
  appId: "1:87949056092:web:d0196a0503c9979f3dee99",
  measurementId: "G-0F963BM1SQ"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase

export { auth, storage, db, fs };