import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import ContactImg from "../../../../assets/images/img-6.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { HiCheckCircle } from "react-icons/hi";
import { BsExclamationCircle } from "react-icons/bs";

const iconBg = "bg-[var(--color-logo-color)]";

const PortfolioPageCardInnerContactSection = () => {
  // --- FORM STATE & VALIDATION LOGIC FROM REFERENCE CODE ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
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
        // Simulate form submission
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 4000);
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto max-w-screen-xl py-20 md:px-10 px-0">
      {/* Heading Section */}
      <div className="heading-cont mb-10">
        <h1 className="text-2xl md:text-4xl font-serif text-gray-700 text-center">
          Feel Free to{" "}
          <span className="text-[var(--color-logo-color)] font-semibold">
            Contact
          </span>{" "}
          Us
        </h1>
      </div>
      {/* Flex Card Section */}
      <div className="w-full flex justify-center gap-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Mail Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-8 py-6 flex items-center ">
            <div
              className={`rounded-full h-12 w-12 flex items-center justify-center mr-5 ${iconBg}`}
            >
              <CiMail size={30} className="text-white font-semibold" />
            </div>
            <div className="flex flex-col w-fit">
              <span className="text-blue-500 text-base font-semibold leading-tight">
                Drop a line
              </span>
              <span className="text-black font-bold text-xl leading-tight mb-1">
                Mail Us
              </span>
              <span className="text-gray-700 text-sm mt-2">
                Contact 123@gmail.com
              </span>
            </div>
          </div>
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-8 py-6 flex items-center ">
            <div
              className={`rounded-full h-12 w-12 flex items-center justify-center mr-5 ${iconBg}`}
            >
              <FiPhone size={25} className="text-white " />
            </div>
            <div className="flex flex-col w-fit">
              <span className="text-blue-500 text-base font-semibold leading-tight">
                24/7 Service
              </span>
              <span className="text-black font-bold text-xl leading-tight mb-1">
                Call Us
              </span>
              <span className="text-gray-700 text-sm mt-2">
                +45357 29632 32621
              </span>
            </div>
          </div>
          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-8 py-6 flex items-center ">
            <div
              className={`rounded-full h-12 w-12 flex items-center justify-center mr-5 ${iconBg}`}
            >
              <CiLocationOn size={30} className="text-white" />
            </div>
            <div className="flex flex-col w-fit">
              <span className="text-blue-500 text-base font-semibold leading-tight">
                Location
              </span>
              <span className="text-black font-bold text-xl leading-tight mb-1">
                Visit Us
              </span>
              <span className="text-gray-700 text-sm mt-2">
                158, raleigh sit, houston, yk 2446, uk
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row gap-10 p-10  mt-10 items-center justify-center w-full ">
        {/* Image Section */}
        <div className="contact-img flex-shrink-0 flex items-center justify-center mb-8 md:mb-0">
          <img
            src={ContactImg}
            alt="IMG"
            className="h-95 w-auto object-contain"
          />
        </div>
        {/* Form */}
        <div className="flex-1 w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">
            Send your{" "}
            <span className="text-[var(--color-logo-color)]">
              Message To Us
            </span>
          </h2>
          {submitSuccess && (
            <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center">
                <HiCheckCircle className="h-5 w-5 text-green-400" />
                <div className="ml-3">
                  <p className="text-sm text-green-700 font-semibold">
                    Message sent successfully!
                  </p>
                </div>
              </div>
            </div>
          )}
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <TextField
                label="Your Full Name"
                name="name"
                variant="standard"
                size="small"
                fullWidth
                className="bg-white"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  endAdornment: errors.name ? (
                    <BsExclamationCircle className="text-red-500" />
                  ) : null,
                }}
              />
              <TextField
                label="Your Email"
                name="email"
                variant="standard"
                size="small"
                fullWidth
                className="bg-white"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  endAdornment: errors.email ? (
                    <BsExclamationCircle className="text-red-500" />
                  ) : null,
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <TextField
                label="Phone Number"
                name="phone"
                variant="standard"
                size="small"
                fullWidth
                className="bg-white"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  endAdornment: errors.phone ? (
                    <BsExclamationCircle className="text-red-500" />
                  ) : null,
                }}
              />
              <TextField
                label="Subject"
                name="subject"
                variant="standard"
                size="small"
                fullWidth
                className="bg-white"
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                InputProps={{
                  endAdornment: errors.subject ? (
                    <BsExclamationCircle className="text-red-500" />
                  ) : null,
                }}
              />
            </div>
            <TextField
              label="Your Message Here..."
              name="message"
              variant="standard"
              size="small"
              fullWidth
              multiline
              rows={4}
              className="bg-white"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              InputProps={{
                endAdornment: errors.message ? (
                  <BsExclamationCircle className="text-red-500" />
                ) : null,
              }}
            />
            <div className="flex justify-end">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                className={`!bg-blue-600 !text-white !py-3 !rounded-lg !mt-2 hover:!bg-blue-700 transition-all w-50 duration-200 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
                endIcon={
                  isSubmitting && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                  )
                }
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPageCardInnerContactSection;
