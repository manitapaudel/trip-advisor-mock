import React from "react";

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
      className={`flex items-start justify-between border border-gray-900 rounded-2xl p-3 font-medium hover:bg-gray-900 hover:text-gray-50 min-h-card ${className}`}
      onClick={() => setModalOpen(true)}
    >
      {children}
    </div>
  );
};

export default ItemCard;
