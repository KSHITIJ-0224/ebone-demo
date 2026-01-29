import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const whatsappNumber = "919870076043";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in Ebone Men's Shirts. Can you help me with my order?"
  );

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ebone Men's Shirts"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4">
        <div className="max-w-2xl">
          <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm animate-fade-up">
            Premium Men's Fashion
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Elevate Your <br />
            <span className="text-accent">Style</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover the finest collection of men's shirts crafted with precision 
            and designed for the modern gentleman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
            <Link
              to="/products"
              className="px-6 py-3 rounded-full border-2 border-primary-foreground/30 
                       text-primary-foreground font-medium hover:bg-primary-foreground/10 
                       transition-all duration-300 text-center"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-2xl">
          <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm animate-fade-up">
            New Season Essentials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Crisp Shirts for
            <span className="text-accent"> Formal & Casual</span> Moments
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover lighter fabrics, sharper fits, and subtle textures built for everyday comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/products"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 text-center"
            >
              Browse New Arrivals
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hi! I'd like to see the latest Ebone shirt collection."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border-2 border-primary/20 text-primary font-medium hover:bg-primary/10 transition-all duration-300 text-center"
            >
              Get Style Advice
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
