import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Floor from "./Floor";

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cinnamon College Laundry Tracker</h1>
        </header>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

let id = 0;
function createData(floor, machine, A, B, C, D, E) {
  id += 1;
  return { id, floor, machine, A, B, C, D, E };
}

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

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <div align="center">
        <h1>Cinnamon College Laundry Tracker</h1>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="center">Floor</CustomTableCell>
            <CustomTableCell align="center">Machine</CustomTableCell>
            <CustomTableCell align="center">A</CustomTableCell>
            <CustomTableCell align="center">B</CustomTableCell>
            <CustomTableCell align="center">C</CustomTableCell>
            <CustomTableCell align="center">D</CustomTableCell>
            <CustomTableCell align="center">E</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <CustomTableCell align="center">{row.floor}</CustomTableCell>
              <CustomTableCell align="center">{row.machine}</CustomTableCell>
              <CustomTableCell align="center">{row.A}</CustomTableCell>
              <CustomTableCell align="center">{row.B}</CustomTableCell>
              <CustomTableCell align="center">{row.C}</CustomTableCell>
              <CustomTableCell align="center">{row.D}</CustomTableCell>
              <CustomTableCell align="center">{row.E}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};
/*
function Machine(props) {
  //handle firebase i/o
}




class Square extends Component {
  //Square cell of table
  constructor(props) {

  }
}
*/
export default withStyles(styles)(SimpleTable);
//export default App;
