import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  ADD_BUTTON_CLICK,
  UPDATE_CONTACT,
  SEARCH_CONTACT,
  CLEAR_SEARCH
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


export const searchContact=searchText=>{
  return {
    type: SEARCH_CONTACT,
    payload: searchText
  };
}

export const clearSearch=()=>{
  return {
    type: CLEAR_SEARCH,
  };
}
