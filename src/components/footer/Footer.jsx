import "./footer.css";
import footerImage from "../../assets/footer/iboss_footer_logo.svg";
import twitter from "../../assets/footer/footer_twitter.svg"
import linkedin from "../../assets/footer/footer_linkedin.svg"
import instagram from "../../assets/footer/footer_instagram.svg"

const Footer = () => {
  return (
    <footer id="footer" className="container">
      <div className="footer_container">
        <div className="footer_image_container">
          <img src={footerImage} alt="" />
          <p>
            Consistent pursuit of innovation, excellence, and value through
            technology as levers of digital transformation, process automation,
            transaction facilitation, and data currency for performance
            optimization, revenue assurance, and sustainable growth.
          </p>
        </div>

        <div className="company">
          <h5>Company</h5>
          <p>About Us</p>
          <p>Our works</p>
          <p>Blog</p>
        </div>

        <div className="our_services">
          <h5>Our Services</h5>
          <p>Software Development</p>
          <p>Digital Product Design</p>
          <p>Consulting and Management</p>
          <p>Cloud/Devops</p>
          <p>Marketing</p>
        </div>

        <div className="get_intouch_socials_container">
          <div className="get_in_touch">
            <h5>Get in touch</h5>
            <p>
              Call: <span>+234 916 155 4000, +234 916 166 4000</span>
            </p>
            <p>
              {" "}
              Email: <span>info@iboss.com</span>
            </p>
            <p>
              {" "}
              Address:{" "}
              <span>
                173 Ogudu Road After Ogudu City Mall Opposite St Andrews Anglican
                Church Ogudu Lagos
              </span>
            </p>
          </div>

          <div className="social_media">
            <h5>Follow us on:</h5>
            <div className="socials">
              <img className="footer_social" src={twitter} alt="" />
              <img className="footer_social" src={linkedin} alt="" />
              <img className="footer_social" src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
