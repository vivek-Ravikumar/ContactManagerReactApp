import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  ADD_BUTTON_CLICK,
  UPDATE_CONTACT,
  SEARCH_CONTACT,
  CLEAR_SEARCH,
  BACKEND_FETCH_REQUEST,
  FETCH_ALL_CONTACTS_FAILURE,
  FETCH_ALL_CONTACTS_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE,
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_SUCCESS
} from "./actionTypes";
export const backendURL = "https://onbb2.sse.codesandbox.io/api/";

export const backendFetchRequest = () => {
  return {
    type: BACKEND_FETCH_REQUEST
  };
};

//function to fetch all contacts form back
export const fetchAllContacts = () => {
  return async dispatch => {
    try {
      // dispatch(backendFetchRequest());
      const response = await fetch(`${backendURL}contacts`);
      const jsonData = await response.json();
      if (jsonData.message === "success") {
        // console.log(jsonData);
        dispatch(fetchAllContactsSuccess(jsonData.data));
      }
    } catch (err) {
      // alert('Bring up the backe')
      console.error(err);
      dispatch(fetchAllContactsFailure(err.message));
    }
  };
};

//function to delete a contact
export const deleteContactRequest = deleteContactId => {
  return async dispatch => {
    try {
      dispatch(backendFetchRequest());
      const config = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      };
      const response = await fetch(
        `${backendURL}contacts/delete/${deleteContactId}`,
        config
      );
      const jsonData = await response.json();
      if (jsonData.message === "success") {
        // console.log(jsonData);
        dispatch(deleteContactSuccess(jsonData.data));
      }
    } catch (err) {
      console.error(err);
      dispatch(deleteContactFailure(err.message));
    }
  };
};

//function to update a contact
export const updateContactRequest = updatedContact => {
  return async dispatch => {
    try {
      dispatch(backendFetchRequest());
      const config = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedContact)
      };
      const response = await fetch(
        `${backendURL}contacts/update/${updatedContact._id}`,
        config
      );
      const jsonData = await response.json();
      if (jsonData.message === "success") {
        // console.log(jsonData);
        dispatch(updateContactSuccess(jsonData.data));
      }
    } catch (err) {
      console.error(err);
      dispatch(updateContactFailure(err.message));
    }
  };
};

//function to add a new contact
export const addContactRequest = newContact => {
  return async dispatch => {
    try {
      dispatch(backendFetchRequest());
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
      };
      const response = await fetch(`${backendURL}contacts/add`, config);
      const jsonData = await response.json();
      if (jsonData.message === "success") {
        // console.log(jsonData);
        dispatch(addContactSuccess(jsonData.data));
      }
    } catch (err) {
      console.error(err);
      dispatch(addContactFailure(err.message));
    }
  };
};

//dispatch functions for addingContacts
export const addContactSuccess = contacts => {
  return {
    type: ADD_CONTACT_SUCCESS,
    payload: contacts
  };
};
export const addContactFailure = errorMessage => {
  return {
    type: ADD_CONTACT_FAILURE,
    payload: errorMessage
  };
};

//dispatch functions for fetchingContacts
export const fetchAllContactsSuccess = contacts => {
  return {
    type: FETCH_ALL_CONTACTS_SUCCESS,
    payload: contacts
  };
};
export const fetchAllContactsFailure = errorMessage => {
  return {
    type: FETCH_ALL_CONTACTS_FAILURE,
    payload: errorMessage
  };
};

//dispatch functions for deletingContacts
export const deleteContactSuccess = contacts => {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: contacts
  };
};
export const deleteContactFailure = errorMessage => {
  return {
    type: DELETE_CONTACT_FAILURE,
    payload: errorMessage
  };
};

//dispatch functions for updatingContacts
export const updateContactSuccess = contacts => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload: contacts
  };
};
export const updateContactFailure = errorMessage => {
  return {
    type: UPDATE_CONTACT_FAILURE,
    payload: errorMessage
  };
};

export const addButtonClickFunction = () => {
  return {
    type: ADD_BUTTON_CLICK
  };
};

export const addContact = addedContact => {
  return {
    type: ADD_CONTACT,
    payload: addedContact
  };
};

export const editContact = editedContact => {
  return {
    type: EDIT_CONTACT,
    payload: editedContact
  };
};

export const deleteContact = deletedContact_id => {
  return {
    type: DELETE_CONTACT,
    payload: deletedContact_id
  };
};

export const updateContact = updatedContact => {
  return {
    type: UPDATE_CONTACT,
    payload: updatedContact
  };
};

export const searchContact = searchText => {
  return {
    type: SEARCH_CONTACT,
    payload: searchText
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  };
};
