// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import  {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKP83QTCKx2GYI-VZBAWOKK0Q5kdPNd4o",
  authDomain: "garagepanama-507.firebaseapp.com",
  projectId: "garagepanama-507",
  storageBucket: "garagepanama-507.appspot.com",
  messagingSenderId: "640547988072",
  appId: "1:640547988072:web:ef468dc84091a0259c51dd",
  measurementId: "G-LW8GZH07Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const analytics = getAnalytics(app)