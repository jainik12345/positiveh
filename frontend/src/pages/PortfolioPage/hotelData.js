// src/data/hotelData.js
import hamptonInnImage from "../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
import home2SuitesImage from "../../assets/images/whats_new_image_1.avif";
import townplaceSuitesImage from "../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
import trubyHiltonImage from "../../assets/images/whats_new_image_1.avif";
import hamptonInnPeachtreeImage from "../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";

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
    location: "Fayetteville, GA",
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
    location: "Fayetteville, GA",
  },
  "town-place-suites": {
    displayName: "Town Place Suites",
    image: townplaceSuitesImage,
    overview:
      "Town Place Suites in Rowery Branch, GA provides a comfortable long-term stay with spacious suites and homelike amenities.",
    amenities: ["🛏️ Spacious Suites", "🍳 In-Room Kitchens", "📶 Free WiFi"],
    location: "Fayetteville, GA",
  },
  "truby-hilton": {
    displayName: "Truby Hilton",
    image: trubyHiltonImage,
    overview:
      "A vibrant, modern hotel experience located in Columbus, OH. Truby Hilton combines style with affordability for today’s traveler.",
    amenities: ["🎮 Game Lounge", "📺 Smart TVs"],
    location: "Fayetteville, GA",
  },
  "hampton-inn-peachtree": {
    displayName: "Hampton Inn Peachtree",
    image: hamptonInnPeachtreeImage,
    overview:
      "Situated in scenic Peachtree City, this Hampton Inn provides easy access to bike trails, shopping, and dining.",
    amenities: ["🚲 Bike Rentalssss"],
    location: "Fayetteville, GA",
  },
};

export default hotelData;
