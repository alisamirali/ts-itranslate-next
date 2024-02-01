"use client";

import { useParams } from "next/navigation";
import { useI18n } from "@/utils/translate";

interface Translations {
  [language: string]: {};
}

const About = () => {
  // Use the useI18n hook to get the translation function
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full h-screen bg-black flex items-center justify-center"
    >
      <h1 className="text-6xl">{t("About")}</h1>
    </div>
  );
};

export default About;
