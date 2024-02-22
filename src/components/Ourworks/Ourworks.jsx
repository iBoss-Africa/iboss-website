import "./ourworks.css";
import TangoWorks from "../../assets/our_works/tango-works.svg";
import QuikQikWorks from "../../assets/our_works/qikqik-works.svg";
import React , { useEffect, useState } from "react";

const Ourworks = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://iboss-webapi.onrender.com/v1/api/our-work?website=iboss"
        );
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error("Failed to fetch projects:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="our_works">
      <h2>Our Works</h2>
      <div className="container ourworks_container">
        <div className="top">
          <div className="top_left">
            <img src={TangoWorks} alt="" />
          </div>
          <div className="top_right">
            <h2>{projects[0]?.title}</h2>
            <p>
              {projects[0]?.description}
            </p>
            <a href="/" className="btn primary">
              Learn More
            </a>
          </div>
        </div>
        <div className="bot">
          <div className="bot_left">
            <h2>{projects[1]?.title}</h2>
            <p>
              {projects[1]?.description}
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

