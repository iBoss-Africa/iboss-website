import Header from '../components/Header/Header';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Paradise from '../components/Paradise/Paradise';
import Ourworks from '../components/Ourworks/Ourworks';
import Partners from './../components/Partners/Partners';
import Ourprocess from '../components/Ourprocess/Ourprocess';
import React from "react";
import ContactComponent from '../components/Contact/ContactComponent';


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
        <ContactComponent />
    </main>
  );
};

export default Home;
