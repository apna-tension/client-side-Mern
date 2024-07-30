import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Careers</h2>
          <ul>
            <li><a href="#">Job Openings</a></li>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Culture</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +123456789</li>
            <li>Address: 1234 Street Name, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="container text-center footer-credits">
        <p>Made with <span style={{ color: '#e53e3e' }}>&hearts;</span> by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;
