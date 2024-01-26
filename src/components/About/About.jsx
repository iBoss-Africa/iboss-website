import "./about.css";
import Aboutimage from "../../assets/about/about_image.svg";

/**
 * About component represents a section of a webpage providing information about the creator.
 * It includes a portrait image, a brief introduction, a set of informational cards, and a download link for the resume.
 * @returns {JSX.Element} The JSX representation of the About component.
 */

const About = () => {
  return (
    <section id="about">
      {/* Container for the about section content */}
      <div className="container about_container">
        {/* Left side of the about section */}
        <div className="about_left">
          <div className="about_portrait">
            <img src={Aboutimage} alt="AboutImage" />
          </div>
        </div>

        {/* Right side of the about section */}
        <div className="about_right">
          <h2>We focus mainly on <br /> providing innovative softwares</h2>
          {/* Introduction paragraphs */}
          <p>
            Fuelled by a relentless pursuit of excellence, we embarked on a
            mission to <br /> craft bespoke software solutions tailored to meet the
            dynamic needs of <br /> businesses across industries.
          </p>
          {/* Read More button */}
          <a href="/" className="btn primary">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
