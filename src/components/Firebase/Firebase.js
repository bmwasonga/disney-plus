import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA3WnfOt3deuOPdhruV2pZH3cE0tWfHLJA',
  authDomain: 'disney-plus-75166.firebaseapp.com',
  projectId: 'disney-plus-75166',
  storageBucket: 'disney-plus-75166.appspot.com',
  messagingSenderId: '910228411908',
  appId: '1:910228411908:web:32e701f2fbb7dab7660751',
  measurementId: 'G-7PPW1F0743',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
