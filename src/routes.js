const routes = {
  '/': {
    component: 'HOME',
    title: 'Donny West | Front End Engineer, JavaScript Developer, Web/Mobile Pro',
    heading: 'I\'m Donny West.',
    p1: 'I\'m a full-stack developer focused on building modern, lightweight, modular systems for the web and mobile.  I create solutions that solve problems for organizations and improve experiences for users.  Every day I try to leave the web a little faster, friendlier, and better than the way I found it.',
    beforeLink: 'Currently, I\'m the lead front-end engineer at',
    afterLink: 'based in Gainesville, FL.',
    link: {
      href: 'https://www.theelegantoffice.com',
      title: 'TheElegantOffice.com',
      text: 'The Elegant Office,',
    }
  },
  '/about/': {
    component: 'ABOUT',
    title: 'Donny West - About | Front End Engineer, JavaScript Developer, Web/Mobile Pro',
    heading: 'About Me',
    sections: [
      {
        heading: 'I develop real-world web applications with a strong focus on performance & usability on any device.',
        text: 'Working with modern languages and technology stacks, I build applications that solve real-world problems for organizations and users.  I have significant experience in e-commerce, from customer-facing front-ends to integration systems with vendors and providers.  I enjoy building modular, scalable solutions that exceed expectations and shatter goals.',
        list: {
          title: 'Skills',
          items: [
            'JavaScript (ES6+)',
            'Node.js',
            'Ruby on Rails',
            'CSS/SASS/PostCSS',
            'Go',
            'UNIX/Linux/OSX',
          ],
        },
      },
      {
        heading: 'I\'m opinionated about doing things properly, but flexible about the tools I use.',
        text: 'I believe the first step to completing a project properly is to choose the right tools for the job.  I have a set of languages and frameworks that I love to use, but I\'m a firm believer in being flexible enough to try new and emergent technologies when they are a better fit for the task at hand.',
        list: {
          title: 'Tools',
          items: [
            'React',
            'Webpack + Babel',
            'Redux/Flux',
            'Gulp',
            'CSS Modules',
            'Hapi.js',
          ],
        },
      },
      {
        heading: 'Before becoming a developer, I spent 6 years in management roles for e-commerce merchants and providers.',
        text: 'My management experience has given me some unique perspectives as a developer.  I believe that great applications are born out of a clear vision and focus, long before the first line of code is written.  Solutions need to be impeccably tailored to fit the problem, and they always start with a deep, big-picture understanding of the project at-hand.',
        list: {
          title: 'Platforms',
          items: [
            'Bigcommerce',
            'Google Cloud',
            'Algolia',
            'AWS',
            'imgix',
            'Heroku',
          ],
        },
      },
      {
        heading: 'I\'m also a father of two that used to have all kinds of cool interests and hobbies.',
        text: 'Now most of my time is spent singing the ABC song, reading books about animals, or playing with Thomas, Gordon, and Henry in an elaborate recreation of the island of Sodor.  Also diapers.  This might not sound especially exciting, but I wouldn\'t have it any other way!',
        list: null,
      },
    ],
  },
  '/projects/': {
    component: 'PROJECTS',
  },
};

export default routes;
