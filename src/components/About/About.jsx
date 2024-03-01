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
          <h2>
            We are a visionary team driven by the zeal to develop and deliver
            game-changing solutions that meet relevant and real needs.
          </h2>
          {/* Introduction paragraphs */}
          <p>
            As an innovative company, we constantly seek out new and relevant
            ideas,systems, processes and products that respond to the common
            challenges <br />of our environment as a means to promote quality living
            through shared prosperity.
          </p>
          {/* Read More button */}
          <a href="/about" className="btn primary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
