import React from "react";
import Table from "../Components/Table";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import ContactForm from "../Components/ContactForm";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../Redux/Actions/actions";
const HomePage = ({ allContacts }) => {
  return (
    <div>
      <SearchBar />
      <ContactForm />
      <Table contacts={allContacts} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allContacts: state.allContacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: name => dispatch(deleteContact(name)),
    editProduct: editedContact => dispatch(editContact(editedContact))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
