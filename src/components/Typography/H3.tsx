import { TypographyProps } from "../../types/TypographyTypes";

const H3: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <h3 className={`font-medium text-xl ${className}`}>{children}</h3>;
};

export default H3;
