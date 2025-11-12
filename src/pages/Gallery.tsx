import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder for gallery images - these would be replaced with actual images
  const galleryItems = [
    { title: "Computer Lab", category: "Facilities" },
    { title: "Training Session", category: "Classes" },
    { title: "Graphic Design Workshop", category: "Workshops" },
    { title: "Certificate Distribution", category: "Events" },
    { title: "Networking Lab", category: "Facilities" },
    { title: "Excel Training", category: "Classes" },
    { title: "Student Projects", category: "Achievements" },
    { title: "Tally Workshop", category: "Workshops" },
    { title: "Modern Infrastructure", category: "Facilities" },
  ];

  const categories = ["All", "Facilities", "Classes", "Workshops", "Events", "Achievements"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Our Campus & Activities
              </h1>
              <p className="text-lg text-muted-foreground">
                Take a virtual tour of our modern facilities, training sessions, and student activities
              </p>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    index === 0
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-strong transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl text-primary-foreground">📸</span>
                        </div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center text-primary-foreground">
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-sm mt-1 opacity-90">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">
                Visit Our Institute
              </h2>
              <p className="text-lg text-muted-foreground">
                We welcome you to visit our campus and experience our state-of-the-art facilities firsthand. 
                Schedule a visit today and see why SCITS is the preferred choice for computer education in Ghaziabad.
              </p>
              <div className="pt-4">
                <a href="/contact" className="inline-block">
                  <button className="px-8 py-3 gradient-primary text-primary-foreground font-medium rounded-lg shadow-medium hover:shadow-strong transition-all">
                    Schedule a Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
