import "./navbar.css";
import Logo from "../../assets/navbar/logo.svg";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // Get the current pathname and hash from the location object
  const { pathname, hash } = useLocation();

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Function to check if a link should be active based on the current hash
  const isActive = (hashValue) => {
    return hash === hashValue;
  };

  const toggleMenu = () => {
    const nav = document.querySelector('.nav_menu');
    nav.classList.toggle('show');
  };
  return (
    <nav>
      {/* Container for the navigation elements */}
      <div className=" nav_container">
        {/* Hamburger menu */}
        {/* <button className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button> */}
        {/* Logo section - navigates to top of home page */}
        <HashLink smooth to="/#top" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </HashLink>

        {/* Navigation menu section */}
        <ul className="nav_menu">
          <li>
            <HashLink
              smooth
              to="/#top"
              className={isActive("#top") ? "active" : ""}
            >
              Home
            </HashLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#our_works"
              className={isActive("#our_works") ? "active" : ""}
            >
              Our Works
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#services"
              className={isActive("#services") ? "active" : ""}
            >
              Services
            </HashLink>
          </li>
          {/* <a href="#our_works">Our Works</a>
          <a href="#services">Services</a> */}
        </ul>
        {/* Nav icon button */}
        <a href="#our_contact" id="nav_btn" className="btn primary">
          Get in Touch
          <CiMail style={{ fontSize: "1.4em" }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
