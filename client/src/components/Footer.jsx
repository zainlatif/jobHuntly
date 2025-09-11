import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setEmail('');
      // Add your subscription logic here
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon"><img src="/assets/companies/icon.svg" alt="" /></span>
              <span className="logo-text">JobHuntly</span>
            </div>
            <p className="brand-description">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h3 className="section-title">About</h3>
            <ul className="footer-links">
              <li><a href="/companies">Companies</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/advice">Advice</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3 className="section-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="/help">Help Docs</a></li>
              <li><a href="/guide">Guide</a></li>
              <li><a href="/updates">Updates</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h3 className="section-title">Get job notifications</h3>
            <p className="newsletter-description">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              2021 © JobHuntly. All rights reserved.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Dribbble">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.71-.653-.126-1.453-.254-2.33-.254-.993 0-2.014.174-2.99.523-.023-.053-.046-.107-.07-.16-.236-.55-.5-1.1-.808-1.64C17.568 8.681 19.674 6.9 19.568 5.302zM12 2.183c2.227 0 4.26.77 5.863 2.054-1.114 1.47-3.05 3.07-4.926 3.07-1.5 0-2.867-.97-3.67-2.43C10.18 3.73 11.067 2.183 12 2.183zm-2.82 2.83C10.25 6.85 11.513 7.68 13 7.68c1.605 0 3.391-1.318 4.4-2.56.9.9 1.5 2.1 1.78 3.41-.97-.35-2-.53-3.05-.53-1.1 0-2.16.22-3.15.65-.02-.05-.04-.1-.07-.15-.29-.67-.63-1.31-1.03-1.92-.28-.61-.59-1.19-.93-1.74zM2.432 12c0-2.83 1.225-5.38 3.18-7.133.18.38.37.76.58 1.13.42.74.89 1.46 1.4 2.15.51.69 1.06 1.35 1.65 1.98.59.63 1.22 1.23 1.89 1.79.67.56 1.38 1.09 2.13 1.58.75.49 1.54.94 2.36 1.35.82.41 1.68.78 2.57 1.1.89.32 1.82.59 2.77.81-.16 2.02-.88 3.87-2.05 5.35-1.26-.47-2.6-.94-3.99-1.35-1.39-.41-2.83-.76-4.31-1.04-1.48-.28-3-.49-4.55-.63C2.567 15.97 2.432 13.99 2.432 12z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;