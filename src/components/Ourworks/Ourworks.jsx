import "./ourworks.css";
import TangoWorks from "../../assets/our_works/tango-works.svg";
import QuikQikWorks from "../../assets/our_works/qikqik-works.svg";
import React from "react";

const Ourworks = () => {
  return (
    <section id="our_works">
      <h2>Our Works</h2>
      <div className="container ourworks_container">
        <div className="top">
          <div className="top_left">
            <img src={TangoWorks} alt="" />
          </div>
          <div className="top_right">
            <h2>Tango</h2>
            <p>
              The Tango Project involves the configuration and adaption of different software
              to seamlessly deliver end-to-end services to
              users across the e-retail and <br /> logistics environment.
            </p>
            <a href="/" className="btn primary">
              Learn More
            </a>
          </div>
        </div>
        <div className="bot">
          <div className="bot_left">
            <h2>QikQik</h2>
            <p>
              This pioneer payment platform retains our services for providing
              and maintaining integration with third-party applications.
            </p>
            <a href="/" className="btn primary">
              Learn More
            </a>
          </div>
          <div className="bot_right">
            <img src={QuikQikWorks} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourworks;

