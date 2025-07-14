import axios from "axios";
import BE_URL from "../../../config";
import { useState } from "react";

const ContactUsPageFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      setIsSubmitting(true);

      // POST request
      await axios.post(`${BE_URL}/contact-form`, {
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitSuccess(true); // Show success message
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true); // Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-10 flex lg:flex-row flex-col gap-5">
      {/* Contact Form Section */}
      <div className="contact-form-section lg:w-1/2 w-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white space-y-4"
        >
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-600">
            Feel free to ask for details, don't save any questions!
          </p>

          {/* Success Message */}
          {submitSuccess && (
            <div className="text-green-600 font-medium">
              ✅ Your message has been sent successfully!
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="text-red-600 font-medium">
              ❌ Failed to send message. Please try again later.
            </div>
          )}

          {/* Full Name and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold px-6 py-2 rounded-lg transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="lg:w-1/2 w-full lg:h-auto h-100">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d305.16908716820365!2d-84.46220171230118!3d33.44921638909057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4ee4b2b821a49%3A0x2c33c4089eb325d8!2s110%20Meeting%20Pl%20Dr%2C%20Fayetteville%2C%20GA%2030214%2C%20USA!5e1!3m2!1sen!2sin!4v1752488236181!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPageFormSection;
