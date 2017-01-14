import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './About.css';

const About = (props) => {
  const { heading, sections } = props;
  return (
    <section className="pa3 pa5-ns bg-white">
      <h2 className="f2 f1-ns lh-title tracked-tight">
        {heading}
      </h2>
      {sections.map((section, i) => (
        <div key={i}>
          <h3 className="f4 f3-ns normal measure-narrow lh-copy">
            {section.heading}
          </h3>
          <p className="measure lh-copy">
            {section.text}
          </p>
          {section.list && (
            <ul className="list pa0 mv4 measure-wide cf mid-gray">
              <label className="db mv1 tracked light-silver b ttu">
                <small>{section.list.title}</small>
              </label>
              {section.list.items.map((item, i) => (
                <li key={i} className="fl-ns w-50-ns"><small>{item}</small></li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

About.propTypes = {
  heading: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
      list: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  ),
};

export default connect(state => ({
  heading: state.router.result.heading,
  sections: state.router.result.sections,
}))(About);
