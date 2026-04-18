export const locales = ["tr", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const futureLocales = ["de", "ar", "fr", "it"] as const;

export const localeLabels: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  ru: "Русский",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function getBasePath() {
  return import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
}

export function getLocalizedPath(locale: Locale, hash = "") {
  const normalizedHash = hash && !hash.startsWith("#") ? `#${hash}` : hash;
  return `${getBasePath()}${locale}/${normalizedHash}`;
}
