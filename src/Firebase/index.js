import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxU_CUcVs-SFtVJ3wYryejyMjpy5IyeeI",
    authDomain: "ecommerce-react-briankonz.firebaseapp.com",
    projectId: "ecommerce-react-briankonz",
    storageBucket: "ecommerce-react-briankonz.appspot.com",
    messagingSenderId: "510871642659",
    appId: "1:510871642659:web:489b5c8ca4246dc4b34796"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app
  
  export const getFirestore = () =>  {
      return firebase.firestore(app)
  }