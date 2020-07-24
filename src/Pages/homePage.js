import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import SearchBar from "../Components/SearchBar";
import ContactForm from "../Components/ContactForm";
import Spinner from "../Components/spinner";
import { connect } from "react-redux";
import { fetchAllContacts } from "../Redux/Actions/actions";
const HomePage = ({
  allContacts,
  filteredContacts,
  searching,
  fetchAllContacts,
  loading
}) => {
  const [contacts, setContacts] = useState(allContacts);

  useEffect(() => {
    fetchAllContacts();
    // console.log("useEffect");
    if (searching) {
      setContacts(filteredContacts);
    } else setContacts(allContacts);
  }, [searching, allContacts, fetchAllContacts, filteredContacts]);

  return (
    <div>
      <SearchBar />
      <Spinner loading={loading} />
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
    searching: state.searching,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllContacts: () => dispatch(fetchAllContacts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
