import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RelativeFragment as Fragment } from 'redux-little-router';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';

import { loadedApp } from '../../actions/App';

class App extends Component {
  componentDidMount() {
    this.props.loadedApp();
  }

  render() {
    return (
      <Fragment forRoute="/">
        <div className="App min-vh-100 flex flex-column">
          <Header component={this.props.component} />
          <div className="Content flex-auto bg-white-90">
            <Fragment forRoute="/" withConditions={loc => loc.route === '/'}>
              <Home />
            </Fragment>
            <Fragment forRoute="/about/">
              <About />
            </Fragment>
            <Fragment forRoute="/projects/">
              <Projects />
            </Fragment>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  loaded: PropTypes.bool,
  component: PropTypes.string,
  loadedApp: PropTypes.func,
};

export default connect(state => ({
  loaded: state.App.loaded,
  component: state.router.result.component,
}), { loadedApp })(App);
