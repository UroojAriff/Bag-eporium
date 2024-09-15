// src/components/footer.js
import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; 2024 The Bag Emporium. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
