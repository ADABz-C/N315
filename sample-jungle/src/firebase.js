
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8CZXtApTTiqZ2Fv5XRbgD9m0tE3ACmKg",
  authDomain: "n315-bd101.firebaseapp.com",
  projectId: "n315-bd101",
  storageBucket: "n315-bd101.firebasestorage.app",
  messagingSenderId: "658182927800",
  appId: "1:658182927800:web:74272eafb683f34d90cb4d",
  measurementId: "G-PXTWY55XL4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);