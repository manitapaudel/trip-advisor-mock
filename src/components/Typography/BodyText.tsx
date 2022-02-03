import { TypographyProps } from "../../types/TypographyTypes";

const BodyText: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <p className={`text-base ${className}`}>{children}</p>;
};

export default BodyText;
