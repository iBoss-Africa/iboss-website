import "./header.css";
import HeaderImage from "../../assets/header/banner-image.svg";
import lightningTop from "../../assets/header/lightning-top.svg";
import lightningBot from "../../assets/header/lightning-bot.svg";
// import backgroungImage from "../../assets/banner-background.svg"

/**
 * Header component represents the top section of a webpage, typically containing a profile image,
 * a brief introduction, call-to-action buttons, and social media links.
 * @returns {JSX.Element} The JSX representation of the Header component.
 */

const Header = () => {
  return (
    <header id="header">
      {/* Container for the header content */}
      <div className="container header_container">
        <div className="lightning_top">
          <img src={lightningTop} alt="" />
        </div>
        <div className="lightningBot">
          <img src={lightningBot} alt="" />
        </div>
        <div className="header_content">
          {/* information section */}
          <h1>
            Empower your Business with enhanced real <br /> world solutions
          </h1>

          <p>
            We excel in curating distinctive technological solutions, designed
            to address your business needs while catalyzing expansive
            operational growth
          </p>

          {/* Call-to-action buttons section */}
          <div className="header_cta">
            <a href="#our_contact" className="btn primary header-btn">
              Get in touch with us
            </a>
          </div>
        </div>

        {/* Header image section */}
        <div className="header_profile">
          <img src={HeaderImage} alt="Header Potrait" />
        </div>
      </div>
    </header>
  );
};

export default Header;
