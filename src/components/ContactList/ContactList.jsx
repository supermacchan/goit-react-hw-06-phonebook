import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactSlice";
import { getContacts, getFilter } from "redux/selectors";

import css from './ContactList.module.css';

import { ContactListItem } from "./ContactListItem";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const getFilteredContacts = () => {
        // const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
    };

    const filteredContacts = getFilteredContacts();

    console.log(contacts);
    console.log(filter);

    const deletingContact = id => {
        dispatch(deleteContact(id));
    }

    return (
        <ul className={css.contacts__list}>
            {filteredContacts.map(contact =>
                <ContactListItem
                    data={contact}
                    onDeleteContact={deletingContact}
                    key={contact.id}
                />
            )}
        </ul>
    );
}
