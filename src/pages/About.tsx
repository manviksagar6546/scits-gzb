import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, TrendingUp, Award, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import "./About.scss";

const About = () => {
  const achievements = [
    { icon: Users, label: "Students Trained", value: "5000+" },
    { icon: Award, label: "Courses Offered", value: "15+" },
    { icon: Clock, label: "Years of Excellence", value: "10+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals with practical computer skills and knowledge that prepare them for real-world challenges in the digital workplace.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We believe in quality education, personalized attention to each student, continuous innovation in teaching methods, and unwavering commitment to student success.",
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description:
        "To become the leading computer education institute in Ghaziabad, recognized for excellence in training and producing industry-ready professionals.",
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
              <span className="hero-badge">About SCITS</span>
              <h1 className="hero-title">
                Building Digital Excellence Since Establishment
              </h1>
              <p className="hero-description">
                SCITS (Smart Computer Institute of Technology) is Ghaziabad's
                trusted destination for quality computer education and
                professional skill development.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`stat-item animate-scale-in delay-${index}`}
                >
                  <div className="stat-icon">
                    <achievement.icon />
                  </div>
                  <div>
                    <p className="stat-value">{achievement.value}</p>
                    <p className="stat-label">{achievement.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="values-section">
          <div className="container">
            <div className="values-grid">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`value-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up delay-${index}`}
                >
                  <div className="value-icon">
                    <value.icon />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed About Content */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded with a vision to make quality computer education
                  accessible to everyone, SCITS has grown to become one of
                  Ghaziabad's most trusted names in professional training. What
                  started as a small initiative has now transformed thousands of
                  lives, helping students and professionals achieve their career
                  goals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our institute is equipped with modern infrastructure,
                  including state-of-the-art computer labs, experienced faculty,
                  and a curriculum that's constantly updated to match industry
                  requirements. We don't just teach theory – we focus on
                  practical, hands-on learning that prepares our students for
                  real-world challenges.
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">
                        Industry-Relevant Curriculum
                      </h4>
                      <p className="text-muted-foreground">
                        Our courses are designed in consultation with industry
                        experts to ensure you learn skills that are in high
                        demand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Small Batch Sizes</h4>
                      <p className="text-muted-foreground">
                        We maintain small class sizes to ensure every student
                        gets personalized attention and guidance from trainers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Placement Support</h4>
                      <p className="text-muted-foreground">
                        We provide comprehensive job placement assistance,
                        including resume building, interview preparation, and
                        direct connections with hiring companies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Lifetime Support</h4>
                      <p className="text-muted-foreground">
                        Even after course completion, we remain available to
                        answer your questions and provide guidance throughout
                        your career.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
