import { Container } from "components";
import Image from "next/image";
import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <Container>
      <p className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        <a
          href="https://github.com/LiaoFe/mywebsite-v2"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer"
        >
          Built with React, TypeScript, and CSS
        </a>
      </p>
      <a href="https://liaofe.github.io/mywebsite" target="_blank">
        <Image src="./images/sleepie turtie.webp" width="50px" height="50px" >
        </Image>
      </a>
    </Container>
  );
};
