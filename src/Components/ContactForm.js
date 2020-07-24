import React, { useState, Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  deleteContact,
  editContact,
  updateContact,
  addContact,
  updateContactRequest,
  addContactRequest
} from "../Redux/Actions/actions";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function ContactForm({
  addButtonClick,
  currentContact,
  updateContact,
  addContact,
  editingContact,
  updateContactRequest,
  addContactRequest
}) {
  const classes = useStyles();
  useEffect(() => {
    setContact(currentContact);
  }, [currentContact]);

  const [contact, setContact] = useState(currentContact);
  const { name = "", number = "", location = "" } = contact;
  const changehandler = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const SubmitFunction = event => {
    event.preventDefault();
    if (editingContact) {
      // updateContact(contact);
      updateContactRequest(contact);
    } else {
      //addContact(contact);
      addContactRequest(contact);
    }
  };

  return (
    <div>
      {addButtonClick && (
        <Fragment>
          <br />
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              value={name}
              name="name"
              label="Name"
              variant="outlined"
              onChange={changehandler}
            />
            <TextField
              id="outlined-basic"
              name="number"
              value={number}
              label="Number"
              variant="outlined"
              onChange={changehandler}
            />
            <TextField
              id="outlined-basic"
              name="location"
              value={location}
              label="Location"
              variant="outlined"
              onChange={changehandler}
            />

            <Button
              onClick={SubmitFunction}
              variant="contained"
              color="primary"
            >
              {editingContact === false ? "Add contact" : "update Contact"}
            </Button>
          </form>
          <br />{" "}
        </Fragment>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    addButtonClick: state.addButtonClick,
    currentContact: state.currentContact,
    editingContact: state.editingContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: name => dispatch(deleteContact(name)),
    editContact: editedContact => dispatch(editContact(editedContact)),
    updateContact: updatedContact => dispatch(updateContact(updatedContact)),
    updateContactRequest: updatedContact =>
      dispatch(updateContactRequest(updatedContact)),
    addContact: addedContact => dispatch(addContact(addedContact)),
    addContactRequest: addedContact => dispatch(addContactRequest(addedContact))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
