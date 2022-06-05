import "../../styles/hero.scss";
const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Help to reclaim your life and freedom </h1>
      <p>
        We know how large objects will act, but things on a small scale just do
        not act that way.
      </p>
      <div className="button-control">
        <div className="pricing">
          <button>Get Quote Now</button>
        </div>
        <div className="about">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
