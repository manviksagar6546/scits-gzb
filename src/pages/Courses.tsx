import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  TrendingUp,
  Calculator,
  Palette,
  Network,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Courses.scss";

const Courses = () => {
  const courses = [
    {
      icon: Monitor,
      title: "Basic Computer Course",
      duration: "3 Months",
      level: "Beginner",
      description:
        "Complete foundation course covering essential computer skills for students and beginners",
      topics: [
        "Computer Fundamentals & Hardware Basics",
        "Typing Skills & Speed Development",
        "MS Paint & Basic Graphics",
        "MS Word - Document Creation & Formatting",
        "MS Excel - Basic Spreadsheets & Formulas",
        "MS PowerPoint - Presentation Design",
        "MS Access - Database Basics",
        "Internet & Email Management",
      ],
      slug: "blue",
    },
    {
      icon: TrendingUp,
      title: "Advanced Excel Course",
      duration: "2 Months",
      level: "Intermediate to Advanced",
      description:
        "Master Excel for data analysis, reporting, and automation in business environments",
      topics: [
        "Advanced Formulas & Functions",
        "VLOOKUP, HLOOKUP & INDEX MATCH",
        "Pivot Tables & Pivot Charts",
        "Data Validation & Conditional Formatting",
        "Data Analysis & What-If Analysis",
        "Macros & VBA Programming Basics",
        "Dashboard Creation & Reporting",
        "Power Query & Power Pivot",
      ],
      slug: "green",
    },
    {
      icon: Calculator,
      title: "Tally Course (Basic & Advanced)",
      duration: "3 Months",
      level: "Beginner to Advanced",
      description:
        "Complete accounting software training from fundamentals to advanced GST implementation",
      topics: [
        "Tally Prime Basics & Interface",
        "Company Creation & Configuration",
        "Voucher Entry & Day Books",
        "GST Configuration & Returns Filing",
        "Payroll Management & TDS",
        "Banking & Reconciliation",
        "Financial Statements & Reports",
        "Inventory Management & Stock Analysis",
      ],
      slug: "orange",
    },
    {
      icon: Palette,
      title: "Graphic Design Basics",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      description:
        "Learn professional graphic design tools to create stunning visuals and branding materials",
      topics: [
        "Design Principles & Color Theory",
        "CorelDRAW - Vector Graphics & Illustration",
        "Adobe Photoshop - Photo Editing & Manipulation",
        "Logo Design & Brand Identity",
        "Banner & Poster Design",
        "Business Card & Brochure Design",
        "Social Media Graphics",
        "Print & Digital Design Standards",
      ],
      slug: "purple",
    },
    {
      icon: Network,
      title: "Networking for CCNA Exam Preparation",
      duration: "4 Months",
      level: "Intermediate to Advanced",
      description:
        "Comprehensive networking course preparing you for CCNA certification and network administration",
      topics: [
        "Network Fundamentals & OSI Model",
        "IP Addressing & Subnetting",
        "Routing Protocols (RIP, OSPF, EIGRP)",
        "Switching & VLANs Configuration",
        "Network Security Basics",
        "WAN Technologies",
        "Cisco IOS Commands & Configuration",
        "Troubleshooting & Network Management",
      ],
      slug: "indigo",
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
              <span className="hero-badge">Our Courses</span>
              <h1 className="hero-title">Professional Training Programs</h1>
              <p className="hero-description">
                Choose from our comprehensive range of industry-relevant courses
                designed to accelerate your career growth
              </p>
            </div>
          </div>
        </section>

        {/* Courses List */}
        <section className="courses-section">
          <div className="container">
            <div className="courses-list">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden hover:shadow-strong transition-all duration-300 animate-fade-in-up delay-${index}`}
                >
                  <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    {/* Left Side - Course Info */}
                    <div className={`p-8 course-${course.slug} text-white`}>
                      <div className="space-y-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <course.icon className="w-8 h-8" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-bold mb-2">
                            {course.title}
                          </h2>
                          <p className="text-white/90">{course.description}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <div>
                              <p className="text-sm opacity-90">Duration</p>
                              <p className="font-semibold">{course.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Award className="w-5 h-5" />
                            <div>
                              <p className="text-sm opacity-90">Level</p>
                              <p className="font-semibold">{course.level}</p>
                            </div>
                          </div>
                        </div>

                        <Link to="/contact">
                          <Button className="w-full bg-white text-gray-900 hover:bg-white/90">
                            Enroll Now
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Topics */}
                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-6">
                        What You'll Learn
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{topic}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content animate-fade-in">
              <h2 className="cta-title">Ready to Start Learning?</h2>
              <p className="cta-description">
                Join thousands of students who have transformed their careers
                with SCITS. Get expert training, recognized certification, and
                placement support.
              </p>
              <div className="cta-buttons">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="gradient-primary shadow-medium hover:shadow-strong transition-all"
                  >
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-2">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
