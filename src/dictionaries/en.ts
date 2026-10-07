import type { Dictionary } from './es';

// Everything marked [EXAMPLE] must be replaced with real data.
export const en: Dictionary = {
  meta: {
    title: 'Stefano Casa Izarra — Computer Engineer',
    description: 'Professional portfolio of Stefano Casa Izarra, Computer Engineer.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  ui: {
    toggleTheme: 'Toggle theme',
    toggleLang: 'Change language',
    menu: 'Menu',
    skipToContent: 'Skip to content',
    downloadCv: 'Download CV',
    rights: 'All rights reserved.',
    viewProject: 'View Project',
    paginationLabel: 'Project pagination',
    previousPage: 'Previous',
    nextPage: 'Next',
    page: 'Page',
    of: 'of',
    photoAlt: 'Portrait of Stefano Casa Izarra',
  },
  home: {
    role: 'Computer Engineer',
    lead: 'Software Engineer with a strong background in software development, database management, and project coordination. Passionate about technological innovation, with experience in analyzing, designing, and implementing solutions that streamline business processes and enhance operational efficiency.',
    ctaContact: 'Contact me',
    what: {
      eyebrow: 'Stack',
      title: 'What I do',
      tagline: 'Full stack software engineer, from the frontend to the database.',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Databases',
        tools: 'Tools & platforms',
      },
      capabilities: {
        frontend: {
          title: 'Frontend',
          text: 'Full stack frontend web development focused on React, HTML5, CSS3, and JavaScript.',
        },
        backend: {
          title: 'Backend',
          text: 'Extensive backend experience with PHP, Node.js, Python, and C#.',
        },
        database: {
          title: 'Databases',
          text: 'Relational database management using MySQL and SQL Server.',
        },
        versioning: {
          title: 'Version control',
          text: 'Version control and source management with Git and GitHub.',
        },
        ai: {
          title: 'Applied AI',
          text: 'Advanced AI tools integration and implementation, such as Claude Code, to optimize software development workflows.',
        },
        modeling: {
          title: 'Modeling & architecture',
          text: 'Software modeling and architecture through the creation and analysis of UML diagrams (use case, class, sequence, and ER diagrams).',
        },
        testing: {
          title: 'Software testing',
          text: 'Planning and execution of software testing (unit, integration, and functional testing) to ensure code quality, stability, and proper operation.',
        },
        security: {
          title: 'Cybersecurity',
          text: 'Implementation of cybersecurity best practices, including secure authentication, sensitive data encryption, and protection against common web vulnerabilities.',
        },
      },
    },
    reach: {
      title: 'Reach out to me',
      lead: 'Want to discuss a project or just say hi? My inbox is open.',
      cta: 'Contact me',
      location: 'Venezuela · Remote and on-site work',
      openLabel: 'Open for opportunities',
      openValue: 'Yes',
    },
    latest: {
      eyebrow: 'Portfolio',
      title: 'Latest projects',
      more: 'See more',
    },
  },
  pages: {
    about: {
      title: 'About',
      lead: 'I am a software engineer educated in Venezuela with a full-stack focus. My education and experience span database analysis, design, and management; structured and object-oriented programming; web application development; and the full software engineering lifecycle, from requirements and design through testing and maintenance. I also have grounding in artificial intelligence, software quality assurance, technology project management, and information systems auditing.',
      education: {
        title: 'Education',
        degree: 'Software Engineering',
        level: 'BS',
        institution: 'Universidad Rafael Belloso Chacín (URBE)',
        location: 'Maracaibo, Zulia, Venezuela',
        period: 'Jan 2020 – Jul 2024',
        logoAlt: 'Universidad Rafael Belloso Chacín logo',
        paragraphs: [
          'I earned my degree in Software Engineering at Universidad Rafael Belloso Chacín (URBE), in Maracaibo, Zulia, Venezuela. My studies ran from January 2020 to July 2024 and gave me a solid grounding in both the theory and the professional practice of software development.',
          'The curriculum covered the full software life cycle: from data modeling and management and programming, to requirements engineering, quality and technology project management.',
        ],
      },
    },
    projects: { title: 'Projects', lead: 'Selected software projects, from newest to oldest.' },
    experience: {
      title: 'Experience',
      lead: 'My professional path: from an academic internship to freelance work.',
      current: 'Current',
    },
    contact: {
      title: 'Contact',
      lead: 'Write to me by email or find me on my professional profiles.',
      emailLabel: 'Email',
      copy: 'Copy',
      copied: 'Copied!',
      copyAria: 'Copy email to clipboard',
      upworkValue: 'Freelancer profile',
    },
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    lead: "The page you're looking for doesn't exist or has moved.",
    prompt: 'visitor@stefano:~$',
    error: 'No such file or directory',
    home: 'Back to home',
    projects: 'View projects',
  },
};
