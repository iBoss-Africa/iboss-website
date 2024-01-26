// import Header from './../sections/Header/Header';
import About from './../sections/About/About';
import Services from './../sections/Services/Services';
import Paradise from './../sections/Paradise/Paradise';
import Ourworks from './../sections/Ourworks/Ourworks';
import Partners from './../components/Partners/Partners';
import Ourprocess from './../sections/Ourprocess/Ourprocess';
import Contact from './../sections/Contact/Contact';
import React from "react";


const Home = () => {
  return (
    <main>
        {/* <Header /> */}
        <About />
        <Services />
        <Paradise />
        <Ourworks />
        <Partners />
        <Ourprocess />
        <Contact />
    </main>
  );
};

export default Home;
