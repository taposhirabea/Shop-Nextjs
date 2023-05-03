// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMc3gtPGR0OkjoPfrArFLkdbUmEoJAqrc",
  authDomain: "redux-b78d9.firebaseapp.com",
  databaseURL: "https://redux-b78d9-default-rtdb.firebaseio.com",
  projectId: "redux-b78d9",
  storageBucket: "redux-b78d9.appspot.com",
  messagingSenderId: "1070563516624",
  appId: "1:1070563516624:web:df2e77b3ce0f13949cbed5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
// export const initFirebase = () => {
//     return app;
// }
export const auth = getAuth(app);