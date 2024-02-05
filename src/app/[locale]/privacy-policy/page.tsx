"use client";

import { useParams } from "next/navigation";
import { useI18n } from "@/utils/translate";
import Link from "next/link";

interface Translations {
  [language: string]: {};
}

const PrivacyPolicy = () => {
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center flex-col gap-8">
      <h1 dir={locale === "ar" ? "rtl" : "ltr"} className="text-6xl">
        {t("Privacy Policy")}
      </h1>

      <Link
        href={`${locale === "ar" ? "/ar" : "/en"}`}
        className="border p-2 rounded hover:bg-white hover:text-black ease-linear duration-200"
      >
        &larr; {t("Go back")}
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
