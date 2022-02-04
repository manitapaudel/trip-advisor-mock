import React from "react";

type ButtonProps = {
  children: string;
  className?: string;
};

const PrimaryButton: React.FC<ButtonProps> = ({ children, className = "" }) => {
  return <button className={`${className}`}>{children}</button>;
};

export default PrimaryButton;
