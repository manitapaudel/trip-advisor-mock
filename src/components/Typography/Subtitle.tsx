import { TypographyProps } from "../../types/TypographyTypes";

const Subtitle: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

export default Subtitle;
