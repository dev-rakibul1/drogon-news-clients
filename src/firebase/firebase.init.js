// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJaEryXoKwYJZnLcY8Ttk_UX_V7OOI7ZU",
  authDomain: "dragon-news-be5cc.firebaseapp.com",
  projectId: "dragon-news-be5cc",
  storageBucket: "dragon-news-be5cc.appspot.com",
  messagingSenderId: "761150070915",
  appId: "1:761150070915:web:29be0cb6798b3e54d2fbb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
