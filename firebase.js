// firebase.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTirXHgdQee9DiTa5GG4Rx7OuJ3DFZHFM",
  authDomain: "crodlin-halls.firebaseapp.com",
  projectId: "crodlin-halls",
  storageBucket: "crodlin-halls.appspot.com", // ✅ fixed this line
  messagingSenderId: "392734865933",
  appId: "1:392734865933:web:598c7fe39d058826a0b344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
