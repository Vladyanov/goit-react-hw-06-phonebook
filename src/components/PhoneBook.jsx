// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactsList from './PhoneBook/ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import ContactsForm from './ContactsForm/ContactsForm';

// import items from './items';

import { addContact, removeContact, setFilter } from 'redux/actions';

import { getFilter, getFilteredContacts } from 'redux/selectors';

import css from './phone-book.module.scss';

const PhoneBook = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   return contacts ? contacts : [...items];
  // });

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dispatch = useDispatch();

  const isDuplicate = name => {
    const normalizedName = name.toLowerCase();

    const isUnique = filteredContacts.find(({ name }) => {
      return name.toLocaleLowerCase() === normalizedName;
    });
    return isUnique;
  };

  const onAddContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      return Notify.failure(`${name} is already in contacts list`);
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  // const getFilteredContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }
  //   const normalizedFilter = filter.toLowerCase();
  //   const res = contacts.filter(({ name }) => {
  //     return name.toLowerCase().includes(normalizedFilter);
  //   });
  //   return res;
  // };

  return (
    <>
      <div className={css.block}>
        <h3 className={css.title}>Phone Book</h3>
        <ContactsForm onSubmit={onAddContact} />
      </div>
      <div className={css.block}>
        <ContactsFilter value={filter} handleChange={handleFilter} />
        <ContactsList
          contacts={filteredContacts}
          removeContact={handleRemoveContact}
        />
      </div>
    </>
  );
};

export default PhoneBook;
