import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import "./Footer.scss";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    "Basic Computer Course",
    "Advanced Excel",
    "Tally Course",
    "Graphic Design",
    "CCNA Networking",
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <div className="footer-logo">
              <div className="footer-icon">
                {/* <GraduationCap className="footer-icon-img" /> */}
                <img
                  src="/public/Images/scitslogo.png"
                  alt="SCITS Logo"
                  className="navbar__image"
                />
              </div>
              <div>
                <h3 className="footer-title">SCITS</h3>
                <p className="footer-location">Ghaziabad</p>
              </div>
            </div>
            <p className="footer-description">
              Your Gateway to Computer Education and Career Growth. Providing
              quality computer education since establishment.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link">
                <Facebook />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram />
              </a>
              <a href="#" className="footer-social-link">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-courses">
            <h3 className="footer-heading">Our Courses</h3>
            <ul>
              {courses.map((course) => (
                <li key={course}>
                  <Link to="/courses" className="footer-link">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <br />
            <ul>
              <li className="footer-contact-item">
                {/* <MapPin className="footer-contact-icon" /> */}
                <span className="mt-1 mr-3 h-5 w-5 text-blue-900">📍</span>
                {/* <span>113-B Maliwara Pocket A, Nehru Nagar 2nd Ghaziabad</span> */}
                <span>
                  113-B Maliwara Pocket A
                  <br />
                  Nehru Nagar 2nd Ghaziabad, Uttar Pradesh
                </span>
              </li>
              <br />
              <li className="footer-contact-item">
                {/* <Phone className="footer-contact-icon" /> */}
                <span className="mr-3 h-5 w-5 text-blue-900">📞</span>
                <span>+91 8826023765</span>
              </li>
              <br />
              <li className="footer-contact-item">
                {/* <Mail className="footer-contact-icon" /> */}
                <span className="mr-3 h-5 w-5 text-blue-900">📩</span>
                <span>scitsgzbofficial@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} SCITS Ghaziabad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
