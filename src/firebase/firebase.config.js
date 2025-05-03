
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFcuvoyASK8mD1PIJh3wPxaA-EfVBXZkA",
  authDomain: "dragon-news-f8f1f.firebaseapp.com",
  projectId: "dragon-news-f8f1f",
  storageBucket: "dragon-news-f8f1f.firebasestorage.app",
  messagingSenderId: "948619410898",
  appId: "1:948619410898:web:faf6a3bd048392fd819c0b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
