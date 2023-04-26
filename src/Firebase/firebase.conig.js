// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyDkMxuNlXrhdEQvXJTBC1qU_wPynjnMQ",
  authDomain: "auth-firebase-conext-telwind.firebaseapp.com",
  projectId: "auth-firebase-conext-telwind",
  storageBucket: "auth-firebase-conext-telwind.appspot.com",
  messagingSenderId: "342105522849",
  appId: "1:342105522849:web:d50c6b5bd76c996752a6e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;