import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { BsExclamationCircle } from "react-icons/bs";

const ContactUsPageContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim())
      tempErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Form Submitted:", formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ fullName: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -bottom-8 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 right-20 w-24 h-24 bg-pink-100 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10">
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <p className="mb-8 text-blue-100">
              Have questions or want to discuss a project? Fill out the form and
              we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3 text-white">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Call us</h3>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3 text-white">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email us</h3>
                  <p className="text-blue-100">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3 text-white">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Visit us</h3>
                  <p className="text-blue-100">
                    123 Business Ave, Suite 400 San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 transition duration-300"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 transition duration-300"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 transition duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 transition duration-300"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-400 rounded-full p-2 transition duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 p-8 md:p-10">
            {submitSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <HiCheckCircle className="h-5 w-5 text-green-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Message sent successfully!
                    </h3>
                    <p className="mt-2 text-sm text-green-700">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["fullName", "email", "subject", "message"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1 capitalize"
                  >
                    {field === "fullName"
                      ? "Full Name"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div className="relative">
                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-lg border ${
                          errors[field]
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        } shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                        placeholder={
                          field === "fullName"
                            ? "John Doe"
                            : field === "email"
                            ? "you@example.com"
                            : field === "subject"
                            ? "How can we help?"
                            : ""
                        }
                      />
                    ) : (
                      <textarea
                        id={field}
                        name={field}
                        rows="5"
                        value={formData[field]}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 rounded-lg border ${
                          errors[field]
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        } shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                        placeholder="Tell us more about your needs..."
                      />
                    )}
                    {errors[field] && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <BsExclamationCircle className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors[field] && (
                    <p className="mt-2 text-sm text-red-600">{errors[field]}</p>
                  )}
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactUsPageContactFormSection;
