/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import hotelData from "../hotelData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const PortfolioPageCardsSection = () => {
  const [age, setAge] = useState("ALL");

  const HandleOnChangeSelector = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();

  const hotels = Object.entries(hotelData).map(([slug, hotel]) => ({
    slug,
    ...hotel,
  }));

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4"
            variants={item}
          >
            Positive Hospitality Portfolio
          </motion.h2>
          <motion.p
            className="text-lg md:text-lg text-gray-600 max-w-6xl mx-auto"
            variants={item}
          >
            Our portfolio highlights hotels that prioritize guest satisfaction,
            provide exceptional service and amenities, and embrace their local
            surroundings while also prioritizing sustainability.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex justify-end p-5"
        >
          {/* <FormControl variant="filled" sx={{ minWidth: 160 }}>
            <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={HandleOnChangeSelector}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Upcoming</MenuItem>
              <MenuItem value={30}>Running</MenuItem>
            </Select>
          </FormControl> */}

          <FormControl className="w-50">
            <InputLabel id="Status-select-label">Status</InputLabel>
            <Select
              labelId="Status-select-label"
              id="Status"
              value={age}
              label="Status"
              name="Status"
              onChange={HandleOnChangeSelector}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              <MenuItem value="ALL" selected>
                All
              </MenuItem>
              {["UpComing", "Running"].map((val, index) => (
                <MenuItem key={index} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col h-full"
              onClick={() => navigate(`/portfolio/${hotel.slug}`)}
            >
              <div className="h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.displayName}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 mt-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {hotel.displayName}
                </h3>
                <p className="text-gray-600">{hotel.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPageCardsSection;
