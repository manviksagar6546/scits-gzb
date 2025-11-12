import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, TrendingUp, Award, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

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
      description: "To empower individuals with practical computer skills and knowledge that prepare them for real-world challenges in the digital workplace.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in quality education, personalized attention to each student, continuous innovation in teaching methods, and unwavering commitment to student success.",
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description: "To become the leading computer education institute in Ghaziabad, recognized for excellence in training and producing industry-ready professionals.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About SCITS</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Building Digital Excellence Since Establishment
              </h1>
              <p className="text-lg text-muted-foreground">
                SCITS (Smart Computer Institute of Technology) is Ghaziabad's trusted destination for 
                quality computer education and professional skill development.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-foreground">{achievement.value}</p>
                    <p className="text-muted-foreground mt-2">{achievement.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                  Founded with a vision to make quality computer education accessible to everyone, SCITS has 
                  grown to become one of Ghaziabad's most trusted names in professional training. What started 
                  as a small initiative has now transformed thousands of lives, helping students and professionals 
                  achieve their career goals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our institute is equipped with modern infrastructure, including state-of-the-art computer labs, 
                  experienced faculty, and a curriculum that's constantly updated to match industry requirements. 
                  We don't just teach theory – we focus on practical, hands-on learning that prepares our students 
                  for real-world challenges.
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Industry-Relevant Curriculum</h4>
                      <p className="text-muted-foreground">
                        Our courses are designed in consultation with industry experts to ensure you learn 
                        skills that are in high demand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Small Batch Sizes</h4>
                      <p className="text-muted-foreground">
                        We maintain small class sizes to ensure every student gets personalized attention 
                        and guidance from trainers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Placement Support</h4>
                      <p className="text-muted-foreground">
                        We provide comprehensive job placement assistance, including resume building, 
                        interview preparation, and direct connections with hiring companies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Lifetime Support</h4>
                      <p className="text-muted-foreground">
                        Even after course completion, we remain available to answer your questions and 
                        provide guidance throughout your career.
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
