import React, { useState } from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

const ContactApp = () => {
  const [contacts, setContacts] = useState(getData());

  const onDeleteHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} onDelete={onDeleteHandler} />
    </div>
  );
};

export default ContactApp;
