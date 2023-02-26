import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

const initialStore = [];

const contactsReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case REMOVE_CONTACT:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default contactsReducer;
