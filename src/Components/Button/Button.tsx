import { buttonType } from "../../Types/Types";

import "../../styles/buttonStyle.scss";

const Button = ({ title, onClick }: buttonType) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
