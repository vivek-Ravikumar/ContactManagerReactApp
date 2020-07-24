import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import SearchBar from "../Components/SearchBar";
import ContactForm from "../Components/ContactForm";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../Redux/Actions/actions";
const HomePage = ({ allContacts, filteredContacts, searching }) => {
  const [contacts, setContacts] = useState(allContacts);

  useEffect(() => {
    if (searching) {
      setContacts(filteredContacts);
    } else setContacts(allContacts);
  }, [searching, filteredContacts, allContacts]);

  return (
    <div>
      <SearchBar />
      <br />
      <ContactForm />
      <Table contacts={contacts} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allContacts: state.allContacts,
    filteredContacts: state.filteredContacts,
    searching: state.searching
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
