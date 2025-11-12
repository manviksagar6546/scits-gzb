import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  TrendingUp,
  Calculator,
  Palette,
  Network,
  ArrowRight,
} from "lucide-react";
import "./CoursesSection.scss";

const CoursesSection = () => {
  const courses = [
    {
      icon: Monitor,
      title: "Basic Computer Course",
      description:
        "Master fundamentals including Typing, MS Paint, Word, Excel, PowerPoint, and Access",
      features: [
        "Complete MS Office",
        "Typing Skills",
        "Internet Basics",
        "Email Management",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Advanced Excel",
      description:
        "Become an Excel expert with advanced formulas, data analysis, and automation",
      features: [
        "VLOOKUP & Pivot Tables",
        "Advanced Formulas",
        "Data Analysis",
        "Macros & VBA",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Calculator,
      title: "Tally Course (Basic & Advanced)",
      description:
        "Complete accounting software training from basics to advanced features",
      features: [
        "GST Compliance",
        "Payroll Management",
        "Financial Reports",
        "Tally Prime",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "Graphic Design Basics",
      description:
        "Learn professional design tools to create stunning graphics and logos",
      features: [
        "CorelDRAW",
        "Adobe Photoshop",
        "Logo Design",
        "Banner Creation",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Network,
      title: "Networking for CCNA",
      description:
        "Prepare for CCNA certification with hands-on networking training",
      features: [
        "IP Addressing",
        "Routing Protocols",
        "Network Setup",
        "Cisco IOS",
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Professional Training Programs
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our wide range of industry-relevant courses designed to
            boost your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card delay-${index}`}
            >
              <div className="p-6 space-y-4">
                {/* Icon with gradient background */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <course.icon className="w-7 h-7 text-white" />
                </div>

                {/* Course Title & Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-2">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link to="/courses">
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn mt-4"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link to="/courses">
            <Button
              size="lg"
              className="gradient-primary shadow-medium hover:shadow-strong transition-all"
            >
              View All Courses
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
