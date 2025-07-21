import React from 'react';
import services from '../data/services.json';

function Services() {
  return (
    <section
      id="services"
      className="apply-section apply-bg-tertiary scroll-mt-16"
      aria-labelledby="services-section-title"
    >
      <div className="apply-wrapper py-16">
        <header className="section-header animate-in">
          <h2 id="services-section-title" className="heading">
            What We Do
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <div className="apply-content">
          <div className="apply-grid-2-3 animate-in">
            {services.map((s, i) => (
              <div key={i} className="apply-info-card">
                <div className="content">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h6"
                      />
                    </svg>
                  </div>
                  <h3 className="title">{s.title}</h3>
                  <div className="text">{s.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
