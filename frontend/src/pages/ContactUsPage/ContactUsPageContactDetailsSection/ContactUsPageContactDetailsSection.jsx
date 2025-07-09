/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const ContactUsPageContactDetailsSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-[var(--color-logo-color)]">
              Touch
            </span>{" "}
            With Us
          </h1>
          <p className="md:text-xl text-md text-gray-600 ">
            We're here to help you plan your perfect journey. Reach out to us
            through any of these channels.
          </p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5938.456993322024!2d-84.462223!3d33.449212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4ee4b2b821a49%3A0x2c33c4089eb325d8!2s110%20Meeting%20Pl%20Dr%2C%20Fayetteville%2C%20GA%2030214%2C%20USA!5e1!3m2!1sen!2sin!4v1751894279520!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full filter hover:grayscale-0 grayscale-[0.2] transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsPageContactDetailsSection;
