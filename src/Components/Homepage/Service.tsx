import { serviceProps } from "../../Types/Types";
import "../../styles/services.scss";

const Service = ({ service }: serviceProps) => {
  const { img, name, texts } = service;
  return (
    <div className="service-container">
      <div className="head">
        <img src={img} alt="serviceimg" />
        <p className="service-name">{name}</p>
      </div>
      <p>{texts}</p>
    </div>
  );
};

export default Service;
