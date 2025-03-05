import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFL2fXXTqfufeI9KF_mwtv7wa5Can21Ww",
  authDomain: "j012-698ab.firebaseapp.com",
  projectId: "j012-698ab",
  storageBucket: "j012-698ab.firebasestorage.app",
  messagingSenderId: "665983905496",
  appId: "1:665983905496:web:efa5548880c757686471ad",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
