import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "redux/contactSlice";

import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();
    const contactList = useSelector(state => state.contacts);
    console.log(contactList);
    console.log(addContact());

    const deletingContact = id => {
        dispatch(deleteContact(id));
        // setContacts(contacts.filter(contact => contact.id !== id));
    }

        return (
            <ul className={css.contacts__list}>
                {contacts.map(contact =>
                    <ContactListItem
                        data={contact}
                        onDeleteContact={deletingContact}
                        key={contact.id}
                    />
                )}
            </ul>
        );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
};
