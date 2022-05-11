import React from "react";

interface ButtonProps {
  label: string;
}
const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return <button className="dse-button-container">{props.label}</button>;
};

export default Button;
