import "./aboutheader.css";
import aboutheader from '../../assets/about_header/aboutheader.svg'

const AboutHeader = () => {
  return (
    <section id="about_header">
      {/* Container for the about header content */}
      <div className="container about_header_container">
        <div className="about_header_content">
          {/* information section */}
          <h1>We build innovative solutions <br /> using emerging technologies</h1>

          <p>
            Delivering wow is at the heart of iBOSS. It is the guiding force
            that helps us unfold innovation <br /> and transformation and empowers our
            clients to create a saga of digital excellence
          </p>
        </div>

        {/* Header image section */}
        <div className="about_image">
          <img src={aboutheader} alt="AboutImage" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
