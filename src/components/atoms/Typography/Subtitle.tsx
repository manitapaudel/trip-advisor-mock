import { TypographyProps } from "@/types/TypographyTypes";
import style from "./typography.module.scss";


const Subtitle: React.FC<TypographyProps> = ({ className = "", children }) => {
  return <p className={`${style.subtitle} ${className}`}>{children}</p>;
};

export default Subtitle;
