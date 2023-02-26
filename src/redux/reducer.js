import { ADD_CONTACT, REMOVE_CONTACT } from './types';

const initialStore = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };
    case REMOVE_CONTACT:
      const res = state.contacts.filter(item => item.id !== action.payload);
      console.log(action.payload);
      return { ...state, contacts: res };
    default:
      return state;
  }
};

export default reducer;
