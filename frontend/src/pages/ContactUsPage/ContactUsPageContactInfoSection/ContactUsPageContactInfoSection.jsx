import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import BE_URL from "../../../config";
import { useState, useEffect } from "react";

const ContactUsPageContactInfoSection = () => {
  const [FetchError, setFetchError] = useState(false);
  const [ContactDetails, setContactDetails] = useState([]);

  useEffect(() => {
    const ContactUsAddressAPI = async () => {
      try {
        const Response = await axios.get(`${BE_URL}/contact-data-details`);
        const FetchedResponse = Response.data.data;

        if (Response.status === 200 && FetchedResponse.length > 0) {
          if (typeof FetchedResponse === "string") {
            const tmp = JSON.parse(FetchedResponse[0]);
            setContactDetails(tmp);
            setFetchError(false);
          } else {
            setContactDetails(FetchedResponse[0]);
            setFetchError(false);
          }
        } else {
          setFetchError(true);
        }
      } catch (error) {
        console.error("Failed to fetch contact details:", err);
        setFetchError(true);
      }
    };

    ContactUsAddressAPI();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-between items-center ">
      <div className="contact-info-container flex flex-col justify-center items-center mx-auto gap-5 p-10">
        <div className="location-icon text-center flex flex-col gap-5 justify-center items-center">
          <IoLocationOutline size={50} className="text-blue-500" />
          <p className="font-semibold text-lg text-gray-500">Our Address</p>
        </div>

        {/* Display error message if fetch fails */}
        {FetchError ? (
          <p className="text-red-500 font-medium">
            Failed to load contact details. Please try again later.
          </p>
        ) : (
          <div className="location-details font-bold text-xl text-center w-90">
            <p>{ContactDetails.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUsPageContactInfoSection;
