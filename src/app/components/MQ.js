import React from 'react';

const MediaQueryHelper = props => (
  <div className="mq">
    <div className="mq-w">
      <span>B:&nbsp;
        <span className="small-only">Small</span>
        <span className="smedium-only">Smedium</span>
        <span className="medium-only">Medium</span>
        <span className="large-only">Large</span>
        <span className="xlarge-only">XLarge</span>
      </span>
    </div>
    <div className="mq-o">
      <span>O:&nbsp;
        <span className="portrait-only">Portrait</span>
        <span className="landscape-only">Landscape</span>
      </span>
    </div>
  </div>
);

export default MediaQueryHelper;
