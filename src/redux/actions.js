import { ADD_CONTACT, REMOVE_CONTACT } from './types';
import { nanoid } from 'nanoid';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const removeContact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};
