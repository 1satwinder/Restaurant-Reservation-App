import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAhLMpW0f3Ceh6HBnbk8b3uamA8LssWupM",
    authDomain: "restaurant-reservations-3aa56.firebaseapp.com",
    projectId: "restaurant-reservations-3aa56",
    storageBucket: "restaurant-reservations-3aa56.appspot.com",
    messagingSenderId: "379222908532",
    appId: "1:379222908532:web:8d238c8da04791cd00fb21",
    measurementId: "G-ZE785ZQMWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.functions().useEmulator("localhost", 5001);

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();