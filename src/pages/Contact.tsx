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
      details: ["+91 12345 67890", "+91 98765 43210"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@scitsghaziabad.com", "admission@scitsghaziabad.com"],
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
    <div className="page-container">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content animate-fade-in-up">
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
          <div className="container">
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`contact-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-${index}`}
                >
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
              <Card className="p-8 animate-fade-in-up">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Course Interested In
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-lg bg-background">
                      <option>Select a course</option>
                      <option>Basic Computer Course</option>
                      <option>Advanced Excel</option>
                      <option>Tally Course</option>
                      <option>Graphic Design</option>
                      <option>CCNA Networking</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary shadow-soft hover:shadow-medium transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Map */}
              <div className="animate-fade-in-up">
                <Card className="p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                  <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-6">
                    {/* Placeholder for Google Maps */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-6">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Map location</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Near Main Market, Ghaziabad
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Our institute is conveniently located near the main market
                      area of Ghaziabad, easily accessible by public transport.
                    </p>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
