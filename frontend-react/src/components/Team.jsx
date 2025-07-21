import React from 'react';
import team from '../data/team.json';

function Team() {
  return (
    <div
      id="team"
      className="apply-section apply-bg-primary scroll-mt-16"
      aria-labelledby="team-section-title"
    >
      <div className="apply-wrapper py-16">
        <header className="section-header animate-in">
          <h2 id="team-section-title" className="heading">
            Our Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <div className="apply-content">
          <div className="apply-grid-2-4">
            {team.map((person, i) => (
              <div key={i} className="apply-profile-card animate-in">
                <div className="content">
                  <div className="image">
                    <img src={person.image} alt={`Image of ${person.name}`} />
                  </div>
                  <div className="details">
                    <p className="name">{person.name}</p>
                    <p className="position">{person.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
