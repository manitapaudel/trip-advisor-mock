import { TypographyProps } from "../../types/TypographyTypes";

const H1: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <h1 className={`font-medium text-3xl ${className}`}>{children}</h1>;
};

export default H1;
