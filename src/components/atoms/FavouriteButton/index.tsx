import React from "react";

import HeartLineIcon from "@/assets/icons/HeartLineIcon";
import style from "./favourite-button.module.scss";
import HeartFillIcon from "@/assets/icons/HeartFillIcon";

type ButtonProps = {
  className?: string;
};

const FavouriteButton: React.FC<ButtonProps> = ({ className = "" }) => {
  const [favourite, setFavourite] = React.useState(false);
  return (
    <button
      className={`${className} ${style.button}`}
      onClick={() => setFavourite(!favourite)}
    >
      {favourite ? (
        <HeartFillIcon className={`${style.icon} ${style.fillIcon}`} />
      ) : (
        <HeartLineIcon className={style.icon} />
      )}
    </button>
  );
};

export default FavouriteButton;
