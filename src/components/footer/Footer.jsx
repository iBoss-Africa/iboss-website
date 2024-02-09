import "./footer.css";
import footerImage from "../../assets/footer/iboss_footer_logo.svg";
import twitter from "../../assets/footer/footer_twitter.svg";
import linkedin from "../../assets/footer/footer_linkedin.svg";
import instagram from "../../assets/footer/footer_instagram.svg";
// import { RiTwitterXLine } from "react-icons/ri";
// import { BiLogoLinkedin } from "react-icons/bi";
// import { FaInstagram } from "react-icons/fa";

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
                173 Ogudu Road After Ogudu City Mall Opposite St Andrews
                Anglican Church Ogudu Lagos
              </span>
            </p>
          </div>

          <div className="social_media">
            <h5>Follow us on:</h5>
            <div className="socials">
              <a href="#">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM18 33.84C26.7482 33.84 33.84 26.7482 33.84 18C33.84 9.25181 26.7482 2.16 18 2.16C9.25181 2.16 2.16 9.25181 2.16 18C2.16 26.7482 9.25181 33.84 18 33.84ZM17.7712 14.7991L17.8056 15.3908L17.2333 15.3183C15.1503 15.0406 13.3305 14.0987 11.7853 12.5168L11.03 11.7319L10.8354 12.3115C10.4234 13.6036 10.6866 14.9682 11.545 15.8859C12.0028 16.3931 11.8998 16.4655 11.1101 16.1636C10.8354 16.067 10.595 15.9946 10.5721 16.0308C10.492 16.1153 10.7667 17.2142 10.9842 17.6489C11.2818 18.2527 11.8884 18.8444 12.5522 19.1946L13.113 19.4723L12.4492 19.4844C11.8082 19.4844 11.7853 19.4965 11.854 19.75C12.0829 20.5349 12.9871 21.3682 13.9943 21.7304L14.7039 21.984L14.0858 22.3704C13.1702 22.9259 12.0944 23.2399 11.0185 23.264C10.5035 23.2761 10.08 23.3244 10.08 23.3606C10.08 23.4814 11.4763 24.1576 12.2889 24.4233C14.7268 25.2082 17.6224 24.87 19.797 23.5297C21.3421 22.5757 22.8873 20.6799 23.6083 18.8444C23.9975 17.8663 24.3866 16.0791 24.3866 15.2217C24.3866 14.6663 24.4209 14.5938 25.0619 13.9297C25.4396 13.5432 25.7944 13.1206 25.863 12.9998C25.9775 12.7704 25.966 12.7704 25.3823 12.9757C24.4095 13.338 24.2721 13.2897 24.7528 12.7463C25.1076 12.3598 25.5311 11.6595 25.5311 11.4542C25.5311 11.418 25.3594 11.4783 25.1649 11.587C24.9589 11.7078 24.501 11.8889 24.1577 11.9976L23.5396 12.2029L22.9788 11.8044C22.6698 11.587 22.2349 11.3455 22.006 11.2731C21.4223 11.104 20.5295 11.1281 20.0031 11.3214C18.5724 11.8648 17.6682 13.2655 17.7712 14.7991Z"
                    fill="#4F4F4F"
                  />
                </svg>
                {/* <img className="footer_social" src={twitter} alt="" /> */}
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 24.4478C18.6274 24.4478 24 19.0752 24 12.4478C24 5.82034 18.6274 0.447754 12 0.447754C5.37258 0.447754 0 5.82034 0 12.4478C0 19.0752 5.37258 24.4478 12 24.4478ZM12 23.0078C17.8321 23.0078 22.56 18.2799 22.56 12.4478C22.56 6.61563 17.8321 1.88775 12 1.88775C6.16787 1.88775 1.44 6.61563 1.44 12.4478C1.44 18.2799 6.16787 23.0078 12 23.0078ZM6.72 10.1044V17.0837H8.98084V10.1044H6.72ZM7.99905 6.68775C7.22563 6.68775 6.72 7.20897 6.72 7.89328C6.72 8.56342 7.21069 9.09964 7.96971 9.09964H7.98415C8.77247 9.09964 9.26343 8.56342 9.26343 7.89328C9.24876 7.20897 8.77247 6.68775 7.99905 6.68775ZM14.6769 10.1044C13.4766 10.1044 12.9391 10.7818 12.6391 11.257V10.2685H10.378C10.4078 10.9234 10.378 17.2478 10.378 17.2478H12.6391V13.35C12.6391 13.1414 12.6538 12.9333 12.7135 12.7839C12.8769 12.3672 13.249 11.9358 13.8736 11.9358C14.692 11.9358 15.0192 12.5758 15.0192 13.5137V17.2476H17.2799L17.28 13.2459C17.28 11.1021 16.1647 10.1044 14.6769 10.1044Z"
                    fill="#828282"
                  />
                </svg>
                {/* <img className="footer_social" src={linkedin} alt="" /> */}
              </a>
              <a href="#">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_617)">
                    <path
                      d="M18 0.421875C8.31094 0.421875 0.421875 8.31094 0.421875 18C0.421875 27.6891 8.31094 35.5781 18 35.5781C27.6891 35.5781 35.5781 27.6961 35.5781 18C35.5781 8.30391 27.6961 0.421875 18 0.421875ZM17.9859 33.2508C9.48516 33.2508 2.5875 26.3602 2.5875 17.8523C2.5875 9.34453 9.47813 2.45391 17.9859 2.45391C26.4937 2.45391 33.3844 9.34453 33.3844 17.8523C33.3844 26.3602 26.4867 33.2508 17.9859 33.2508Z"
                      fill="#4F4F4F"
                    />
                    <path
                      d="M23.9272 13.4717C24.6456 13.4717 25.228 12.8893 25.228 12.1709C25.228 11.4525 24.6456 10.8701 23.9272 10.8701C23.2088 10.8701 22.6265 11.4525 22.6265 12.1709C22.6265 12.8893 23.2088 13.4717 23.9272 13.4717Z"
                      fill="#4F4F4F"
                    />
                    <path
                      d="M18.1405 12.5366C15.1241 12.5366 12.6772 14.9835 12.6772 17.9999C12.6772 21.0163 15.1241 23.4632 18.1405 23.4632C21.1569 23.4632 23.6038 21.0163 23.6038 17.9999C23.6038 14.9835 21.1569 12.5366 18.1405 12.5366ZM18.1405 21.5015C16.2069 21.5015 14.639 19.9335 14.639 17.9999C14.639 16.0663 16.2069 14.4983 18.1405 14.4983C20.0741 14.4983 21.6421 16.0663 21.6421 17.9999C21.6421 19.9335 20.0741 21.4944 18.1405 21.5015Z"
                      fill="#4F4F4F"
                    />
                    <path
                      d="M29.1657 13.4576C29.1657 9.78027 26.1845 6.79199 22.5001 6.79199H13.711C10.0337 6.79199 7.04541 9.77324 7.04541 13.4576V22.2537C7.04541 25.9311 10.0267 28.9193 13.711 28.9193H22.5071C26.1845 28.9193 29.1728 25.9381 29.1728 22.2537L29.1657 13.4576ZM27.0845 22.2537C27.0845 24.7779 25.0313 26.8311 22.5071 26.8311H13.711C11.1868 26.8311 9.13369 24.785 9.13369 22.2537V13.4576C9.13369 10.9264 11.1798 8.88027 13.711 8.88027H22.5071C25.0384 8.88027 27.0845 10.9264 27.0845 13.4576V22.2537Z"
                      fill="#4F4F4F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_617">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {/* <img className="footer_social" src={instagram} alt="" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
