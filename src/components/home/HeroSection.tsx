import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import "./HeroSection.scss";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Students Trained", value: "5000+" },
    { icon: Award, label: "Certified Courses", value: "15+" },
    { icon: BookOpen, label: "Expert Trainers", value: "20+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Computer Education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Welcome to SCITS Ghaziabad
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Computer Education
              </span>{" "}
              and Career Growth
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Master essential digital skills with practical, job-oriented
              training at Ghaziabad's trusted computer institute. Start your
              journey towards a successful tech career today.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="gradient-primary shadow-medium hover:shadow-strong transition-all group"
                >
                  Enroll Now
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:border-primary"
                >
                  Explore Courses
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`space-y-2 animate-scale-in delay-${index}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image visible on larger screens */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
