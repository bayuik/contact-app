import React, { useState } from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

const ContactApp = () => {
  const [contacts, setContacts] = useState(getData());

  const onDeleteHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const onAddContactHandler = (contact) => {
    setContacts([
      ...contacts,
      {
        id: +new Date(),
        imageUrl: "https://picsum.photos/200",
        ...contact,
      },
    ]);
  };

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactInput addContact={onAddContactHandler} />
      <ContactList contacts={contacts} onDelete={onDeleteHandler} />
    </div>
  );
};

export default ContactApp;
