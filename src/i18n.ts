// Internationalization for the tifo portfolio.
//
// Two languages are supported: English ("en") and Spanish ("es"). The active
// language is resolved once on load from (in priority order) a previously saved
// choice in localStorage, then the browser's preferred languages, then English.
// A visible toggle in the UI lets visitors switch and that choice is persisted.

export type Language = "en" | "es";

export const LANGUAGES: readonly Language[] = ["en", "es"] as const;

/** localStorage key under which the visitor's explicit language choice lives. */
const STORAGE_KEY = "tifo-portfolio:lang";

/**
 * Reads the visitor's preferred language. A previously saved explicit choice
 * always wins; otherwise the browser's `navigator.languages` are scanned for
 * the first Spanish or English match. Defaults to English when nothing matches
 * or when storage is unavailable (e.g. privacy modes throwing on access).
 */
export function detectLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") {
      return saved;
    }
  } catch {
    // Ignore storage access errors and fall through to browser detection.
  }

  const preferredLanguages: readonly string[] =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const tag of preferredLanguages) {
    const primarySubtag = tag.toLowerCase().split("-")[0];
    if (primarySubtag === "es" || primarySubtag === "en") {
      return primarySubtag;
    }
  }

  return "en";
}

/** Persists the visitor's explicit language choice, ignoring storage errors. */
export function persistLanguage(language: Language): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Persistence is best-effort; a failure here is non-fatal.
  }
}

/**
 * Formats an ISO date (YYYY-MM-DD) as a localized human-readable string. The
 * date is interpreted in UTC so the day never shifts across timezones, matching
 * how the year filter reads `isoDate`.
 */
export function formatDisplayDate(isoDate: string, language: Language): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  const locale = language === "es" ? "es-MX" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** A single set of fixed UI strings (everything that is not tifo content). */
interface UIStrings {
  /** Visible label on the language toggle for switching to the OTHER language. */
  readonly languageToggleLabel: string;
  /** Accessible name describing what the toggle does. */
  readonly languageToggleAria: string;
  readonly heroTitle: string;
  /** Hero body paragraphs are rendered as JSX (they carry links), so they live
   *  in the components rather than here; only plain strings belong in i18n. */
  readonly heroCta: string;
  readonly filtersLabel: string;
  readonly filterAll: string;
  readonly footerPrefix: string;
  readonly footerOrg: string;
  readonly footerSuffix: string;
  readonly modalClose: string;
  readonly modalPrev: string;
  readonly modalNext: string;
  readonly modalDateKey: string;
  readonly modalOpponentKey: string;
  readonly modalArtistKey: string;
  /** "vs" connector shown on each card between date and opponent. */
  readonly versus: string;
  /** Photo credit prefix, e.g. "Photo by" / "Fotografía por". */
  readonly photoBy: string;
  readonly viewOriginalPhoto: string;
  readonly readBlogPost: string;
  /** Accessible label builder for opening a tifo card. */
  readonly openTifoAria: (title: string, date: string) => string;
}

export const UI_STRINGS: Readonly<Record<Language, UIStrings>> = {
  en: {
    languageToggleLabel: "Español",
    languageToggleAria: "Cambiar a español / Switch to Spanish",
    heroTitle: "Tifo",
    heroCta: "¡Listos Verde!",
    filtersLabel: "Filter by year:",
    filterAll: "All",
    footerPrefix: "A portfolio of tifo displays created by ",
    footerOrg: "Los Verdes",
    footerSuffix: " and Austin FC supporters. ",
    modalClose: "Close",
    modalPrev: "Previous tifo",
    modalNext: "Next tifo",
    modalDateKey: "Date",
    modalOpponentKey: "Opponent",
    modalArtistKey: "Artist",
    versus: "vs",
    photoBy: "Photo by",
    viewOriginalPhoto: "View original photo →",
    readBlogPost: "Read the blog post →",
    openTifoAria: (title, date) => `Open ${title} (${date})`,
  },
  es: {
    languageToggleLabel: "English",
    languageToggleAria: "Switch to English / Cambiar a inglés",
    heroTitle: "Tifo",
    heroCta: "¡Listos, Verde!",
    filtersLabel: "Filtrar por año:",
    filterAll: "Todos",
    footerPrefix: "Una galería de tifos creados por ",
    footerOrg: "Los Verdes",
    footerSuffix: " y la afición de Austin FC. ",
    modalClose: "Cerrar",
    modalPrev: "Tifo anterior",
    modalNext: "Tifo siguiente",
    modalDateKey: "Fecha",
    modalOpponentKey: "Rival",
    modalArtistKey: "Artista",
    versus: "vs",
    photoBy: "Fotografía por",
    viewOriginalPhoto: "Ver foto original →",
    readBlogPost: "Leer la publicación del blog →",
    openTifoAria: (title, date) => `Abrir ${title} (${date})`,
  },
};
