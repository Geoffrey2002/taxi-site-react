import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Details from "./Details";
import News from "./News";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <>
      <NavBar />
      <Details />
      <News />
      <Testimonial />
      <Footer />
    </>
  );
};

export default About;
