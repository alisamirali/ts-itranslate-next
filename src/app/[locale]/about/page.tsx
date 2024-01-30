"use client";

import { useParams } from "next/navigation";
import I18n from "../../../lib";

interface Translations {
  [language: string]: {
    greeting: string;
  };
}

const translations: Translations = {
  en: {
    greeting: "About",
  },
  ar: {
    greeting: "نبذة عنا",
  },
};

const About = () => {
  const { locale: requestedLocale } = useParams();

  // Treat "en" as the default language if no locale is specified
  const locale = (requestedLocale as string) || "en";

  // Create an instance of I18n with the detected language
  const i18n = new I18n(locale, translations);

  const greeting = i18n.translate("greeting");

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full h-screen bg-teal-600 flex items-center justify-center"
    >
      <h1 className="text-6xl">{greeting}</h1>
    </div>
  );
};

export default About;
