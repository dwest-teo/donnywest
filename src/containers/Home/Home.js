import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './Home.css';

const Home = (props) => {
  const { heading, p1, beforeLink, afterLink, link } = props;

  return (
    <article className="pa3 pa5-ns flex-auto">
      <h1 className="f2 f1-m f-headline-l tracked-tight">
        {heading}
      </h1>
      <p className="measure lh-copy">
        {p1}
      </p>
      <p className="measure lh-copy">
        {beforeLink}
        <a
          href={link.href}
          className="link dim"
          title={link.title}
          target="_blank"
        >
          &nbsp;{link.text}&nbsp;
        </a>
        {afterLink}
      </p>
    </article>
  );
};

Home.propTypes = {
  // title: PropTypes.string,
  heading: PropTypes.string,
  p1: PropTypes.string,
  beforeLink: PropTypes.string,
  afterLink: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  })
};

export default connect(state => ({
  // title: state.router.result.title,
  heading: state.router.result.heading,
  p1: state.router.result.p1,
  beforeLink: state.router.result.beforeLink,
  afterLink: state.router.result.afterLink,
  link: state.router.result.link,
}))(Home);
