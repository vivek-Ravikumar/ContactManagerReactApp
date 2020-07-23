import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  ADD_BUTTON_CLICK
} from "./Actions/actionTypes";
const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const initialState = {
  addButtonClick: false,
  currentContact: { name: "", number: "", location: "" },
  allContacts: [
    {
      name: "Dany",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      name: "Rohit",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      name: "Ram",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      name: "Satheesh",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      name: "Salman",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    }
  ]
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUTTON_CLICK:
      return {
        ...state,
        addButtonClick: !state.addButtonClick
      };

    case ADD_CONTACT:
      return {
        ...state,
        addContact: true
      };
    case DELETE_CONTACT:
      return {
        ...state,
        allContacts: state.allContacts.filter(ct => ct.name !== action.payload)
      };
    case EDIT_CONTACT:
      const editedContact = state.allContacts.filter(
        ct => ct.name === action.payload
      );
      console.log(editedContact);
      return {
        ...state,
        addButtonClick: true,
        currentContact: editedContact[0]
      };

    default:
      return state;
  }
};

export default Reducer;
