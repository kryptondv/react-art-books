import React, { useState, useContext } from 'react';
import { ProductContext } from '../../../context/context';
import encode from '../../../functions/encodeURI';

import Title from '../../Title';
import MessageSentModal from '../../MessageSentModal';

const CheckoutForm = () => {
  const { clearCart, cart } = useContext(ProductContext);
  // initial state data
  const initialFormState = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    zipCode: '',
    email: '',
  };

  const initialErrorState = {
    firstNameErr: '',
    lastNameErr: '',
    streetErr: '',
    cityErr: '',
    zipCodeErr: '',
    emailErr: '',
  };

  // useState & destructuring
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(initialErrorState);
  const [messageIsSent, setMessageIsSent] = useState('');

  const {
    firstName,
    lastName,
    street,
    city,
    zipCode,
    email,
  } = formData;
  const {
    firstNameErr,
    lastNameErr,
    streetErr,
    cityErr,
    zipCodeErr,
    emailErr,
  } = error;

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
        body: encode({ 'form-name': 'order', ...formData, order: cart }),
      })
      .then(() => {
        clearCart();
        setMessageIsSent('success')
      })
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
    <span className="form__error-msg">{message}</span>
  );

  return (
    <section className="form-section">
      {/* modal */}
      {messageIsSent && (
        <MessageSentModal
          message={messageIsSent}
          setMessageIsSent={setMessageIsSent}
          subtitle="Twoje zamówienie jest realizowane :)"
        />
      )}

      <Title title="dane" />

      {/* form */}
      <form
        className="form"
        onSubmit={handleSubmit}
        name="order"
        method="post"
        noValidate
      >
        {/* first name */}
        <div className="form__form-group">
          <label className="form__label" htmlFor="firstName">
            imię
          </label>
          <input
            className={`form__form-control ${
              firstNameErr && 'form__form-control--error'
            }`}
            value={firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            id="firstName"
          />
          {firstNameErr && requiredFieldMessage(firstNameErr)}
        </div>

        {/* last name */}
        <div className="form__form-group">
          <label className="form__label" htmlFor="lastName">
            nazwisko
          </label>
          <input
            className={`form__form-control ${
              lastNameErr && 'form__form-control--error'
            }`}
            value={lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            id="lastName"
          />
          {lastNameErr && requiredFieldMessage(lastNameErr)}
        </div>

        {/* street*/}
        <div className="form__form-group">
          <label className="form__label" htmlFor="street">
            ulica i nr domu
          </label>
          <input
            className={`form__form-control ${
              streetErr && 'form__form-control--error'
            }`}
            value={street}
            onChange={handleChange}
            type="text"
            name="street"
            id="street"
          />
          {streetErr && requiredFieldMessage(streetErr)}
        </div>

        {/* city*/}
        <div className="form__form-group">
          <label className="form__label" htmlFor="city">
            miasto
          </label>
          <input
            className={`form__form-control ${
              cityErr && 'form__form-control--error'
            }`}
            value={city}
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
          />
          {cityErr && requiredFieldMessage(cityErr)}
        </div>
        {/* zipcode */}
        <div className="form__form-group">
          <label className="form__label" htmlFor="zipCode">
            kod pocztowy
          </label>
          <input
            className={`form__form-control ${
              zipCodeErr && 'form__form-control--error'
            }`}
            value={zipCode}
            onChange={handleChange}
            type="text"
            name="zipCode"
            id="zipCode"
          />
          {zipCodeErr && requiredFieldMessage(zipCodeErr)}
        </div>

        {/* email */}
        <div className="form__form-group">
          <label className="form__label" htmlFor="email">
            email
          </label>
          <input
            className={`form__form-control ${
              emailErr && 'form__form-control--error'
            }`}
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
          />
          {emailErr && requiredFieldMessage(emailErr)}
        </div>
        
        {/* submit */}
        <div className="form__form-group">
          <input
            className="form__submit-btn"
            type="submit"
            value="Zamawiam"
          />
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
