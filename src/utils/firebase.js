// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBotFtXuZqg0l4265kFlyXSyjACGEnbUug",
  authDomain: "netflixgpt-cc1da.firebaseapp.com",
  projectId: "netflixgpt-cc1da",
  storageBucket: "netflixgpt-cc1da.appspot.com",
  messagingSenderId: "816837095346",
  appId: "1:816837095346:web:d0fcd0e23cf05034a9beab",
  measurementId: "G-H87R3VKWB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)