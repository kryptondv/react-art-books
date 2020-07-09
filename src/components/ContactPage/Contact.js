import React, { useState } from 'react';
import Title from '../Title';
import encode from '../../functions/encodeURI';

const Contact = () => {
  const initialFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const initialErrorState = {
    nameErr: '',
    emailErr: '',
    subjectErr: '',
    messageErr: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(initialErrorState);

  const { name, email, subject, message } = formData;
  const { nameErr, emailErr, subjectErr, messageErr } = error;

  // validate inputs
  const validate = () => {
    let isValid = true;

    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        setError(prevState => ({
          ...prevState,
          [`${key}Err`]: 'Pole jest wymagane',
        }));
        isValid = false;
      } else if (key === 'email' && !email.includes('@')) {
        setError(prevState => ({
          ...prevState,
          emailErr: 'Proszę podać poprawny email',
        }));
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = e => {
    const isValid = validate();
    if (isValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error));

      setFormData(initialFormState);
    }
    e.preventDefault();
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [`${e.target.name}Err`]: '' });
  };

  const requiredField = message => (
    <span className="contact-form__error-msg">{message}</span>
  );

  return (
    <section className="contact">
      <Title title="napisz do nas" />
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        noValidate
      >
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="name">
            imię
          </label>
          <input
            className={`contact-form__form-control ${
              nameErr && 'contact-form__form-control--error'
            }`}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
          />
          {nameErr && requiredField(nameErr)}
        </div>
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="email">
            email
          </label>
          <input
            className={`contact-form__form-control ${
              emailErr && 'contact-form__form-control--error'
            }`}
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
          />
          {emailErr && requiredField(emailErr)}
        </div>
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="subject">
            temat
          </label>
          <input
            className={`contact-form__form-control ${
              subjectErr && 'contact-form__form-control--error'
            }`}
            value={subject}
            onChange={handleChange}
            type="text"
            name="subject"
            id="subject"
            autoComplete="off"
          />
          {subjectErr && requiredField(subjectErr)}
        </div>
        <div className="contact-form__form-group">
          <label className="contact-form__label" htmlFor="message">
            wiadomość
          </label>
          <textarea
            className={`contact-form__form-control contact-form__form-control--message ${
              messageErr && 'contact-form__form-control--error'
            }`}
            value={message}
            onChange={handleChange}
            name="message"
            id="message"
          ></textarea>
          {messageErr && requiredField(messageErr)}
        </div>
        <div className="contact-form__form-group">
          <input
            className="contact-form__submit-btn"
            type="submit"
            value="Wyślij"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
