import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDrxKAhaktotkaMLm372FsSOQ0FmNclM4k",
    authDomain: "react-netflix-clone-368eb.firebaseapp.com",
    projectId: "react-netflix-clone-368eb",
    storageBucket: "react-netflix-clone-368eb.appspot.com",
    messagingSenderId: "419930062542",
    appId: "1:419930062542:web:d2d6efd1dec422d6425a9f",
    measurementId: "G-988G7ZVPKH"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();




  export {auth,provider}
  export default db;
