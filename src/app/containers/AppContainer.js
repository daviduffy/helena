import React from 'react';
import content, { cover } from '../fixtures/content';
import App from '../components/App';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mNav: false,
      active: 0
    };
  }

  toggleMobNav = (e) => {
    this.setState(prevState => ({
      mNav: !prevState.mNav
    }));
  }

  selectGallery = ({ target }) => {
    this.setState({
      active: parseInt(target.value, 10)
    });
    this.toggleMobNav();
  }

  render() {
    // this is kind of trashy
    const coverStyles = {
      backgroundImage: `url('${cover}')`
    };
    const currentContent = content[this.state.active];
    const navItems = content.map((current, index) => ({
      name: current.name,
      icon: current.icon,
      key: index,
      index
    }));
    return (
      <App
        active={this.state.active}
        content={currentContent}
        cover={cover}
        coverStyles={coverStyles}
        mNav={this.state.mNav}
        navItems={navItems}
        selectGallery={this.selectGallery}
        toggleMobNav={this.toggleMobNav}
      />
    );
  }
}

export default AppContainer;
