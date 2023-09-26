import { Container } from "components";
import Image from "next/image";
import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

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
      <Row style={{display: "flex", alignItems: "center", alignContent:"center"}}>
        <a
          href="https://liaofe.github.io/mywebsite"
          target="_blank"
          rel="noreferrer"
          style={{display: "flex", alignContent: "center",  alignItems: "center",}}
        >
          <Image
            src="./images/sleepie turtie.webp"
            width="50px"
            height="50px"
          ></Image>
          <p style={{margin: "5px"}}>  ←  Click Me!</p>
        </a>
      </Row>
    </Container>
  );
};
