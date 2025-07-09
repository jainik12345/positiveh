import { motion } from "framer-motion";

const HomePageInfoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
        <div className="text-center">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-800 mb-6 relative inline-block ">
            Our Team
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 transform translate-y-2"></span> */}
            <motion.div
              className="mx-auto h-1 w-30 bg-[var(--color-logo-color)] rounded-full mt-3"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h1>

          <p className="md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto">
            Positive Hospitality is dedicated to making a positive impact on the
            world
          </p>
        </div>

        <div className="">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--color-footer-color)]  border-r-4 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify font-[500]">
              We provide exceptional hotel management services through an
              owner-operator model. We strive to create a culture of hospitality
              that inspires our team members to provide superior service to our
              guests. We aim to maximize the value of our investor's investments
              through effective management, revenue optimization, and
              operational excellence. Focusing on continuous improvement,
              innovation, and sustainability, we are committed to delivering
              memorable experiences that exceed our guests' expectations while
              creating long-term value for our investors.{" "}
            </p>
          </div>

          {/* <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--color-logo-color)]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              We provide exceptional hotel management services through an
              owner-operator model. We strive to create a culture of hospitality
              that inspires our team members to provide superior service to our
              guests. We aim to maximize the value of our investor's investments
              through effective management, revenue optimization, and
              operational excellence. Focusing on continuous improvement,
              innovation, and sustainability, we are committed to delivering
              memorable experiences that exceed our guests' expectations while
              creating long-term value for our investors.{" "}
            </p>
          </div> */}
        </div>
        <button className="relative w-50 px-8 py-3 cursor-pointer bg-black text-white font-bold rounded-lg overflow-hidden group ">
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          <span className="relative z-10 flex items-center gap-2">
            <span>Know More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        </button>
      </div>
    </section>
  );
};

export default HomePageInfoSection;
