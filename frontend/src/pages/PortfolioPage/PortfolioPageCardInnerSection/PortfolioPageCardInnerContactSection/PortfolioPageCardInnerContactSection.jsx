import { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import ContactImg from "../../../../assets/images/img-6.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { HiCheckCircle } from "react-icons/hi";
import { BsExclamationCircle } from "react-icons/bs";
import BE_URL from "../../../../config";
import axios from "axios";
import { useParams } from "react-router-dom";

const iconBg = "bg-[var(--color-logo-color)]";

const PortfolioPageCardInnerContactSection = () => {
  const { hotelName } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email_id: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [HotelContactDetails, setHotelContactDetails] = useState(null);
  const [FetchError, setFetchError] = useState(false);

  useEffect(() => {
    const FetchPortfolioContactSection = async () => {
      try {
        const hotelNameResponse = await axios.get(`${BE_URL}/hotelName`);
        const hotelList = hotelNameResponse.data.data;

        const matchedHotel = hotelList.find(
          (val) =>
            val.name.toLowerCase().replace(/\s+/g, "-") ===
            hotelName.toLowerCase()
        );

        if (!matchedHotel) {
          setFetchError(true);
          return;
        }

        // Fetch all hotelLocation data
        const locationListResponse = await axios.get(`${BE_URL}/hotelLocation`);
        const locationList = locationListResponse.data.data;

        const matchedLocation = locationList.find(
          (loc) => loc.hotel_id === matchedHotel.id && loc.deleted_at === 0
        );

        if (matchedLocation) {
          setHotelContactDetails(matchedLocation);
          setFetchError(false);
        } else {
          setFetchError(true);
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true);
      }
    };

    FetchPortfolioContactSection();
  }, [hotelName]);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email_id.trim()) {
      tempErrors.email_id = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      tempErrors.email_id = "Email is invalid";
    }
    if (!formData.number.trim()) tempErrors.number = "Phone number is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const payload = {
          ...formData,
          hotel_name: hotelName.replace(/-/g, " "),
        };

        const response = await axios.post(`${BE_URL}/hotelInquiry`, payload);

        if (response.status === 201 || response.status === 200) {
          setSubmitSuccess(true);
          setFormData({
            name: "",
            email_id: "",
            number: "",
            message: "",
          });
          setTimeout(() => setSubmitSuccess(false), 4000);
        }
      } catch (err) {
        console.error("Submission failed:", err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container mx-auto max-w-screen-xl py-20 md:px-10 px-0">
      <div className="heading-cont mb-10">
        <h1 className="text-2xl md:text-4xl font-serif text-gray-700 text-center">
          Feel Free to{" "}
          <span className="text-[var(--color-logo-color)] font-semibold">
            Contact
          </span>{" "}
          Us
        </h1>
      </div>

      <div className="w-full flex justify-center gap-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
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
                {HotelContactDetails?.email || "Not available"}
              </span>
            </div>
          </div>

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
                {HotelContactDetails?.number || "Not available"}
              </span>
            </div>
          </div>

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
                {HotelContactDetails?.address || "Not available"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-10  mt-10 items-center justify-center w-full ">
        <div className="contact-img flex-shrink-0 flex items-center justify-center mb-8 md:mb-0">
          <img
            src={ContactImg}
            alt="IMG"
            className="h-95 w-auto object-contain"
          />
        </div>

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
              />
              <TextField
                label="Your Email"
                name="email_id"
                variant="standard"
                size="small"
                fullWidth
                className="bg-white"
                value={formData.email_id}
                onChange={handleChange}
                error={!!errors.email_id}
                helperText={errors.email_id}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <TextField
                label="Phone Number"
                name="number"
                variant="standard"
                size="small"
                fullWidth
                className="bg-white"
                value={formData.number}
                onChange={handleChange}
                error={!!errors.number}
                helperText={errors.number}
              />
              <TextField
                label="Hotel Name"
                variant="standard"
                size="small"
                fullWidth
                className="bg-white"
                value={hotelName.replace(/-/g, " ")}
                disabled
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
