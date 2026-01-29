import { Award, Users, Clock, Truck, Heart, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Finest fabrics sourced from the best mills across India",
  },
  {
    icon: Users,
    title: "Expert Craftsmanship",
    description: "Skilled tailors with decades of experience",
  },
  {
    icon: Clock,
    title: "Timeless Designs",
    description: "Classic styles that never go out of fashion",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Fast and reliable shipping across India",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Dedicated support and hassle-free returns",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every shirt undergoes rigorous quality checks",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-2 mb-4">
              About Ebone
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crafting excellence in men's fashion since day one.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={heroImage}
                  alt="Ebone Fashion"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Text Content */}
            <div>
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Est. Mumbai
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                The Ebone Legacy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Ebone Men's Shirts</strong> is a 
                  premium men's fashion brand based in the heart of Mumbai. We are dedicated 
                  to crafting shirts that combine timeless elegance with modern comfort.
                </p>
                <p>
                  Under the umbrella of <strong className="text-foreground">Lucky Fashion</strong>, 
                  led by <strong className="text-foreground">M. Mahfooz</strong>, we have been 
                  serving discerning gentlemen with our exquisite collection of formal and 
                  casual shirts. Our commitment to quality and attention to detail sets us 
                  apart in the fashion industry.
                </p>
                <p>
                  Every Ebone shirt is crafted with precision, using premium fabrics 
                  that ensure comfort throughout the day while maintaining that 
                  impeccable look. From the boardroom to weekend outings, our shirts 
                  are designed to make you stand out.
                </p>
                <p>
                  Located in the vibrant Mahim area of Mumbai, we take pride in being 
                  a local brand with a vision to dress the modern Indian gentleman 
                  with style and sophistication.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-6 bg-secondary rounded-2xl">
                <p className="font-medium text-foreground mb-2">Visit Our Store</p>
                <p className="text-muted-foreground">
                  1st Floor, Plot No. 1, 6112, Navrang Compound,<br />
                  Mahim (E), Mumbai 400017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              The Ebone Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-2xl hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
