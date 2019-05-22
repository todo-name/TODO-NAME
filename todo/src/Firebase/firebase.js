import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCSsZRLt_kMLB2QVJ8pzef9MD7zxdDedLU",
  authDomain: "todo-name.firebaseapp.com",
  databaseURL: "https://todo-name.firebaseio.com",
  projectId: "todo-name",
  storageBucket: "todo-name.appspot.com",
  messagingSenderId: "1083058940932",
  appId: "1:1083058940932:web:0ed87a90cfa018ee"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;