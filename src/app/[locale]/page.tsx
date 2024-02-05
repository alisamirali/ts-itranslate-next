"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useI18n } from "@/utils/translate";
import Link from "next/link";

interface Translations {
  [language: string]: {};
}

const Home = () => {
  const { t, setLanguage } = useI18n();
  const { locale } = useParams();

  const handleLanguageChange = () => {
    setLanguage(locale === "en" ? "ar" : "en");
    console.log("Language changed to:", locale === "en" ? "ar" : "en");
  };

  useEffect(() => {
    //
  }, [locale]);

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full h-screen bg-black flex items-center justify-center flex-col gap-8"
    >
      <button
        onClick={handleLanguageChange}
        className="border p-2 rounded hover:bg-white hover:text-black ease-linear duration-200"
      >
        {locale === "en" ? "عــربـي" : "English"}
      </button>

      <h1 className="text-6xl">{t("Home")}</h1>

      <ul className="flex items-center justify-center gap-5">
        <li className="underline">
          <Link href={`/${locale}/about`}>{t("About")}</Link>
        </li>
        <li className="underline">
          <Link href={`/${locale}/privacy-policy`}>{t("Privacy Policy")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
