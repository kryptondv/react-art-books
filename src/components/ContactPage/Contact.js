import React, { useState } from 'react';
import Title from '../Title';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
    setFormData(initialState)
  };


  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, subject, message } = formData;

  return (
    <section className="contact">
      <Title title="napisz do nas" />
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        name="contact"
        method="post"
      >
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="name">
            imię
          </label>
          <input
            className="contact-form__form-control"
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="email">
            email
          </label>
          <input
            className="contact-form__form-control"
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="subject">
            temat
          </label>
          <input
            className="contact-form__form-control"
            value={subject}
            onChange={handleChange}
            type="text"
            name="subject"
            id="subject"
            autoComplete="off"
          />
        </div>
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="message">
            wiadomość
          </label>
          <textarea
            className="contact-form__form-control contact-form__form-control--message"
            value={message}
            onChange={handleChange}
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className="contact-form__form-group">
          <input  className="contact-form__submit-btn" type="submit" value="Wyślij"/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
