import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  ADD_BUTTON_CLICK,
  UPDATE_CONTACT,
  SEARCH_CONTACT,
  CLEAR_SEARCH
} from "./Actions/actionTypes";
const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const initialState = {
  addButtonClick: false,
  searchText: "",
  currentContact: { name: "", number: "", location: "" },
  editingContact: false,
  searching: false,
  filteredContacts: [],
  allContacts: [
    {
      _id: "456446",
      name: "Dany",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      _id: "4564",
      name: "Rohit",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      _id: "45646",
      name: "Ram",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      _id: "456746",
      name: "Satheesh",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      _id: "456449",
      name: "Salman",
      createdDate: date,
      number: "789787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    }
  ],
  initialContacts: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUTTON_CLICK:
      return {
        ...state,
        currentContact: { name: "", number: "", location: "" },
        addButtonClick: !state.addButtonClick
      };

    case ADD_CONTACT:
      const newContact = {
        _id: String(Math.random() * 100000),
        createdDate: date,
        outgoingCallCount: 0,
        incomingCallCount: 0,
        ...action.payload
      };
      const newAllContacts = [...state.allContacts, newContact];
      //console.log(newAllContacts);
      return {
        ...state,
        allContacts: newAllContacts,
        editingContact: false,
        currentContact: { name: "", number: "", location: "" }
      };
    case EDIT_CONTACT:
      const updatedCurrentContact = state.allContacts.filter(
        ct => ct._id === action.payload
      );
      return {
        ...state,
        addButtonClick: true,
        editingContact: true,
        currentContact: updatedCurrentContact[0]
      };
    case DELETE_CONTACT:
      const updatedAllContacts = state.allContacts.filter(
        ct => ct._id !== action.payload
      );
      return {
        ...state,
        allContacts: updatedAllContacts
      };
    case UPDATE_CONTACT:
      const updatedContacts = state.allContacts.map(ct => {
        if (ct._id === action.payload._id) {
          return {
            ...ct,
            ...action.payload
          };
        } else {
          return {
            ...ct
          };
        }
      });
      //  console.log(updatedContacts);
      return {
        ...state,
        addButtonClick: true,
        currentContact: { name: "", number: "", location: "" },
        allContacts: updatedContacts
      };

    case SEARCH_CONTACT:
      // alert(action.payload);
      if (action.payload) {
        // const filteredContacts = state.allContacts.filter(
        //   ct => ct.name.toLowerCase() === action.payload.toLowerCase()
        // );

        const filteredContacts = state.allContacts.filter(
          ct => ct.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
        );

        return {
          ...state,
          filteredContacts: filteredContacts,
          searching: true
        };
      } else return { ...state };

    case CLEAR_SEARCH:
      // console.log(state.allContacts);
      return {
        ...state,
        filteredContacts: state.allContacts,
        searching: false
      };
    default:
      return state;
  }
};

export default Reducer;
