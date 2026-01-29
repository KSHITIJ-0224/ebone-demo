import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Instagram, Send, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Open WhatsApp with the form message
    const whatsappNumber = "919870076043";
    const message = encodeURIComponent(
      `New Inquiry from Website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly via WhatsApp.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 98700 76043",
      subValue: "M. Mahfooz (Owner)",
      href: "tel:+919870076043",
    },
    {
      icon: Phone,
      label: "Alternate Numbers",
      value: "+91 72579 23672",
      subValue: "+91 91995 80386",
      href: "tel:+917257923672",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ebonejeans@gmail.com",
      subValue: "We reply within 24 hours",
      href: "mailto:ebonejeans@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@eboneshirts",
      subValue: "Follow for latest updates",
      href: "https://instagram.com/eboneshirts",
    },
    {
      icon: MapPin,
      label: "Store Address",
      value: "1st Floor, Plot No. 1, 6112",
      subValue: "Navrang Compound, Mahim (E), Mumbai 400017",
      href: "https://maps.google.com/?q=Navrang+Compound+Mahim+Mumbai+400017",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Monday - Saturday",
      subValue: "10:00 AM - 8:00 PM",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or want to place a bulk order? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-secondary p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you via WhatsApp.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="input-field"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="input-field"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input-field"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="input-field"
                      placeholder="e.g., Bulk Order Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent text-accent-foreground font-medium rounded-full 
                           hover:opacity-90 transition-all duration-300 disabled:opacity-50 
                           flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>

              {/* Quick WhatsApp */}
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">Or reach us directly on WhatsApp</p>
                <a
                  href="https://wa.me/919870076043?text=Hello!%20I%20have%20a%20question%20about%20Ebone%20shirts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-5 bg-secondary rounded-xl hover:shadow-card 
                             transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center 
                                  group-hover:bg-accent transition-colors duration-300 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                      {info.subValue && (
                        <p className="text-sm text-muted-foreground">{info.subValue}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Embed */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5889!2d72.8450!3d19.0450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzQyLjAiTiA3MsKwNTAnNDIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ebone Store Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
