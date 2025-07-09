import { motion } from "framer-motion";
import image1 from "../../../assets/images/5.jpg";
import image2 from "../../../assets/images/4.jpg";

const HomePageAboutUsSection = () => {
  const AboutDetails = [
    {
      para: "Positive Hospitality is a top-notch owner-operator model management company in the hospitality industry. We understand that the hospitality industry is highly competitive, so we focus on providing personalized solutions tailored to each of our investors and partners' specific needs. Our services include customer satisfaction and excellent Guest stay experience.",
      image: image1,
    },
    {
      para: "Positive Hospitality is a top-notch owner-operator model management company in the hospitality industry. We understand that the hospitality industry is highly competitive, so we focus on providing personalized solutions tailored to each of our investors and partners' specific needs. Our services include customer satisfaction and excellent Guest stay experience.",
      image: image2,
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <div className="text-center ">
          <motion.h1
            className="text-2xl font-bold text-gray-900 md:text-5xl sm:text-3xl mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome To{" "}
            <span className="text-[var(--color-logo-color)]">
              Positive Hospitality
            </span>
          </motion.h1>
          <motion.div
            className="mx-auto h-1 w-50 bg-[var(--color-footer-color)] rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="space-y-20">
          {AboutDetails.map((val, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <>
                <motion.div
                  className={`flex flex-col-reverse ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-12 items-center`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={idx}
                >
                  <div className="lg:w-1/2 w-full flex flex-col gap-5">
                    <div className="bg-white p-8 rounded-xl shadow-lg h-full flex items-center">
                      <p className="text-gray-700 font-semibold text-lg leading-relaxed text-justify">
                        {val.para}
                      </p>
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

                  <div className="lg:w-1/2 w-full">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={val.image}
                        alt="Positive Hospitality"
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePageAboutUsSection;
