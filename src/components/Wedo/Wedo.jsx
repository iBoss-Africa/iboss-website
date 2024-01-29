import React from "react";
import "./wedo.css";
import Card from "../../components/Card/Card";
import Image from "../../assets/wedo/wedo.svg";

const Wedo = () => {
  return (
    <section id="wedo">
      <h2>What we do</h2>
      <div className="container wedo_container">
        <div className="wedo_left">
          <img src={Image} alt="" />
        </div>
        <div className="wedo_right">
          <Card className="wedo_card">
            <p>
              Assist businesses to recognize that mobility is beyond devices
            </p>
          </Card>
          <Card className="wedo_card">
            <p>
              {" "}
              Develop digitally relevant solutions and services to create
              revenue and profit opportunities utilizing technology and
              sustainable business models
            </p>
          </Card>
          <Card className="wedo_card">
            <p>
              Enable omni-channel distribution access for businesses and
              consumers
            </p>
          </Card>
          <Card className="wedo_card">
            <p>
              Delivery of secure digital commerce options to transform the way
              people interact and transact
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Wedo;
