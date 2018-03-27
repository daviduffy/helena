import React from 'react';
import PropTypes from 'prop-types';

const NavLink = props => (
  <li className={`nav__li ${props.is_active ? 'nav__li--active' : ''}`}>
    <button value={props.index} className="nav__a btn--un u-flex" onClick={props.selectGallery}>
      <i className={`nav__fa nav__fa--i fa ${props.icon}`} aria-hidden="true" />
      <i className="nav__fa fa fa-circle" aria-hidden="true" />
      <h2 className="h6 nav__a-title">{props.name}</h2>
    </button>
  </li>
);
NavLink.propTypes = {
  is_active: PropTypes.bool.isRequired,
  selectGallery: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavLink;
