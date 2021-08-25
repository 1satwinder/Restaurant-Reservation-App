const firebase = require("firebase");
require('firebase/firestore');

const { 
    reservations,
    reviews,
    dateAvailabilities,
    restaurants,
  } = require('./testData.js')

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

  const db = firebase.firestore();

  function populateCollection(collectionName, items){
      return Promise.all(items.map(item => {
          const {id, ...data} = item;
          return db.collection(collectionName)
          .doc(id)
          .set(data);
      }))
  }
  Promise.all( [
      populateCollection('reservations', reservations),
      populateCollection('reviews', reviews),
      populateCollection('restaurants', restaurants),
      populateCollection('dateAvailabilities', dateAvailabilities),
  ]).then( () => {
      console.log("Uploading Done!");
      process.exit(0);
  }).catch( err => {
      console.log(err);
  });