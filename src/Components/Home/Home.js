import React from "react";
import NavBar from "../NavBar";
import Slider from "./Slider";
import Service from "./Service";
import Offer from "./Offer";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Service />
      <Offer />
      <Footer />
    </div>
  );
};

export default Home;
