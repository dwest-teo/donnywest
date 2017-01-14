import React, { Component, PropTypes } from 'react';
import { Link } from 'redux-little-router';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="dt w-100 border-box pa3 ph5-ns">
        <Link
          className="dtc v-mid mid-gray link dim w-25"
          href="/"
          title="Home"
        >
          <span className="b">Donny</span>
          <span className="gray">West</span>
        </Link>
        <div className="dtc v-mid w-75 tr">
          <Link
            className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="/about/"
            title="About"
          >
            About
          </Link>
          <Link
            className="link dim dark-gray f6 f5-ns dib"
            href="/projects/"
            title="Projects"
          >
            Projects
          </Link>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  component: PropTypes.string.isRequired,
};

export default Header;
