import { TypographyProps } from "@/types/TypographyTypes";
import style from "./typography.module.scss";

const BodyText: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <p className={`${style.bodyText} ${className}`}>{children}</p>;
};

export default BodyText;
