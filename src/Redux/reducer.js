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
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_SUCCESS,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE,
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_SUCCESS
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
  loading: false,
  errors: "",
  allContacts: [
    {
      _id: "456446",
      name: "SampleData",
      createdDate: date,
      number: "999787979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    },
    {
      _id: "4564",
      name: "Rohit",
      createdDate: date,
      number: "911111979",
      location: "chennai",
      incomingCallCount: 5,
      outgoingCallCount: 6
    }
  ],
  initialContacts: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BACKEND_FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allContacts: action.payload
      };
    case FETCH_ALL_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: ""
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: "",
        editingContact: false,
        currentContact: { name: "", number: "", location: "" }
      };
    case UPDATE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: "",

        currentContact: { name: "", number: "", location: "" }
      };

    case ADD_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case ADD_BUTTON_CLICK:
      return {
        ...state,
        editingContact: false,
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
      console.log(updatedCurrentContact);
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
