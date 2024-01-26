import React from "react";
import AboutHeader from "../sections/Aboutheader/AboutHeader";
import Ourvision from "./../sections/ourvision/Ourvision";
import Wework from './../sections/wework/Wework';
import Contact from "../sections/contact/Contact";
import Wedo from "../sections/wedo/Wedo";

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
