import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWNN3-YBalUor8b87lzO9ygbtaOykyfJc",
  authDomain: "we-chat-ee143.firebaseapp.com",
  projectId: "we-chat-ee143",
  storageBucket: "we-chat-ee143.appspot.com",
  messagingSenderId: "29189612892",
  appId: "1:29189612892:web:67284ebe7a018b0d284d99"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()