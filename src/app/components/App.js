import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Card from '../components/Card';
import MQ from '../components/MQ';

const App = ({ active, content, cover, coverStyles, mNav, navItems, selectGallery, toggleMobNav }) => (
  <div className="cont">
    <header className={`header ${mNav ? ' header--open' : ''}`}>
      <button className="header__trigger u-abs-c btn--un" id="header_nav_trigger" onClick={toggleMobNav}>
        <span className="header__bars" />
      </button>
      <div className="header__bg u-abs-c" />

      <Nav
        classes="nav--header"
        active={active}
        navItems={navItems}
        selectGallery={selectGallery}
      />

    </header>
    <section className="cover u-flex">
      <div className="cover__bg u-abs-c" style={coverStyles} />
      <div className="cover__t-c u-flex u-flex--c">
        <div className="cover__t">
          <h1 className="cover__h1">Helena Falangus</h1>
          <p className="cover__p h4">Costume Designer</p>
        </div>
      </div>
      <div className="cover__nav-b" />
    </section>

    <Nav
      classes="nav--body"
      active={active}
      navItems={navItems}
      selectGallery={selectGallery}
    />

    <main className="main">
      <div className={`gallery gallery--${content.mosaic ? 'mosaic' : 'flex'}`} id="gallery" >
        {
          content.featCards.map((current, index) => (
            <Card
              classes={current.classes}
              bg_src={current.bg_src}
              title={current.title}
              subtitle={current.subtitle}
              key={index}
            />
          ))
        }
      </div>
      <div className="gallery__c-more u-flex u-flex--c">
        <button href="#" className="h6 gallery__more btn btn--more" id="more">See All</button>
      </div>
    </main>
    <div className="x u-abs-c">
      <button href="#" className="u-abs-c btn--un" onClick={toggleMobNav} />
    </div>
    <MQ />
  </div>
);

App.propTypes = {
  active: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired,
  cover: PropTypes.string.isRequired,
  coverStyles: PropTypes.object.isRequired,
  mNav: PropTypes.bool.isRequired,
  navItems: PropTypes.array.isRequired,
  selectGallery: PropTypes.func.isRequired,
  toggleMobNav: PropTypes.func.isRequired
};

export default App;
