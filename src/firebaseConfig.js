import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC087wXGT8vkOZT5KZStLWQGwwaKy6EcdYA",
  authDomain: "mode-femme.firebaseapp.com",
  projectId: "mode-femme",
  storageBucket: "mode-femme.appspot.com",
  messagingSenderId: "805862957052",
  appId: "1:805862957052:web:96e73c6f0bf34f980c5c79"
};

const app = initializeApp(firebaseConfig);
export const conn = getFirestore(app)