import React from "react";
import AboutHeader from "../components/Aboutheader/Aboutheader";
import Ourvision from "../components/Ourvision/Ourvision";
import Wework from '../components/Wework/Wework';
import Wedo from "../components/Wedo/Wedo";
import ContactComponent from "../components/Contact/ContactComponent";

const About = () => {
  return (
    <main>
      <AboutHeader />
      <Ourvision />
      <Wedo />
      <Wework />
      <ContactComponent />
    </main>
  );
};

export default About;
