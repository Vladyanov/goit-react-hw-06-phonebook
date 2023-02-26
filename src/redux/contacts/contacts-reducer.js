import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact } from './contacts-actions';

const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    state.push(payload);
  },
  [removeContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

// const contactsReducer = (state = initialStore, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return;
//     case REMOVE_CONTACT:
//       return;

//     default:
//       return state;
//   }
// };

export default contactsReducer;
