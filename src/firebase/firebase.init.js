// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDwVVxfV-Rc3jmJnc4f9A8b3gkp1K0I3E",
  authDomain: "auth-milon-7aa2d.firebaseapp.com",
  projectId: "auth-milon-7aa2d",
  storageBucket: "auth-milon-7aa2d.firebasestorage.app",
  messagingSenderId: "122432477051",
  appId: "1:122432477051:web:c0dfdb8c93375a6a1acfde",
  measurementId: "G-TJCSBC438V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
