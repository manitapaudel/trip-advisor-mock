import { TypographyProps } from "@/types/TypographyTypes";
import style from "./typography.module.scss";

const H1: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <h1 className={`${style.h1} ${className}`}>{children}</h1>;
};

export default H1;
