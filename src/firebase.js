// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB13KacMHdMo35w2B8wFzuJKDD4jNwTCjY",

  authDomain: "gym-buddies-b1561.firebaseapp.com",

  projectId: "gym-buddies-b1561",

  storageBucket: "gym-buddies-b1561.appspot.com",

  messagingSenderId: "530438074937",

  appId: "1:530438074937:web:98c6fd78a1529c515b53e8"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);