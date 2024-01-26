import Header from '../components/Header/Header';
import About from '../components/About/About';
import Services from './../sections/Services/Services';
import Paradise from '../components/Paradise/Paradise';
import Ourworks from '../components/Ourworks/Ourworks';
import Partners from './../components/Partners/Partners';
import Ourprocess from './../sections/Ourprocess/Ourprocess';
import Contact from './../sections/Contact/Contact';
import React from "react";


const Home = () => {
  return (
    <main>
        <Header />
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
