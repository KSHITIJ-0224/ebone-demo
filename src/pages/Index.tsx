import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import { MessageCircle, ArrowRight } from "lucide-react";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productShirt2 from "@/assets/product-shirt-2.jpg";
import productShirt3 from "@/assets/product-shirt-3.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Classic White Formal",
    price: "₹1,299",
    image: productShirt1,
  },
  {
    id: 2,
    name: "Sky Blue Oxford",
    price: "₹1,499",
    image: productShirt2,
  },
  {
    id: 3,
    name: "Navy Blue Executive",
    price: "₹1,599",
    image: productShirt3,
  },
];

const Index = () => {
  const whatsappNumber = "919870076043";

  const handleOrderClick = (productName: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering the "${productName}" from Ebone. Please share the details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured Products Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Featured Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              Best Sellers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card-product group">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {product.price}
                    </span>
                    <button
                      onClick={() => handleOrderClick(product.name)}
                      className="flex items-center gap-2 px-4 py-2 bg-whatsapp text-primary-foreground 
                               rounded-full text-sm font-medium hover:brightness-110 transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                       rounded-full font-medium hover:opacity-90 transition-all duration-300"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Details */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                The Ebone Standard
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                Tailored for the Indian Gentleman
              </h2>
              <p className="text-muted-foreground mb-6">
                Every shirt is designed with breathable fabrics, sharp collars, and a silhouette
                that complements Indian body types. From the stitching to the finish, we focus
                on comfort that lasts all day.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Premium Fabrics", desc: "100% cotton and easy-care blends." },
                  { title: "Modern Fits", desc: "Slim and classic options for every build." },
                  { title: "Refined Details", desc: "Signature buttons and crisp cuffs." },
                  { title: "Bulk Ready", desc: "Corporate and event orders supported." },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-secondary rounded-2xl">
                    <p className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-3xl p-8 shadow-card">
              <div className="space-y-6">
                {[
                  { label: "City-ready fits", value: "Made for Mumbai humidity" },
                  { label: "Easy exchange", value: "Size swap assistance" },
                  { label: "Trusted by boutiques", value: "10+ years of credibility" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary/95 to-primary/80">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Exclusive Drops
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mt-2 mb-6">
                Limited Styles, Faster Delivery
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Get first access to new fabrics, seasonal colors, and wholesale offers.
                Tap below to chat with our team and reserve your sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hi! I'd like to know about the latest Ebone shirt drops and offers."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reserve on WhatsApp
                </a>
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-full border-2 border-primary-foreground/40 
                           text-primary-foreground font-medium hover:bg-primary-foreground/10 
                           transition-all duration-300 text-center"
                >
                  Explore New Arrivals
                </Link>
              </div>
            </div>
            <div className="bg-primary-foreground/10 rounded-3xl p-8 border border-primary-foreground/20">
              <div className="space-y-6 text-primary-foreground">
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary-foreground/70">WhatsApp Support</p>
                  <p className="text-2xl font-display font-semibold">Order in under 2 minutes</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-primary-foreground/10 rounded-2xl p-4">
                    <p className="text-primary-foreground/70">Dispatch</p>
                    <p className="font-semibold">24-48 hrs</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-2xl p-4">
                    <p className="text-primary-foreground/70">Support</p>
                    <p className="font-semibold">Mon-Sat</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-2xl p-4">
                    <p className="text-primary-foreground/70">Wholesale</p>
                    <p className="font-semibold">MOQ 12 pcs</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-2xl p-4">
                    <p className="text-primary-foreground/70">Delivery</p>
                    <p className="font-semibold">Pan India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                About Ebone
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
                Crafting Excellence
              </h2>
              <p className="text-muted-foreground mb-6">
                <strong className="text-foreground">Ebone Men's Shirts</strong> is a 
                premium men's fashion brand based in Mumbai. Under Lucky Fashion, 
                we craft shirts that blend timeless elegance with modern comfort.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <p className="text-3xl font-display font-bold text-accent">1000+</p>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <p className="text-3xl font-display font-bold text-accent">5★</p>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <p className="text-3xl font-display font-bold text-accent">100%</p>
                <p className="text-muted-foreground text-sm">Quality Assured</p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <p className="text-3xl font-display font-bold text-accent">Pan India</p>
                <p className="text-muted-foreground text-sm">Delivery</p>
              </div>
            </div>
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

export default Index;
