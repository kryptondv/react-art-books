import React, { useState } from 'react';
import Title from '../Title';
import MessageSentModal from './MessageSentModal';
import encode from '../../functions/encodeURI';

const Contact = () => {
  // initial state data
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

  // useState & destructuring
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(initialErrorState);
  const [messageIsSent, setMessageIsSent] = useState('')

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

  // event handlers
  const handleSubmit = e => {
    const isValid = validate();
    if (isValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() => setMessageIsSent('success'))
        .catch(error => setMessageIsSent('failure'));

      setFormData(initialFormState);
    }
    e.preventDefault();
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [`${e.target.name}Err`]: '' });
  };

  // JSX for required field message
  const requiredFieldMessage = message => (
    <span className="contact-form__error-msg">{message}</span>
  );

  return (
    <section className="contact">
      {/* modal */}
      {messageIsSent && (
        <MessageSentModal
          message={messageIsSent}
          setMessageIsSent={setMessageIsSent}
        />
      )}

      <Title title="napisz do nas" />

      {/* form */}
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        noValidate
      >
        {/* name */}
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
          {nameErr && requiredFieldMessage(nameErr)}
        </div>
        {/* email */}
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
          {emailErr && requiredFieldMessage(emailErr)}
        </div>
        {/* subject */}
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
          {subjectErr && requiredFieldMessage(subjectErr)}
        </div>
        {/* message */}
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
          {messageErr && requiredFieldMessage(messageErr)}
        </div>
        {/* submit */}
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
