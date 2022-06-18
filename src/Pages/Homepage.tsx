import Hero from "../Components/Homepage/Hero";
import MeetUs from "../Components/Homepage/MeetUs";
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
      <MeetUs />
    </div>
  );
};

export default Homepage;
