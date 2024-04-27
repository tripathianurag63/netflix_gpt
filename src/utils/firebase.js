import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Fhf2PlI-tkBDznbNeh0kKfx05U0t2cM",
  authDomain: "netflix-gpt-a6228.firebaseapp.com",
  projectId: "netflix-gpt-a6228",
  storageBucket: "netflix-gpt-a6228.appspot.com",
  messagingSenderId: "574467354860",
  appId: "1:574467354860:web:c23af84633b88743c675c9",
  measurementId: "G-484SPRPGJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();