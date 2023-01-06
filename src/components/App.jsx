import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { nanoid } from "nanoid";
import { ToastContainer } from 'react-toastify';

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { addContact, deleteContact } from "redux/contactSlice";

import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';


export const App = () => {
  const dispatch = useDispatch();
  // onSumbit={dispatch(addContact())};
  const contactList = useSelector(state => state.contacts);
  console.log(contactList);
  console.log(addContact());


  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const formSubmitHandler = ({ name, number }) => {
  //   // const availabilityCheck = checkContact(name);

  //   // if (availabilityCheck !== undefined) {
  //   //   toast.error(`${name} is already in contacts.`);
  //   //   return;
  //   // };

  //   const newContact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };

  //   setContacts(prevState => {
  //     return [newContact, ...prevState];
  //   });
  // };

  // const checkContact = (name) => {
  //   return contacts.find(contact => {
  //     return contact.name === name;
  //   });  
  // };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  // const deletingContact = id => {
  //   dispatch(deleteContact(id));
  //   // setContacts(contacts.filter(contact => contact.id !== id));
  // }

    return (
      <>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        <ContactList
          contacts={getFilteredContacts()}
        />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
        />
      </>
    );
};