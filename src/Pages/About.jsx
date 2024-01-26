import React from "react";
import AboutHeader from "../sections/Aboutheader/AboutHeader";
import Ourvision from "../sections/Ourvision/Ourvision";
import Wework from '../sections/Wework/Wework';
import Contact from "../sections/Contact/Contact";
import Wedo from "../sections/Wedo/Wedo";

const About = () => {
  return (
    <main>
      <AboutHeader />
      <Ourvision />
      <Wedo />
      <Wework />
      <Contact />
    </main>
  );
};

export default About;
