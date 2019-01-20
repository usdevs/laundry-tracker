import React, { Component } from 'react';
import firebase from "firebase";
import './App.css';

var config = {
  apiKey: "AIzaSyAb6W6yLDpM_E7qPgh3lOmw6iqERysHUDg",
  authDomain: "usc-website-206715.firebaseapp.com",
  databaseURL: "https://usc-website-206715.firebaseio.com",
  projectId: "usc-website-206715",
  storageBucket: "usc-website-206715.appspot.com",
  messagingSenderId: "115895791273"
};
firebase.initializeApp(config);

let database = firebase.firestore();

firebase
  .auth()
  .signInAnonymously()
  .then(user => {
    let statusRefs = database.collection("laundryData");
    return statusRefs.get();
  })
  .then(collection => {
    collection.docs.forEach(doc => {
      console.log(doc.id);
      console.log(doc.data());
    });
  });

const data = {
  17: {
    washers: {
      1: "Available",
      2: "In Use",
      3: "In Use",
      4: "Available",
      5: "Available"
    },
    dryers: {
      1: "Available",
      2: "In Use",
      3: "In Use",
      4: "Available"
    }
  },
  9: {
    washers: {
      1: "Available",
      2: "In Use",
      3: "Available",
      4: "Available",
      5: "In Use"
    },
    dryers: {
      1: "Available",
      2: "Available",
      3: "In Use",
      4: "Available"
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Cinnamon College Laundry Tracker
          </h1>
          <h2>
            Floor 17
          </h2>
          {
            //Insert Floor (Table) here
          }
        </header>
      </div>
    );
  }
}

class Floor extends Component {
  //Table
}

class Machine extends Component {
  //Square cell of table
}

export default App;