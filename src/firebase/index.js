import firebase from 'firebase'
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBfIY1hTfIgCTBa1fqU7m674tFmw5-epIo",
    authDomain: "canoeclub-1a082.firebaseapp.com",
    databaseURL: "https://canoeclub-1a082.firebaseio.com",
    projectId: "canoeclub-1a082",
    storageBucket: "canoeclub-1a082.appspot.com",
    messagingSenderId: "372254742941"
  };

firebase.initializeApp(config);

export default firebase