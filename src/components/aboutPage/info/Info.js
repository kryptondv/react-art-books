import React from 'react';
import Title from '../../title/Title';
import aboutImg from '../../../assets/img/about-1.jpg';

const Info = () => {
  return (
    <section className="info">
      <div className="text-container">
        <Title title="o nas"></Title>
        <p className="info__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          quos quaerat molestias dolor alias dolorem atque quo laudantium
          eveniet minus.
        </p>
        <p className="info__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aut quis,
          ratione aperiam nulla in consequatur voluptatum neque sit corporis
          modi impedit, reiciendis quaerat. Praesentium sit sunt aspernatur
          consequatur est. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Sequi, earum?
        </p>
        <p className="info__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea,
          similique commodi porro iusto ad aspernatur sint ipsum, eos est maxime
          sequi inventore ratione in vel obcaecati libero molestias a!
        </p>
      </div>
      <img className="info__img" src={aboutImg} alt="books" />
    </section>
  );
};

export default Info;
