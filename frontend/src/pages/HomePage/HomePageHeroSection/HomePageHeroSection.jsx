import { motion } from "framer-motion";
import BgImg from "../../../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const HomePageHeroSection = () => {
  const navigate = useNavigate();
  const HandleOnclick = () => {
    navigate("/contact-us");
  };

  return (
    <div
      className="hero-section relative h-[600px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {/* ...SVGs and overlays... */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        height="80"
        viewBox="0 0 1440 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ zIndex: 2 }}
      >
        <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#fff" />
      </svg>
      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,17,34,0.65) 50%, rgba(14,17,34,0.82) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center  "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-bold mb-4 text-gray-100 font-(family-name:--font-navbar-font)"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Positive Hospitality
        </motion.h1>
        <motion.p
          className="text-xl mb-6 text-gray-300 font-(family-name:--font-navbar-font)"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Creating unforgettable experiences through exceptional service.
        </motion.p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold shadow-lg cursor-pointer  transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          onClick={HandleOnclick}
        >
          GET STARTED NOW!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomePageHeroSection;
