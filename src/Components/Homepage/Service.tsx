import { serviceProps } from "../../Types/Types";
import "../../styles/services.scss";

const Service = ({ service }: serviceProps) => {
  const { img, name, texts } = service;
  return (
    <div className="service-container">
      <div className="head">
        <i className={`ri-${img}`}></i>
        <p className="service-name">{name}</p>
      </div>
      <p>{texts}</p>
      <button>Book an Appointment</button>
    </div>
  );
};

export default Service;
