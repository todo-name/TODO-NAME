import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCSsZRLt_kMLB2QVJ8pzef9MD7zxdDedLU",
    authDomain: "todo-name.firebaseapp.com",
    databaseURL: "https://todo-name.firebaseio.com",
    projectId: "todo-name",
    storageBucket: "todo-name.appspot.com",
    messagingSenderId: "1083058940932",
    appId: "1:1083058940932:web:b95cdc2534854d07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
