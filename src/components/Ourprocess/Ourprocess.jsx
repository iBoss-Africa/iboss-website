import "./ourprocess.css";
import Card from "../../components/Card/Card";
import Discover from "../../assets/our_process/Discover.svg"
import Design from "../../assets/our_process/Design.svg"
import Develop from "../../assets/our_process/Develop.svg"
import Deploy from "../../assets/our_process/Deploy.svg"

const Ourprocess = () => {

  return (
    <section id="ourprocess">
      <h2>Our Process</h2>
      <h4>Simple, Seamless, Streamlined</h4>
      <div className="container ourprocess_container">
        <div className="ourprocess_card">
          <div className="the_cards">
            <Card>
              <img src={Discover} alt="" />
              <h6>Discover</h6>
              <p>
                We start with a discussion with you so we can structure team,
                approach, success metrics, timescale, budget and delegate required
                skill sets to the task
              </p>
            </Card>
          </div>
          <div className="the_cards">
            <Card>
              <img src={Design} alt="" />
              <h6>Design</h6>
              <p>
                Our design strategy flows from discovery through a user-focused
                mind-map to create a total end-to-end deeply satisfying
                experience.
              </p>
            </Card>
          </div>
          <div className="the_cards">
            <Card>
              <img src={Develop} alt=""  />
              <h6>Develop</h6>
              <p>
                Our team of developers consider such issues as protocols,
                compatibility, user accessibility and security to code with
                precision and functionality
              </p>
            </Card>
          </div>
          <div className="the_cards">
            <Card>
              <img src={Deploy} alt="" />
              <h6>Deploy</h6>
              <p>
                The end goal is to put a software or an app in the hand of the
                user, while yet gathering user feedback for post deployment
                upgrades
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="btn_process">
        <a href="/" className="btn primary">
          Schedule a Call
        </a>
      </div>
    </section>
  );
};

export default Ourprocess;
