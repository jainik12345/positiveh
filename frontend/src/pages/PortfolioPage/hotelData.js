import { FaWifi } from "react-icons/fa";
import hamptonInnImage from "../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
import home2SuitesImage from "../../assets/images/whats_new_image_1.avif";
import townplaceSuitesImage from "../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
import trubyHiltonImage from "../../assets/images/whats_new_image_1.avif";
import hamptonInnPeachtreeImage from "../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";

const hotelData = {
  "hampton-inn": {
    displayName: "Hampton Inn",
    image: hamptonInnImage,
    description: "Works perfectly on all devices.",

    overview:
      "If you want to spend your vacation in a resort or holiday home that overlooks a water body, the Statue of Unity Tent City might be the ideal choice for you. Located on the isle of Sadhu-Bet in River Narmada, the tent city overlooks the Narmada river on one side while the towering Vindhyachal and Satpura mountain range on the other side. For some vacationers, this Tent City is a dream come true, not only because it is nestled in nature but also because the accommodation has all the basic amenities that you might need.",

    amenities: [
      {
        icon: "🛏️",
        title: "Comfortable Rooms",
        description: "Spacious and well-furnished rooms for a relaxing stay.",
      },
      {
        icon: "📶",
        title: "High-Speed WiFi",
        description: "Stay connected with fast and reliable internet access.",
      },
      {
        icon: "🍽️",
        title: "Complimentary Hot Breakfast",
        description: "Enjoy a fresh and hot breakfast every morning.",
      },
      {
        icon: "🅿️",
        title: "Free Parking",
        description: "Convenient on-site parking for all guests.",
      },
      {
        icon: "🏊‍♀️",
        title: "Outdoor Pool",
        description: "Take a dip in our clean and inviting pool area.",
      },
      {
        icon: "💪",
        title: "Fitness Center",
        description: "Stay fit with our modern exercise equipment.",
      },
    ],
    location: "Fayetteville, GA",
  },

  "home-2-suites": {
    displayName: "Home 2 Suites",
    image: home2SuitesImage,
    description: "Works perfectly on all devices.",

    overview:
      "If you want to spend your vacation in a resort or holiday home that overlooks a water body, the Statue of Unity Tent City might be the ideal choice for you. Located on the isle of Sadhu-Bet in River Narmada, the tent city overlooks the Narmada river on one side while the towering Vindhyachal and Satpura mountain range on the other side. For some vacationers, this Tent City is a dream come true, not only because it is nestled in nature but also because the accommodation has all the basic amenities that you might need.",

    amenities: [
      {
        icon: "🏋️‍♂️",
        title: "Fitness Center",
        description: "Modern equipment to maintain your workout routine.",
      },
      {
        icon: "🛏️",
        title: "Comfortable Rooms",
        description: "Spacious rooms designed for long stays.",
      },
      {
        icon: "📶",
        title: "High-Speed WiFi",
        description: "Seamless connectivity for work and leisure.",
      },
      {
        icon: "🍽️",
        title: "Complimentary Hot Breakfast",
        description: "Start your day with our fresh breakfast options.",
      },
      {
        icon: "🐾",
        title: "Pet Friendly",
        description: "Bring along your furry friends for the stay.",
      },
      {
        icon: "🧺",
        title: "Laundry Facilities",
        description: "Self-service laundry for your convenience.",
      },
      {
        icon: "🚲",
        title: "Bike Rentals",
        description: "Explore nearby trails with our bike rental service.",
      },
    ],
    location: "Fayetteville, GA",
  },

  "town-place-suites": {
    displayName: "Town Place Suites",
    image: townplaceSuitesImage,
    description: "Works perfectly on all devices.",

    overview:
      "If you want to spend your vacation in a resort or holiday home that overlooks a water body, the Statue of Unity Tent City might be the ideal choice for you. Located on the isle of Sadhu-Bet in River Narmada, the tent city overlooks the Narmada river on one side while the towering Vindhyachal and Satpura mountain range on the other side.",

    amenities: [
      {
        icon: "🛏️",
        title: "Spacious Suites",
        description: "Fully-equipped suites for longer stays.",
      },
      {
        icon: "🍳",
        title: "In-Room Kitchens",
        description: "Cook your meals in your private kitchen.",
      },
      {
        icon: "📶",
        title: "Free WiFi",
        description: "Unlimited internet access included in your stay.",
      },
    ],
    location: "Fayetteville, GA",
  },

  "truby-hilton": {
    displayName: "Truby Hilton",
    image: trubyHiltonImage,
    description: "Works perfectly on all devices.",

    overview:
      "The Tent City overlooks the Narmada river on one side while the towering Vindhyachal and Satpura mountain range on the other side.",

    amenities: [
      {
        icon: "🎮",
        title: "Game Lounge",
        description: "Entertainment for all ages in our gaming area.",
      },
      {
        icon: "📺",
        title: "Smart TVs",
        description: "Access to streaming services on flat-screen TVs.",
      },
    ],
    location: "Fayetteville, GA",
  },

  "hampton-inn-peachtree": {
    displayName: "Hampton Inn Peachtree",
    image: hamptonInnPeachtreeImage,
    description: "Works perfectly on all devices.",

    overview:
      "The Tent City overlooks the Narmada river on one side while the towering Vindhyachal and Satpura mountain range on the other side.",

    amenities: [
      {
        icon: "🚲",
        title: "Bike Rentals",
        description: "Enjoy scenic bike rides during your stay.",
      },
    ],
    location: "Fayetteville, GA",
  },
};

export default hotelData;
