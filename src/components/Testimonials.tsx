import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Professional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The quality of Ebone shirts is exceptional. I've been buying from them for 2 years now and every shirt feels premium. The fabric is comfortable even in Mumbai's humidity.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Sharma",
    role: "Corporate Executive",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Best men's shirts in Mumbai! The fit is perfect and the designs are classy. Mahfooz bhai always helps me pick the right ones. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "I ordered via WhatsApp and the service was amazing. Quick response, great prices, and the delivery was fast. The shirts look exactly as shown!",
    rating: 5,
  },
  {
    id: 4,
    name: "Sanjay Mehta",
    role: "Doctor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    content: "As someone who wears formal shirts daily, finding Ebone was a blessing. Comfortable, durable, and stylish. My go-to brand now.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            What Our Customers Say
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Customer Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers 
            have to say about their Ebone experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 bg-secondary rounded-2xl hover:shadow-card transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-ebone-gold fill-ebone-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-secondary rounded-xl">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">1000+</p>
            <p className="text-muted-foreground text-sm mt-1">Happy Customers</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">5★</p>
            <p className="text-muted-foreground text-sm mt-1">Average Rating</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">100%</p>
            <p className="text-muted-foreground text-sm mt-1">Quality Assured</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">Pan India</p>
            <p className="text-muted-foreground text-sm mt-1">Delivery Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
