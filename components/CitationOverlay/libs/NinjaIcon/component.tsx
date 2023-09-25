import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement>;

export const NinjaIcon: FC<Props> = ({ className }: Props) => {
  return (
    // <svg
    //   className={className}
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 113 116"
    // >
    //   <path d="/images/pfp.png"></path>
    // </svg>
    <img
      className={className}
      src="/images/pfp.png"
      width="40"
      height="40"
      alt="icon"
      style={{ borderRadius: "50%" }}
    ></img>
  );
};
