// src/data/hotelData.js
import hamptonInnImage from "../../assets/images/home_image_slider_2.webp";
import home2SuitesImage from "../../assets/images/home_image_slider_3.webp";
import townplaceSuitesImage from "../../assets/images/home_image_slider_2.webp";
import trubyHiltonImage from "../../assets/images/home_image_slider_3.webp";
import hamptonInnPeachtreeImage from "../../assets/images/home_image_slider_2.webp";

const hotelData = {
  "hampton-inn": {
    displayName: "Hampton Inn",
    image: hamptonInnImage,
    overview:
      "Hampton Inn in Fayetteville, GA provides travelers with clean, comfortable accommodations and exceptional service. Located near major attractions and dining.",
    amenities: [
      "🛏️ Comfortable Rooms",
      "📶 High-Speed WiFi",
      "🍽️ Complimentary Hot Breakfast",
      "🅿️ Free Parking",
      "📶 High-Speed WiFi",
    ],
  },
  "home-2-suites": {
    displayName: "Home 2 Suites",
    image: home2SuitesImage,
    overview:
      "Modern extended stay hotel with eco-friendly features. Home 2 Suites offers studio-style rooms with full kitchens and pet-friendly options.",
    amenities: [
      "🏋️‍♂️ Fitness Center",
      "🛏️ Comfortable Rooms",
      "📶 High-Speed WiFi",
      "🍽️ Complimentary Hot Breakfast",
    ],
  },
  "town-place-suites": {
    displayName: "Town Place Suites",
    image: townplaceSuitesImage,
    overview:
      "Town Place Suites in Rowery Branch, GA provides a comfortable long-term stay with spacious suites and homelike amenities.",
    amenities: [
      "🛏️ Spacious Suites",
      "🍳 In-Room Kitchens",
      "📶 Free WiFi"
    ],
  },
  "truby-hilton": {
    displayName: "Truby Hilton",
    image: trubyHiltonImage,
    overview:
      "A vibrant, modern hotel experience located in Columbus, OH. Truby Hilton combines style with affordability for today’s traveler.",
    amenities: [
      "🎮 Game Lounge",
      "📺 Smart TVs"
    ],
  },
  "hampton-inn-peachtree": {
    displayName: "Hampton Inn Peachtree",
    image: hamptonInnPeachtreeImage,
    overview:
      "Situated in scenic Peachtree City, this Hampton Inn provides easy access to bike trails, shopping, and dining.",
    amenities: ["🚲 Bike Rentalssss"],
  },
};

export default hotelData;
