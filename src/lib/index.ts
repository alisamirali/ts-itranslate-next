/**
 * Represents a mapping of translation keys to corresponding strings in a specific language.
 */
type TranslationMap = {
  [key: string]: string;
};

/**
 * Internationalization (i18n) class for managing language switching and translation.
 */
class I18n {
  /**
   * Initializes a new instance of the I18n class.
   * @param currentLanguage - The default language to use.
   * @param translations - A dictionary containing language-specific translation maps.
   */
  public constructor(
    private currentLanguage: string,
    private translations: { [lang: string]: TranslationMap }
  ) {
    //
  }

  /**
   * Sets the current language for translations.
   * @param language - The language code to set as the current language.
   */
  private setLanguage(language: string) {
    this.currentLanguage = language;
  }

  /**
   * Translates a given key to the currently set language.
   * @param key - The translation key to look up.
   * @returns The translated string for the given key, or the key itself if not found.
   */
  translate(key: string) {
    const translationMap = this.translations[this.currentLanguage];
    return translationMap ? translationMap[key] || key : key;
  }
}

export default I18n;
