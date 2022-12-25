import React, { useState } from "react";

const ContactInput = ({ addContact }) => {
  const [data, setData] = useState({
    name: "",
    tag: "",
  });

  const onDataChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    addContact(data);
  };

  return (
    <form className="contact-input" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Nama"
        name="name"
        value={data.name}
        onChange={onDataChangeHandler}
      />
      <input
        type="text"
        placeholder="Tag"
        name="tag"
        value={data.tag}
        onChange={onDataChangeHandler}
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default ContactInput;
