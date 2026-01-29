import { useMemo, useState, FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";

const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["White", "Sky Blue", "Navy", "Pink", "Charcoal", "Beige"];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = useMemo(
    () => products.find((item) => item.id === Number(productId)),
    [productId]
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    size: sizes[1],
    color: colors[0],
    quantity: 1,
    notes: "",
  });

  const whatsappNumber = "919870076043";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!product) {
      return;
    }

    const message = encodeURIComponent(
      `New Order Request:%0A%0AProduct: ${product.name}%0APrice: ${product.price}%0ASize: ${formData.size}%0AColor: ${formData.color}%0AQuantity: ${formData.quantity}%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0A%0ANotes: ${formData.notes || "-"}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container-custom px-4 text-center">
            <p className="text-muted-foreground">Product not found.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-6 text-accent font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to products
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom px-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to products
          </Link>
          <div className="mt-6 text-center">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Product Details
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
              {product.name}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-secondary rounded-3xl p-6 md:p-10 shadow-card">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-medium text-foreground capitalize">
                    {product.category}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className="text-3xl font-bold text-accent">{product.price}</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-3xl p-6 md:p-10">
              <h2 className="text-2xl font-display font-semibold text-foreground">
                Place your order
              </h2>
              <p className="text-muted-foreground mt-2">
                Share your details and we will confirm availability on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      className="input-field"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData({ ...formData, name: event.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      className="input-field"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData({ ...formData, phone: event.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="input-field resize-none"
                    placeholder="House no, street, city, pin code"
                    value={formData.address}
                    onChange={(event) =>
                      setFormData({ ...formData, address: event.target.value })
                    }
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Size *
                    </label>
                    <select
                      className="input-field"
                      value={formData.size}
                      onChange={(event) =>
                        setFormData({ ...formData, size: event.target.value })
                      }
                    >
                      {sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Color *
                    </label>
                    <select
                      className="input-field"
                      value={formData.color}
                      onChange={(event) =>
                        setFormData({ ...formData, color: event.target.value })
                      }
                    >
                      {colors.map((color) => (
                        <option key={color} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Quantity *
                    </label>
                    <input
                      type="number"
                      min={1}
                      className="input-field"
                      value={formData.quantity}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          quantity: Number(event.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Notes (optional)
                  </label>
                  <textarea
                    rows={3}
                    className="input-field resize-none"
                    placeholder="Any special requests"
                    value={formData.notes}
                    onChange={(event) =>
                      setFormData({ ...formData, notes: event.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-whatsapp text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetailPage;
