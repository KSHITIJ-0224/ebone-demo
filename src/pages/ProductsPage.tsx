import { Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";

const categories = [
  { id: "all", name: "All Shirts" },
  { id: "formal", name: "Formal" },
  { id: "casual", name: "Casual" },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Our Collection
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-2 mb-4">
              Premium Men's Shirts
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked collection of premium shirts designed for 
              comfort, style, and the modern man's lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="card-product group">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground 
                                 text-xs font-medium rounded-full capitalize">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {product.price}
                    </span>
                    <span
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground 
                               rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300"
                    >
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Tap any product to open its detail page and place your order.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;
