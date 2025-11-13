import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import "./Gallery.scss";

const Gallery = () => {
  const galleryItems = [
    { title: "Computer Lab", img: "/Images/gallery1.jpg" },
    { title: "Training Session", img: "/Images/gallery2.jpg" },
    { title: "Workshop Session", img: "/Images/gallery3.jpg" },
    { title: "Certificate Distribution", img: "/Images/gallery4.jpg" },
    { title: "Networking Lab", img: "/Images/gallery5.jpg" },
    { title: "Student Projects", img: "/Images/gallery6.jpg" },
    { title: "Tally Workshop", img: "/Images/gallery7.jpg" },
    { title: "Modern Infrastructure", img: "/Images/gallery8.jpg" },
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      {/* logo image */}
            <img src="/public/Images/bannergallery.png" alt="SCITS Logo" className="navbar__image" />
      <main className="gallery-main">
        <h1 className="gallery-heading">Gallery</h1>

        <section className="gallery-section">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <Card key={index} className="gallery-card">
                <div className="image-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
