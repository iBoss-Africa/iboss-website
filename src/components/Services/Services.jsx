import "./services.css";
import data from "./data";
import Card from "../../components/Card/Card";
import React,{ useEffect, useState } from "react";

const Services = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.ibossafrica.com/v1/api/services?website=iboss"
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
    <section id="services">
      {/* Section title */}
      <h2>Our Services</h2>

      {/* Container for the services cards */}
      <div className="container services_container">
        {
          // Mapping through the data array to generate service cards using the Card component
          data.map((item) => (
            <Card key={item.id} className={`${item.cardish}`}>
              {/* Service details */}
              <div className="service_details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <div className="service_image_container">
                {/* Service image */}
                <div className="service_image">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  );
};

export default Services;
