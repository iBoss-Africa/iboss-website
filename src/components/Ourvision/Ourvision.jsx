import "./ourvision.css";
import ourVision from '../../assets/our_vision/ourvision.svg'

const Ourvision = () => {
  return (
    <section id="our_vision">
      <div className="container our_vision_container">
        <div className="our_vision_content">
          <h2>
            Our Vision
          </h2>
        </div>

        {/* Our Vision image section */}
        <div className="vision_image">
          <img src={ourVision} alt="VisionImage" />
        </div>
      </div>
    </section>
  );
};

export default Ourvision;
