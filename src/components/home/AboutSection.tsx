import { Target, Heart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide practical, job-oriented computer training in a friendly environment",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Quality education, individual attention, and student success are our priorities",
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description: "Building confident professionals ready for the digital workplace",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About SCITS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Empowering Students Since Establishment
          </h2>
          <p className="text-muted-foreground text-lg">
            SCITS (Smart Computer Institute of Technology, Ghaziabad) is a trusted name in computer education, 
            helping students and professionals learn essential digital skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-soft p-8 md:p-12 animate-fade-in">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              At SCITS, we believe that everyone deserves access to quality computer education. Whether you're 
              a student looking to build a strong foundation, a professional seeking to upgrade your skills, or 
              someone wanting to start a new career in technology, we have the right course for you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our experienced trainers bring real-world expertise to the classroom, ensuring that every student 
              gains not just theoretical knowledge but practical skills they can apply immediately. With 
              affordable fees, flexible timings, and recognized certifications, SCITS is your partner in 
              achieving digital excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
