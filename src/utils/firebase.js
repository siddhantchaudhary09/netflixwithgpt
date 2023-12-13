// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB97bSYfzeVYhSSBSJCpxMMJ77xWAgdVlk",
  authDomain: "netflixwithgpt.firebaseapp.com",
  projectId: "netflixwithgpt",
  storageBucket: "netflixwithgpt.appspot.com",
  messagingSenderId: "730303962492",
  appId: "1:730303962492:web:36e96485de6fa2e4a858f9",
  measurementId: "G-FC87RPVBWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
