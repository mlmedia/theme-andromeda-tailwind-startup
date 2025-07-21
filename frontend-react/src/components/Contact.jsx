import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="apply-section apply-bg-secondary scroll-mt-16"
      aria-labelledby="contact-section-title"
    >
      <div className="apply-wrapper py-16">
        <header className="section-header animate-in">
          <h2 id="contact-section-title" className="heading">
            Contact Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <div className="apply-content">
          <div id="form-container" className="apply-form-container">
            <div className="apply-form-fieldset animate-in">
              <form id="contact-form" className="apply-form" action="#" method="post">
                <div className="form-fields">
                  <div className="form-field w-full">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="Name*" required className="w-full" />
                  </div>
                  <div className="form-field w-full">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Email*" required className="w-full" />
                  </div>
                  <div className="form-field w-full">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Message*" required rows="8" className="w-full" />
                  </div>
                  <div className="form-buttons">
                    <button type="submit" className="apply-btn-standard w-full">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
