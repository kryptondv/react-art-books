import React from 'react';
import Hero from '../components/hero/Hero';
import ContactForm from '../components/contactPage/contactForm/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Hero page="contact" />
      <ContactForm />
    </>
  );
};

export default ContactPage;
