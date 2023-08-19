import { FC } from "react";

type ArrowProps = {
  fillColor: string;
  rotate?: 180 | 0;
};

const GrayArrow: FC<ArrowProps> = ({ fillColor, rotate = 0 }) => {
  return (
    <svg
      style={{ rotate: `${rotate}deg` }}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
    >
      <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill={fillColor} />
    </svg>
  );
};

export default GrayArrow;
