import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";

import { HandWave } from "./libs/HandWave";
import { HeroLink } from "./libs/HeroLink";

export const Hero: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Container className="pt-24 md:pt-32">
      <motion.img
        src="images/pfp.png"
        alt="me"
        className="border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-12"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          damping: 5,
          mass: 1,
          delay: 0.2,
        }}
        initial="hidden"
        animate="visible"
      />
      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900">
          {t("hero.title")}
        </h1>
        <HandWave className="text-4xl md:text-5xl" />
      </div>
      <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
        {t("hero.p0") as string}
        <br />
        {t("hero.p1") as string}{" "}
        <HeroLink title="Your Company" pointer-events href="" disabled />
        <br />
        {t("hero.p2") as string}{" "}
        <HeroLink title="OpenText" href="https://www.opentext.com/" />{" "}
        {t(",") as string}{" "}
        <HeroLink title="Intact" href="https://www.intactfc.com/about-us/intact-lab" />{" "}
        {t(",") as string}{" "}
        <HeroLink title="Bluroot" href="https://bluroot.ca/" />
        {t(" and") as string}{" "}
        <HeroLink title="WSIB" href="https://www.wsib.ca/en" />
      </p>
      <div className="flex mt-8">
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/LiaoFe/mywebsitev3"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://www.linkedin.com/in/felix-liao-998a7a24b/"
          className="mr-4"
        />
        <MediaIcon
          icon={
            <FaPaperclip className="w-6 h-6 md:w-7 md:h-7 animate-bounce hover:animate-spin" />
          }
          href="/images/FelixResumeS24.pdf"
        />
      </div>
      <div className="mt-10">
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des0") as string}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des1") as string}
          <br />
          {/* {t("hero.des2") as string}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des3") as string} */}
        </p>
      </div>
    </Container>
  );
};
