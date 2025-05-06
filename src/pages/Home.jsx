import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <div className="pic-wrapper">
          <div className="card">
            {/* ✅ Correct path from public folder */}
            <img src="/Mypic.jpeg" alt="Lexus's Profile" className="my-pic" />

            <div className="description">
              <div className="card-content">
                <h2 className="name">Lexus Nealy</h2>
                <p className="description">
                  I'm a full stack developer passionate about building beautiful, fast, and responsive web apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
