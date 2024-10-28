import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiApachespark,
  SiCplusplus,
  SiDatabricks,
  SiNumpy,
  SiSnowflake,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

import { PostgresIcon, TsIcon } from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "Python",
    href: "https://www.python.org/",
    icon: <FaPython />,
  },
  {
    name: "C++",
    href: "https://cplusplus.com/doc/tutorial/",
    icon: <SiCplusplus color="#0065C9" />,
  },
  {
    name: "Java",
    href: "https://www.java.com/en/",
    icon: <FaJava color="#000000" />,
  },
  {
    name: "Snowflake",
    href: "https://www.snowflake.com/en/",
    icon: <SiSnowflake />,
  },
  {
    name: "Databricks",
    href: "https://www.databricks.com/",
    icon: <SiDatabricks />,
  },
  {
    name: "Spark",
    href: "https://spark.apache.org/",
    icon: <SiApachespark />,
  },
  {
    name: "NumPy",
    href: "https://numpy.org/",
    icon: <SiNumpy color="#4DABCF" />,
  },
  {
    name: "TypeScript",
    href: "https://typescriptlang.org",
    icon: <TsIcon />,
  },

  {
    name: "React",
    href: "https://reactjs.org",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: <FaNodeJs color="#539E43" />,
  },
  {
    name: "Porstgres",
    href: "https://www.postgresql.org/",
    icon: <PostgresIcon />,
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: <FaDocker color="#2496ED" />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <Container>
        <div
          className="max-w-md mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
