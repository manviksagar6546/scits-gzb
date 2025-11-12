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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">SCITS</h3>
                <p className="text-xs text-muted-foreground">Ghaziabad</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your Gateway to Computer Education and Career Growth. Providing
              quality computer education since establishment.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Our Courses
            </h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span>Near Main Market, Ghaziabad, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>info@scitsghaziabad.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SCITS Ghaziabad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
