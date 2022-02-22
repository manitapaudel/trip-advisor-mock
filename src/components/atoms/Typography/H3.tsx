import { TypographyProps } from "@/types/TypographyTypes";
import style from "./typography.module.scss";

const H3: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <h3 className={`${style.h3} ${className}`}>{children}</h3>;
};

export default H3;
