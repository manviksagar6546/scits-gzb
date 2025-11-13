import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo Section */}
        <a href="/" className="navbar__logo">
          <div className="navbar__icon">
            {/* logo image */}
            <img src="/public/Images/scitslogo.png" alt="SCITS Logo" className="navbar__image" />
          </div>
          <div className="navbar__text">
            {/* <span className="navbar__brand">SCITS</span> */}
            {/* <span className="navbar__location">Ghaziabad</span> */}
          </div>
        </a>
        
        {/* Desktop Links */}
        <nav className="navbar__links">
          {/* <a href="/" className="active"> */}
          <a href="/" >
            Home
          </a>
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
          {/* <a href="/contact">
            <button className="enroll-btn">Enroll Now</button>
          </a> */}
        </nav>

        {/* Mobile Menu Button */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isOpen ? "open" : ""}`}>
        <a href="/" onClick={toggleMenu}>
          Home
        </a>
        <a href="/about" onClick={toggleMenu}>
          About
        </a>
        <a href="/courses" onClick={toggleMenu}>
          Courses
        </a>
        <a href="/gallery" onClick={toggleMenu}>
          Gallery
        </a>
        <a href="/contact" onClick={toggleMenu}>
          Contact
        </a>
        {/* <button className="enroll-btn mobile-btn">Enroll Now</button> */}
      </div>
    </header>
  );
};

export default Navbar;
