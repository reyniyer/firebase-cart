import firebase from 'firebase'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALrslOiNnjQn8vRhfikDiFfJoUTKspdgU",
  authDomain: "use-case-asi-9d291.firebaseapp.com",
  projectId: "use-case-asi-9d291",
  storageBucket: "use-case-asi-9d291.appspot.com",
  messagingSenderId: "180775198644",
  appId: "1:180775198644:web:bf2836bd10a89ccca09ce1",
  measurementId: "G-0KSZPF1HRM"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase

export { auth, storage, db, fs };
