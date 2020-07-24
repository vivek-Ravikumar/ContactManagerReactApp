import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../Redux/Actions/actions";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function SimpleTable({ contacts, editContact, deleteContact }) {
  const classes = useStyles();

  const editingContact = e => {
    const _id = e.target.id;
    editContact(_id);
  };

  const deletingContact = e => {
    const _id = e.target.id;
    //alert(_id);
    deleteContact(_id);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">CreatedDate</TableCell>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">Incoming Call Count</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Outgoing Call Count</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.createdDate}</TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.incomingCallCount}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.outgoingCallCount}</TableCell>
              <TableCell align="center">
                <i
                  id={row._id}
                  onClick={deletingContact}
                  className="fas fa-trash"
                />{" "}
                &nbsp;
                <i
                  id={row._id}
                  onClick={editingContact}
                  className="fas fa-edit"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = state => {
  return {
    addButtonClick: state.addButtonClick,
    currentContact: state.currentContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: deletedContact_id =>
      dispatch(deleteContact(deletedContact_id)),
    editContact: editedContactName_id =>
      dispatch(editContact(editedContactName_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTable);
