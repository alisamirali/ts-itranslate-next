"use client";

import { useParams } from "next/navigation";
import { useI18n } from "@/utils/translate";

interface Translations {
  [language: string]: {};
}

const PrivacyPolicy = () => {
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full h-screen bg-black flex items-center justify-center"
    >
      <h1 className="text-6xl">{t("Privacy Policy")}</h1>
    </div>
  );
};

export default PrivacyPolicy;
