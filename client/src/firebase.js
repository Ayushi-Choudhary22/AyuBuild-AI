// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ayubuild-ai.firebaseapp.com",
  projectId: "ayubuild-ai",
  storageBucket: "ayubuild-ai.firebasestorage.app",
  messagingSenderId: "604382976650",
  appId: "1:604382976650:web:97728b4a4c446c9e2ceb73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//upper tak karaya
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
