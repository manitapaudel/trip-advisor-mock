import { TypographyProps } from "../../types/TypographyTypes";

const H2: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <h2 className={`font-medium text-2xl ${className}`}>{children}</h2>;
};

export default H2;
