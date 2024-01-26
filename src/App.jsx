import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const App = () => {
  const { pathname } = useLocation();

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
