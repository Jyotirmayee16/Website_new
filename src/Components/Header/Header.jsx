import React from 'react';
// import { SubHeading } from '../../components';
import './Header.css';
import bg from '../../images/bg.png';

const Header = () => (
  <div className="app-header app-wrapper section-padding" id="home">
    <div className="app-wrapper-info">
      {/* <SubHeading title="Chase the new flavor" /> */}
      <h1 className="app-header-h1">The Key To Fine wishes with Positivity</h1>
      <p className="p-opensans" style={{ margin: '2rem 0' }}>
        welcome to resonance3d private limited company
      </p>
      <button type="button" className="custom-button">
        Explore Menu
      </button>
    </div>

    <div className="app-wrapper-img">
      <img src={bg} alt="header_img" />
    </div>
  </div>
);

export default Header;
