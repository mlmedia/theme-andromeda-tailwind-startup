import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="apply-bg-primary apply-footer">
      <div className="apply-wrapper">
        <div className="content">
          <div className="brand">
            <a href="#hero" aria-label="Brand">
              Andromeda
            </a>
          </div>
          <div className="copyright">
            <p>&copy; Andromeda 2024. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a
              className="social-link"
              href="https://www.google.com"
              title="Google"
              target="_blank"
              rel="noreferrer"
            >
              Google
            </a>
            <a
              className="social-link"
              href="https://www.github.com"
              title="Github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="social-link"
              href="https://www.slack.com"
              title="Slack"
              target="_blank"
              rel="noreferrer"
            >
              Slack
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
