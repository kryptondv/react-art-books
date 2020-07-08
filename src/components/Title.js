import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__title">{title}</h2>
      <div
        className={`section-title__separator`}
      />
    </div>
  );
};

export default Title;
