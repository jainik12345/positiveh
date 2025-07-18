import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/final.svg";
import FloatingButtons from "./../ScrollToTop/FloatingButtons";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Update isDesktop on resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sticky only on desktop
  useEffect(() => {
    if (!isDesktop) {
      setIsSticky(false);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const NavItems = [
    { Name: "Home", Path: "/" },
    { Name: "Team", Path: "/team" },
    { Name: "Portfolio", Path: "/portfolio" },
    { Name: "Careers", Path: "/careers" },
    { Name: "Contact Us", Path: "/contact-us" },
    { Name: "Training", Path: "/" },
  ];

  const headerClass = ` w-full z-30 transition-all duration-500  ${
    isDesktop
      ? isSticky
        ? "fixed top-0  bg-[#212529] shadow-md"
        : "absolute top-0 bg-transparent  "
      : "relative top-0 bg-[#212529]"
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="bg-[var(--color-logo-color)] ">
          <div
            className={`flex md:gap-10 gap-5 justify-end md:px-10 px-2 max-w-screen-2xl mx-auto `}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Ken@positiveh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold text-xs md:text-base flex justify-end items-center gap-3 py-1"
            >
              <IoMdMail size={20} />
              Ken@positiveh.com
            </a>

            {/* <a
              href="https://wa.me/+919099705029"
              className="text-black font-semibold text-xs md:text-base flex items-center gap-1"
            >
              <FaPhoneAlt size={16} />
              +919099705029
            </a> */}
          </div>
        </div>

        <div className="navbar-cont max-w-screen-2xl  mx-auto text-white py-5 md:px-10 px-5 flex items-center justify-between">
          <NavLink className="logo" to="/">
            <img src={Logo} className="h-10" alt="Logo" />
          </NavLink>

          {/* Desktop Navbar */}
          <ul className="nav-items md:flex hidden items-center lg:gap-20 gap-10">
            {NavItems.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.Path}
                  className={({ isActive }) =>
                    ` py-2
                    relative px-1
                    transition-colors duration-300
                    ${isActive ? "text-blue-500" : "text-white"}
                    after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5
                    after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300
                    hover:text-blue-500 hover:after:scale-x-100
                    font-(family-name:--font-navbar-font)
                    font-semibold
                  `
                  }
                >
                  {item.Name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="flex flex-col justify-center items-center md:hidden w-10 h-10 relative z-50"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-0.5 w-8 bg-white rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white rounded mt-1.5 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white rounded mt-1.5 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Mobile Navbar Overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${
              open
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } md:hidden`}
            onClick={() => setOpen(false)}
          />

          {/* Mobile Navbar Drawer */}
          <ul
            className={`fixed top-0 left-0 h-full w-64 bg-[#141A20] flex flex-col items-start gap-10 py-10 px-5 z-50 transform transition-transform duration-300 md:hidden
            ${open ? "-translate-x-0" : "-translate-x-full"}`}
          >
            <NavLink className="logo" to="/">
              <img src={Logo} className="h-10" alt="Logo" />
            </NavLink>

            {NavItems.map((item, idx) => (
              <li key={idx} className="w-full">
                <NavLink
                  to={item.Path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 w-full relative transition-colors duration-300 font-semibold font-(family-name:--font-navbar-font)
                  ${isActive ? "text-blue-500" : "text-white"}
                  `
                  }
                >
                  {item.Name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <FloatingButtons />
    </>
  );
};

export default Header;
