import React from "react";
import AboutHeader from "../components/Aboutheader/Aboutheader";
import Ourvision from "../components/Ourvision/Ourvision";
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
