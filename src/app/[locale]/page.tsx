"use client";

import React, { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";
import { useI18n } from "@/utils/translate";
import Link from "next/link";

const Home = () => {
  const { t } = useI18n();
  const { locale } = useParams();
  const router = useRouter();
  // useState to store the current language
  const [language, setLanguage] = useState(locale || "en");

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    router.push(`/${newLanguage}`);
  };

  // Update lang state when locale changes
  useEffect(() => {
    setLanguage(locale || "en");
  }, [locale]);

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="w-full h-screen bg-black flex items-center justify-center flex-col gap-8"
    >
      <button
        onClick={handleLanguageChange}
        className="border p-2 rounded hover:bg-white hover:text-black ease-linear duration-200"
      >
        {language === "en" ? "عــربـي" : "English"}
      </button>

      <h1 className="text-6xl">{t("Home")}</h1>

      <ul className="flex items-center justify-center gap-5">
        <li className="underline">
          <Link href={`/${language}/about`}>{t("About")}</Link>
        </li>
        <li className="underline">
          <Link href={`/${language}/privacy-policy`}>
            {t("Privacy Policy")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
