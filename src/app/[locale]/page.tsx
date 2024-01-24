"use client";

import { useParams } from "next/navigation";
import I18n from "../../lib";

const translations = {
  en: {
    greeting: "Hello!",
  },
  ar: {
    greeting: "مرحبًا!",
  },
};

const Home = () => {
  const params = useParams();
  const locale = params.locale || "en";

  // Fallback to "en" if locale is not present or not supported
  const urlLanguage = locale === "ar" || locale === "en" ? locale : "en";

  // Create an instance of I18n with the detected language
  const i18n = new I18n(urlLanguage, translations);

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

export default Home;
