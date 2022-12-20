import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyALlI7WQA0AxwPtToua45T-oqLxfadh5uM",
    authDomain: "fir-b2b8f.firebaseapp.com",
    projectId: "fir-b2b8f",
    storageBucket: "fir-b2b8f.appspot.com",
    messagingSenderId: "306021430375",
    appId: "1:306021430375:web:23438e43ea69552ea6d0c2",
    measurementId: "G-CSHSLVNYKF"
  };


  export default  firebase.initializeApp(firebaseConfig)