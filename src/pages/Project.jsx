import React from 'react';

const projects = [
  {
    name: 'First Project "Financial Calculator"',
    url: 'https://github.com/Hiemdier/project-1-financial-calculator',
    description: 'My first group project! We created an app that assists with tracking your finances.',
    image: '/images/financial-calculator.png'
  },
  {
    name: 'Second Project "Munchmap"',
    url: 'https://github.com/Pricilla-Francis/Project-2.git',
    description: 'My second group project! We created an app called "Munchmap" where we used the love for food and brought it to social media.',
    image: '/images/munchmap.png'
  },
  {
    name: 'Portfolio Website',
    url: 'https://github.com/dballard0628/react-portfolio.git',
    description: 'My personal portfolio site built with React and Vite.',
    image: '/images/portfolio.png'
  },
  {
    name: 'Vehicle Builder',
    url: 'https://github.com/lexusnealy/vehicle-vision',
    description: 'A TypeScript command-line app that builds vehicles for users.',
    image: '/images/vehicle-vision.png'
  },
  {
    name: 'Weather App',
    url: 'https://github.com/lexusnealy/weather-bender',
    description: 'A weather dashboard that was created using an API key to get real-time weather reports from all around.',
    image: '/images/weather-bender.png'
  }               
];

const Projects = () => {
  return (
    <section className="page-wrapper">
      <div style={{ padding: '2rem', maxWidth: '800px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Projects</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {projects.map((project, index) => (
            <li key={index} style={{ backgroundColor: '#F2EFEA', padding: '1rem', marginBottom: '1.5rem', borderRadius: '10px' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{project.name}</h3>
              <p>{project.description}</p>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: '100%', maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '1rem' }}
                />
              )}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  backgroundColor: '#bc8f8f',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginTop: '1rem'
                }}
              >
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
