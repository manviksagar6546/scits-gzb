import { Award, Users, DollarSign, FileCheck, Briefcase, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Experienced Trainers",
      description: "Learn from industry experts with years of practical teaching experience",
    },
    {
      icon: Award,
      title: "Practical Learning",
      description: "Hands-on training with real-world projects and live assignments",
    },
    {
      icon: DollarSign,
      title: "Affordable Fees",
      description: "Quality education at competitive prices with flexible payment options",
    },
    {
      icon: FileCheck,
      title: "Recognized Certificate",
      description: "Industry-recognized certifications to boost your career prospects",
    },
    {
      icon: Briefcase,
      title: "Job Guidance",
      description: "Career counseling and placement support for all students",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Multiple batch timings to suit working professionals and students",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            What Makes SCITS Special
          </h2>
          <p className="text-muted-foreground text-lg">
            We're committed to providing the best learning experience and ensuring your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
