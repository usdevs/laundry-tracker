import React, { Component } from 'react';
import firebase from "firebase";
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

var config = {
  apiKey: "AIzaSyAb6W6yLDpM_E7qPgh3lOmw6iqERysHUDg",
  authDomain: "usc-website-206715.firebaseapp.com",
  databaseURL: "https://usc-website-206715.firebaseio.com",
  projectId: "usc-website-206715",
  storageBucket: "usc-website-206715.appspot.com",
  messagingSenderId: "115895791273"
};
firebase.initializeApp(config);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

let id = 0;
function createData(floor, machine, A, B, C, D, E) {
  id += 1;
  return { id, floor, machine, A, B, C, D, E };
}

const rows = [
  createData('17 Floor', 'Washing Machine', 'Available', 'In Use', 'Available', 'Available', 'Available'),
  createData('17 Floor', 'Dryer', 'Available', 'Available', 'In Use', 'Available', 'In Use'),
  createData('9 Floor', 'Washing Machine', 'Available', 'In Use', 'Available', 'In Use', 'Not Applicable'),
  createData('9 Floor', 'Dryer', 'In Use', 'Available', 'In Use', 'Available', 'Not Applicable'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Floor</CustomTableCell>
            <CustomTableCell>Machine</CustomTableCell>
            <CustomTableCell>A</CustomTableCell>
            <CustomTableCell>B</CustomTableCell>
            <CustomTableCell>C</CustomTableCell>
            <CustomTableCell>D</CustomTableCell>
            <CustomTableCell>E</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.floor}
              </CustomTableCell>
              <CustomTableCell>{row.machine}</CustomTableCell>
              <CustomTableCell>{row.A}</CustomTableCell>
              <CustomTableCell>{row.B}</CustomTableCell>
              <CustomTableCell>{row.C}</CustomTableCell>
              <CustomTableCell>{row.D}</CustomTableCell>
              <CustomTableCell>{row.E}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
/*
function Machine(props) {
  //handle firebase i/o
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Cinnamon College Laundry Tracker
          </h1>
        </header>
      </div>
    );
  }
}

class Floor extends Component {
  //Table
  constructor(props){
    super(props);
    this.state = {size: 3}
  }
  render(){
    let rows = [];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
               <tbody>
                 {rows}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    )
  }
}

class Square extends Component {
  //Square cell of table
  constructor(props) {

  }
}
*/
export default withStyles(styles)(SimpleTable);
//export default App;