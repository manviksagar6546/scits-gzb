import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Ready to Start?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Join SCITS Today and Transform Your Career
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards mastering essential computer skills. Enroll now and get access to 
            expert trainers, practical learning, and industry-recognized certifications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary shadow-medium hover:shadow-strong transition-all group">
                Enroll Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <a href="tel:+911234567890">
              <Button size="lg" variant="outline" className="border-2">
                <Phone className="mr-2" size={20} />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto pt-8">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft">
              <Phone className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Call Us</p>
                <p className="font-semibold">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft">
              <Mail className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email Us</p>
                <p className="font-semibold">info@scitsghaziabad.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
