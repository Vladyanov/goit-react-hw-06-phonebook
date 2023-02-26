import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

const initialStore = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, payload];
      return { ...state, contacts: newContacts };
    case REMOVE_CONTACT:
      const res = state.contacts.filter(item => item.id !== payload);
      console.log(payload);
      return { ...state, contacts: res };
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default reducer;
