import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARafBrNFyregjeqXakngj9tGBoLLIlOCY",
  authDomain: "travel-guru-project-d5590.firebaseapp.com",
  projectId: "travel-guru-project-d5590",
  storageBucket: "travel-guru-project-d5590.appspot.com",
  messagingSenderId: "369387826181",
  appId: "1:369387826181:web:002200b58a1562f59d806c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
