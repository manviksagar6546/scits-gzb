import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import "./Contact.scss";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 12345 67890"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@scitsghaziabad.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Near Main Market", "Ghaziabad, Uttar Pradesh", "PIN: 201001"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-badge">Contact Us</span>
              <h1 className="hero-title">Get In Touch With Us</h1>
              <p className="hero-description">
                Have questions about our courses? Want to schedule a visit?
                We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-card">
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <h3 className="contact-title">{info.title}</h3>
                  <div className="contact-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="contact-form-section">
              {/* Contact Form */}
              <Card className="contact-form-card">
                <h2 className="form-heading">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Course Interested In</label>
                    <select className="form-select">
                      <option>Select a course</option>
                      <option>Basic Computer Course</option>
                      <option>Advanced Excel</option>
                      <option>Tally Course</option>
                      <option>Graphic Design</option>
                      <option>CCNA Networking</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="submit-btn">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Map
              <Card className="contact-map-card">
                <h2 className="map-heading">Find Us</h2>
                <div className="map-container">
                  <div className="map-placeholder">
                    <MapPin className="map-icon" />
                    <p>Map location</p>
                    <span>Near Main Market, Ghaziabad</span>
                  </div>
                </div>
                <div className="map-info">
                  <p>
                    Our institute is conveniently located near the main market
                    area of Ghaziabad, easily accessible by public transport.
                  </p>
                  <Button variant="outline" className="direction-btn">
                    Get Directions
                  </Button>
                </div>
              </Card> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
