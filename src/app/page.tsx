"use client";

import { useParams } from "next/navigation";
import I18n from "../lib";

const translations = {
  en: {
    greeting: "Hello!",
  },
  ar: {
    greeting: "مرحبا!",
  },
};

const Home = () => {
  const params = useParams();
  const lang = params.lang;

  // Fallback to "en" if lang is not present or not supported
  const urlLanguage = lang === "ar" || lang === "en" ? lang : "en";

  // Create an instance of I18n with the detected language
  const i18n = new I18n(urlLanguage, translations);

  const greeting = i18n.translate("greeting");

  return (
    <div className="w-full h-screen bg-teal-600 flex items-center justify-center">
      <h1 className="text-6xl">{greeting}</h1>
    </div>
  );
};

export default Home;
