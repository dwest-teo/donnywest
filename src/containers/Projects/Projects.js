import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './Projects.css';

const Projects = (props) => {
  const { heading, projects, moreToCome } = props;
  return (
    <section className="pa3 pa5-ns bg-white">
      <h2 className="f2 f1-ns lh-title tracked-tight">
        {heading}
      </h2>
      {projects.map((project, i) => (
        <article key={i} className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 mt0 lh-title">
                {project.title}
              </h1>
              <p className="f5 f4-l lh-copy">
                {project.p}
              </p>
            </div>
            <a
              className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns grow"
              href={project.link.href}
              title={project.link.title}
              target="_blank"
            >
              <img
                src={project.link.img}
                sizes="(max-width: 30em) 100vw, 50vw"
                srcSet={`${project.link.img} 400w, ${project.link.imgLg} 800w`}
                className="db outline black-10"
                alt={`Screenshot of ${project.link.title}`}
              />
            </a>
          </div>
          <p className="f6 lh-copy gray mb2">
            <span className="ttu b">Technologies: </span>
            {project.technologies}
          </p>
          <p className="f6 lh-copy gray mv0">
            <span className="ttu b">Notable: </span>
            {project.notable}
          </p>
        </article>
      ))}
      {moreToCome && (
        <h3 className="f4 f3-ns normal measure-narrow lh-copy">
          More to come...
        </h3>
      )}
    </section>
  );
};

Projects.propTypes = {
  heading: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      p: PropTypes.string,
      link: PropTypes.shape({
        href: PropTypes.string,
        title: PropTypes.string,
        img: PropTypes.string,
      }),
      technologies: PropTypes.string,
      notable: PropTypes.string,
    }),
  ),
  moreToCome: PropTypes.bool,
};

export default connect(state => ({
  heading: state.router.result.heading,
  projects: state.router.result.projects,
  moreToCome: state.router.result.moreToCome,
}))(Projects);
