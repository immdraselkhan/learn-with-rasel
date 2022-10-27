// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfQ9cnfW4zpXRBuv_4pwl9uuU7xo0mjPo", // process.env.REACT_APP_apiKey,
  authDomain: "learn-with-rasel.firebaseapp.com", // process.env.REACT_APP_authDomain,
  projectId: "learn-with-rasel", // process.env.REACT_APP_projectId,
  storageBucket: "learn-with-rasel.appspot.com", // process.env.REACT_APP_storageBucket,
  messagingSenderId: "609611594784", // process.env.REACT_APP_messagingSenderId,
  appId: "1:609611594784:web:25065afba7a6c75cca1045", // process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app
export default app;