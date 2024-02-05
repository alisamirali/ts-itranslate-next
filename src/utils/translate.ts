import { useParams } from "next/navigation";
import I18n from "../lib";

// Define the structure of a single translation file
interface TranslationMap {
  [key: string]: string;
}

// Define an object with references to the JSON files
interface Translations {
  [language: string]: TranslationMap;
}

// Import JSON files directly
import en from "../lib/translations/en.json";
import ar from "../lib/translations/ar.json";

const translationFiles: Translations = {
  en,
  ar,
  // Add more languages as needed
};

export const useI18n = () => {
  const { locale: requestedLocale } = useParams();

  // Treat "en" as the default language if no locale is specified
  const locale = (requestedLocale as string) || "en";

  // Get translations directly from the imported JSON file
  const translations: TranslationMap = translationFiles[locale] || {};

  /*
   ** -----------------------
   */
  // console.log("-----------------------");
  // console.log("Locale:", locale);
  // console.log("-----------------------");
  // console.log("Translations:", translations);
  // console.log("-----------------------");
  /*
   ** -----------------------
   */

  // Create an instance of I18n with the detected language and translations
  const i18n = new I18n(locale, { [locale]: translations });

  // Set the default language
  // i18n.setLanguage(locale);

  return {
    t: (key: string) => i18n.translate(key),
    setLanguage: (language: string) => i18n.setLanguage(language),
  };
};
