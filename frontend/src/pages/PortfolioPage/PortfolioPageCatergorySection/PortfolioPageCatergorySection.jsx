import { NavLink } from "react-router-dom";
import OnGoing from "../../../assets/images/hotelinn.png";
import ComplatedImg from "../../../assets/images/hampton.jpg";

const PortfolioPageCatergorySection = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Ongoing Projects Card */}
          <NavLink
            className="group block cursor-pointer"
            to={`/portfolio/category/running`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] relative">
                {/* Image */}
                <img
                  src={OnGoing}
                  alt="Ongoing Projects"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Label */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-[var(--color-logo-color)] text-white px-4 py-2 rounded-sm font-medium text-sm tracking-wide">
                    Running
                  </div>
                </div>

                {/* Hover Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="text-white text-center">
                    <div className="text-lg font-semibold">
                      View Ongoing Projects
                    </div>
                    <div className="text-sm mt-1 opacity-90">
                      Click to explore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          {/* Completed Projects Card */}
          <NavLink
            className="group block cursor-pointer"
            to={`/portfolio/category/up-coming`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] relative">
                {/* Image */}
                <img
                  src={ComplatedImg}
                  alt="Completed Projects"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t   from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Label */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-[var(--color-footer-color)] text-white px-4 py-2 rounded-sm font-medium text-sm tracking-wide">
                    UpComing
                  </div>
                </div>

                {/* Hover Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="text-white text-center">
                    <div className="text-lg font-semibold">
                      View Completed Projects
                    </div>
                    <div className="text-sm mt-1 opacity-90">
                      Click to explore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PortfolioPageCatergorySection;
