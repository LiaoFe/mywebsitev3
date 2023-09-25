import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLAnchorElement>;

export const Logo: FC<Props> = ({}: Props) => {
  return <p>Home</p>;
};
