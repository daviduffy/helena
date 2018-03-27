import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <section className="card fade-in-down">
    <div className="card__img">
      <img className="" src={props.bg_src} alt={props.title} />
    </div>
    <div className="card__cont u-flex u-flex--c">
      <h3 className="h6 card__title">{props.title}</h3>
      <p className="h6 card__sub">{props.subtitle}</p>
    </div>
  </section>
);
Card.propTypes = {
  bg_src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Card;
