import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  ADD_BUTTON_CLICK
} from "./actionTypes";

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

export const editContact = editedContactName => {
  return {
    type: EDIT_CONTACT,
    payload: editedContactName
  };
};

export const deleteContact = deletedContactName => {
  return {
    type: DELETE_CONTACT,
    payload: deletedContactName
  };
};
