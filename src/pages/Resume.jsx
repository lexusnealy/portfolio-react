import React from 'react';

function About() {
  return (
    <div className="About" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>RESUME</h1>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#bc8f8f',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
        }}
      >
        Open Resume in New Tab
      </a>
      <div style={{ marginTop: '2rem' }}>
        <embed
          src="/resume.pdf"
          type="application/pdf"
          width="80%"
          height="800px"
        />
      </div>
    </div>
  );
}

export default About;
