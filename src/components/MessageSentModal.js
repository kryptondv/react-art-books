import React from 'react';
import { Link } from 'react-router-dom';

const MessageSentModal = ({ message, setMessageIsSent, subtitle }) => {

  const success = message === 'success';

  return (
    <div className="message-sent-modal" onClick={() => setMessageIsSent('')}>
      <div className="message-sent-modal__box">
        <h2 className="message-sent-modal__title">
          {success ? 'Dziękujemy' : 'Ooops'}
        </h2>
        <p className="message-sent-modal__subtitle">
          {success ? subtitle : 'Coś poszło nie tak'}
        </p>
        {success ? (
          <Link to={'/'} className="btn hero__btn message-sent-modal__btn">
            Strona główna
          </Link>
        ) : (
          <button className="btn hero__btn message-sent-modal__btn">Powrót</button>
        )}
      </div>
    </div>
  );
};

export default MessageSentModal;
