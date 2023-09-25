import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "journal4me",
        subtitle: t("projects.journal4me.subtitle"),
        description: t("projects.journal4me.description"),
        technologies: ["React", "TypeScript", "HTML", "CSS"],
        externalLink: "https://github.com/LiaoFe",
        githubLink: "https://github.com/LiaoFe/journal4me-htn22",
        imageLink: `/images/journal4me.png`,
      },
      {
        title: "Badminton Tryout Tracker",
        subtitle: t("projects.badmintontt.subtitle"),
        description: t("projects.badmintontt.description"),
        technologies: ["Java", "Java Swing", "Object-Oriented"],
        externalLink: "https://github.com/LiaoFe",
        githubLink: "https://github.com/LiaoFe/Badminton-Tryout-Tracker",
        imageLink: `/images/badmintontt.png`,
      },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
