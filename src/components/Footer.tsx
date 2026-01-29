import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import eboneLogo from "@/assets/ebone-logo-generated.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={eboneLogo} 
              alt="Ebone Men's Shirts" 
              className="h-20 w-auto object-contain bg-primary-foreground rounded-lg p-2 mb-4"
            />
            <p className="text-primary-foreground/80 max-w-md mb-4">
              Premium men's shirts crafted with excellence. Experience the perfect 
              blend of comfort and style with Ebone.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/eboneshirts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center 
                         hover:bg-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ebonejeans@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center 
                         hover:bg-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+91 98700 76043</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>ebonejeans@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Mahim (E), Mumbai 400017</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Ebone Men's Shirts. A brand by Lucky Fashion. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Owner: M. Mahfooz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
