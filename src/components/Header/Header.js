import React, { PropTypes } from 'react';
import { Link } from 'redux-little-router';

import './Header.css';

const linkSx = 'link dim f6 f5-ns dib';

const Header = ({ component }) => (
  <nav className="dt w-100 border-box pa3 ph5-ns">
    <Link
      className="dtc v-mid link dim w-25 mid-gray"
      href="/"
      title="Home"
    >
      <span className="b">Donny</span>
      <span className="gray">West</span>
    </Link>
    <div className="dtc v-mid w-75 tr">
      <Link
        className={`${linkSx} mr3 mr4-ns ${component === 'ABOUT' ? 'blue' : 'dark-gray'}`}
        href="/about/"
        title="About"
      >
        About
      </Link>
      <Link
        className={`${linkSx} ${component === 'PROJECTS' ? 'blue' : 'dark-gray'}`}
        href="/projects/"
        title="Projects"
      >
        Projects
      </Link>
    </div>
  </nav>
);

Header.propTypes = {
  component: PropTypes.string.isRequired,
};

export default Header;
