import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../Redux/Actions/actions";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function ContactForm({ addButtonClick, currentContact }) {
  const classes = useStyles();

  const [contact, setContact] = useState(currentContact);

  const changehandler = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const SubmitFunction = event => {
    event.preventDefault();
    alert(contact.name);
  };

  const { name, number, location } = currentContact;

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
              {0 === null ? "Add contact" : "update Contact"}
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
    currentContact: state.currentContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: name => dispatch(deleteContact(name)),
    editContact: editedContact => dispatch(editContact(editedContact))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
