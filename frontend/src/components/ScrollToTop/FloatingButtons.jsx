/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href="tel:+1234567890" // Replace with your phone number
        target="_blank"
        rel="noopener noreferrer"
        className="call-button flex items-center justify-center"
      >
        <FaPhoneAlt size={28} color="#ffffff" />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="phone-call flex items-center justify-center"
      >
        <FaWhatsapp size={36} color="#ffffff" />
      </a>
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="go-top-btn"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
