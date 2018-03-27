import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

const Nav = props => (
  <nav className={`nav ${props.classes}`}>
    <ul className="nav__ul u-flex">
      {
        props.navItems.map((current, index) => (
          <NavLink
            selectGallery={props.selectGallery}
            icon={current.icon}
            name={current.name}
            is_active={props.active === current.index}
            index={index}
            key={index}
          />
        ))
      }
    </ul>
  </nav>
);
Nav.propTypes = {
  classes: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired,
  selectGallery: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired
};

export default Nav;
