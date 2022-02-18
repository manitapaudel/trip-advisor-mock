import React from "react";

import style from "./item-card.module.scss"

type CardProps = {
  className?: string;
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | (string | JSX.Element)[];
  setModalOpen(a: boolean): void;
};
const ItemCard: React.FC<CardProps> = ({
  className = "",
  children,
  setModalOpen,
}) => {
  return (
    <div
      className={`${style.container} ${className}`}
      onClick={() => setModalOpen(true)}
    >
      {children}
    </div>
  );
};

export default ItemCard;
