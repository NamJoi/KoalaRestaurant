import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Homepart from "../components/Homepart";
import Menu from "../components/Menu";
import Overview from "../components/Overview";
const Home = () => {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div>
        <Homepart />
      </div>
      <div id="overview">
        <Overview />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
