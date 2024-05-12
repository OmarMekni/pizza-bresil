// TODO: 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5gRb-t1d1f9RcgNXQPy-NjTXMVzMpDlY",
  authDomain: "pizza-bresil.firebaseapp.com",
  projectId: "pizza-bresil",
  storageBucket: "pizza-bresil.appspot.com",
  messagingSenderId: "919749478659",
  appId: "1:919749478659:web:90e57f237425ba738d0136"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);