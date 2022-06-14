import React from "react";
import Hero from "../Components/Homepage/Hero";
import Services from "../Components/Homepage/Services";
import Testimonials from "../Components/Homepage/Testimonials";
import Video from "../Components/Homepage/Video";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Video />
      <Testimonials />
    </div>
  );
};

export default Homepage;
