
import { initializeApp } from "firebase/app";
import{ getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNYtha7uweb4STnGGyEWW9x1VeVYYEOak",
  authDomain: "firbase-auth-b1615.firebaseapp.com",
  projectId: "firbase-auth-b1615",
  storageBucket: "firbase-auth-b1615.appspot.com",
  messagingSenderId: "522749377151",
  appId: "1:522749377151:web:9063ae332d378cec0b1d4a",
  measurementId: "G-NTX7NH5FVR"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth()
export { app,auth };