import { TypographyProps } from "@/types/TypographyTypes";
import style from "./typography.module.scss";

const H2: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <h2 className={`${style.h2} ${className}`}>{children}</h2>;
};

export default H2;
