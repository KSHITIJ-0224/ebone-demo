import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eboneLogo from "@/assets/ebone-logo-generated.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              src={eboneLogo}
              alt="Ebone"
              className="h-32 md:h-40 w-auto"
              initial={{ filter: "brightness(0) invert(1)" }}
              animate={{ filter: "brightness(1) invert(0)" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 text-primary-foreground/80 text-lg tracking-widest uppercase font-light"
          >
            Men's Shirts
          </motion.p>

          {/* Loading Bar */}
          <motion.div
            className="absolute bottom-20 w-48 h-1 bg-primary-foreground/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
