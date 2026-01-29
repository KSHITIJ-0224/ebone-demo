import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "919870076043";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in Ebone Men's Shirts. Please help me with my inquiry."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp text-primary-foreground 
               rounded-full shadow-lg hover:shadow-xl hover:scale-110 
               transition-all duration-300 flex items-center justify-center
               animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" fill="currentColor" />
      
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
