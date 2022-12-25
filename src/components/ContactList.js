import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => {
        return (
          <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
        );
      })}
    </div>
  );
}
export default ContactList;
