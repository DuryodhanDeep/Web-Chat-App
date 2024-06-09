import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-may-version.firebaseapp.com",
  projectId: "chat-app-may-version",
  storageBucket: "chat-app-may-version.appspot.com",
  messagingSenderId: "384574812740",
  appId: "1:384574812740:web:d5809650304d2bc6224211"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage =getStorage()