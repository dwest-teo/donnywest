import React, { Component, PropTypes } from 'react';

import './Projects.css';
import teoSS from '../../assets/teo-ss.jpg';
import dwSS from '../../assets/dw-ss.jpg';
import brinkSS from '../../assets/brink-ss.jpg';
import sstSS from '../../assets/sst-ss.jpg';
import ikeSS from '../../assets/ike-ss.jpg';

class Projects extends Component {
  render() {
    return (
      <section className="pa3 pa5-ns bg-white">
        <h2 className="f2 f1-ns lh-title tracked-tight">Projects</h2>
        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 mt0 lh-title">The Elegant Office</h1>
              <p className="f5 f4-l lh-copy">
                My day job - a complete custom e-commerce application and ecosystem.  The Elegant Office uses a custom React/Redux front-end application, with a smart API surface that decouples the backend, making it platform-agnostic.  The site currently runs on the Bigcommerce platform, and features a number of notable "firsts" and unique integrations.
              </p>
            </div>
            <a
              className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns grow"
              href="https://www.theelegantoffice.com/"
              title="TheElegantOffice.com"
              target="_blank"
            >
              <img src={teoSS} className="db outline black-10" alt="Screenshot of TheElegantOffice.com" />
            </a>
          </div>
          <p className="f6 lh-copy gray mb2">
            <span className="ttu b">Technologies: </span>
            React, Redux, Redux-Saga, Node.js, Webpack, Google Cloud, Ruby, Go, SASS
          </p>
          <p className="f6 lh-copy gray mv0">
            <span className="ttu b">Notable: </span>
            First Bigcommerce store using a React SPA, custom integrations with Algolia, Yotpo, Netsuite, imgix, ZMags, and more
          </p>
        </article>
        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 mt0 lh-title">Donny West</h1>
              <p className="f5 f4-l lh-copy">
                The site you're browsing at this very moment.  It's a simple enough site, but there's a modern tech stack behind it working to make it fast, responsive, and readable.  A custom Go server and React + Redux front-end application make this site vastly more complex than it needs to be, but it's all in good fun.
              </p>
            </div>
            <a
              className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns grow"
              href="/"
              title="DonnyWest.com"
              target="_blank"
            >
              <img src={dwSS} className="db outline black-10" alt="Screenshot of DonnyWest.com" />
            </a>
          </div>
          <p className="f6 lh-copy gray mb2">
            <span className="ttu b">Technologies: </span>
            React, Redux, Node.js, JavaScript(ES6), Webpack, Go, PostCSS, CSS Modules
          </p>
          <p className="f6 lh-copy gray mv0">
            <span className="ttu b">Notable: </span>
            The only officially authorized Donny West website in the world
          </p>
        </article>
        <article className="pv4 bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 mt0 lh-title">Brink Commerce</h1>
              <p className="f5 f4-l lh-copy">
                A simple static site/landing page.  This site was built from the ground-up for performance, using vanilla JavaScript and SASS only, no frameworks.  It's basic and minimal, and exceeded all performance goals.
              </p>
            </div>
            <a
              className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns grow"
              href="https://brinkcommerce.com/"
              title="BrinkCommerce.com"
              target="_blank"
            >
              <img src={brinkSS} className="db outline black-10" alt="Screenshot of BrinkCommerce.com" />
            </a>
          </div>
          <p className="f6 lh-copy gray mb2">
            <span className="ttu b">Technologies: </span>
            JavaScript(ES6), SASS, Gulp, Rollup, Python
          </p>
          <p className="f6 lh-copy gray mv0">
            <span className="ttu b">Notable: </span>
            It's really, really fast
          </p>
        </article>
        <article className="pv4 bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 mt0 lh-title">slim-stencil-tools</h1>
              <p className="f5 f4-l lh-copy">
                A lightweight and modern alternative utility library for the Bigcommerce Stencil theme framework.  This is a lean, performance-oriented replacement for Bigcommerce's standard library that removes third-party dependencies like jQuery.
              </p>
            </div>
            <a
              className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns grow"
              href="https://github.com/dwest-teo/slim-stencil-tools"
              title="slim-stencil-tools on Github"
              target="_blank"
            >
              <img src={sstSS} className="db outline black-10" alt="Screenshot of slim-stencil-tools" />
            </a>
          </div>
          <p className="f6 lh-copy gray mb2">
            <span className="ttu b">Technologies: </span>
            JavaScript(ES6), Gulp, Webpack
          </p>
          <p className="f6 lh-copy gray mv0">
            <span className="ttu b">Notable: </span>
            Less than 1/3 the size of the original library it replaces
          </p>
        </article>
        <article className="pv4 bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 mt0 lh-title">ike.js</h1>
              <p className="f5 f4-l lh-copy">
                A small, dependency-free JavaScript library that asynchronously loads SVG sprites and saves them to the client's local storage.
              </p>
            </div>
            <a
              className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns grow"
              href="https://github.com/dwest-teo/ike.js"
              title="ike.js on Github"
              target="_blank"
            >
              <img src={ikeSS} className="db outline black-10" alt="Screenshot of ike.js" />
            </a>
          </div>
          <p className="f6 lh-copy gray mb2">
            <span className="ttu b">Technologies: </span>
            JavaScript(ES6), Gulp
          </p>
          <p className="f6 lh-copy gray mv0">
            <span className="ttu b">Notable: </span>
            A simple utility that does one thing well
          </p>
        </article>
        <h3 className="f4 f3-ns normal measure-narrow lh-copy">
          More to come...
        </h3>
      </section>
    );
  }
}

Projects.propTypes = {
  component: PropTypes.string,
};

export default Projects;
