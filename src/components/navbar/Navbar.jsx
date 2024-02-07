import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import Logo from "../../assets/navbar/logo.svg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);

  // Get the current pathname and hash from the location object
  const { pathname, hash } = useLocation();

  // Reference for the dropdown menu
  const dropdownRef = useRef();

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Function to check if a link should be active based on the current hash
  const isActive = (hashValue) => {
    return hash === hashValue;
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check window size on resize and update isLargeScreen state
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 800);
  };

  useEffect(() => {
    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="nav_container">
        <HashLink smooth to="/#top" className="nav_logo">
          <img src={Logo} alt="" />
        </HashLink>

        {/* Hamburger Menu Icon */}
        <div
          className={`hamburger_menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation menu section */}
        <ul
          className={`nav_menu ${isMenuOpen ? "open" : ""}`}
          ref={dropdownRef}
        >
          <li className="nav_menu_item">
            <HashLink
              smooth
              to="/#top"
              className={isActive("#top") ? "active" : ""}
            >
              Home
            </HashLink>
          </li>
          <li className="nav_menu_item">
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav_menu_item">
            <HashLink
              smooth
              to="/#ourSolutions"
              className={isActive("#ourSolutions") ? "active" : ""}
            >
              Our Solutions
            </HashLink>
          </li>
          <li className="nav_menu_item">
            <HashLink
              smooth
              to="/#services"
              className={isActive("#services") ? "active" : ""}
            >
              Blog
            </HashLink>
          </li>
          {/* "Send us a message" button visible only in the mobile dropdown menu */}
          {isMenuOpen && (
            <li className="nav_menu_item">
              <a href="#send_message" id="ham_btn" className="btn primary">
                Contact Us <CiMail />
              </a>
            </li>
          )}
        </ul>
        {/* Contact button visible on larger screens or when the menu is open */}
        {(isLargeScreen || isMenuOpen) && (
          <li className="nav_menu_item">
            <a href="#our_contact" id="nav_btn" className="btn primary">
              Contact Us
              <CiMail />
            </a>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
