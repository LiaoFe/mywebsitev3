import { Container, Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const Contact: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("contact.title") as string}
      description={t("contact.description") as string}
    >
      <Container>
        <div className="mt-4">
          <a
            href="mailto:f4liao@uwaterloo.ca"
            className="text-base font-medium md:text-xl text-black-900 dark:text-white-900"
          >
            felix.liao@uwaterloo.ca
          </a>
        </div>
      </Container>
    </Section>
  );
};
