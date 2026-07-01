import { useEffect, useMemo, useState } from "react";
import { TIFOS, TIFO_YEARS, localizeTifo, type Tifo } from "./data/tifos.ts";
import { Lightbox } from "./components/Lightbox.tsx";
import { HeroBody } from "./components/HeroBody.tsx";
import {
  detectLanguage,
  formatDisplayDate,
  persistLanguage,
  UI_STRINGS,
  type Language,
} from "./i18n.ts";

/** Sentinel value for the "All" year filter. */
const ALL_YEARS = "all" as const;

type YearFilter = number | typeof ALL_YEARS;

/**
 * The slice of the (auto-resized) iframe that is currently visible in the
 * parent page, in the iframe's own content coordinates. The parent posts this
 * so the lightbox can center itself in view; see {@link useParentViewport}.
 */
export interface EmbedViewport {
  /** Distance, in px, from the iframe's top to the top of the visible slice. */
  readonly top: number;
  /** Height, in px, of the visible slice. */
  readonly height: number;
}

/**
 * Posts the document height to the parent window so a Squarespace iframe can
 * resize itself to fit the content (no inner scrollbar). The parent page must
 * include the matching listener snippet from EMBED.md.
 */
function useIframeAutoResize(): void {
  useEffect(() => {
    const postHeight = (): void => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage(
        { type: "tifo-portfolio:height", height },
        "*",
      );
    };

    postHeight();
    const observer = new ResizeObserver(postHeight);
    observer.observe(document.documentElement);
    window.addEventListener("load", postHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", postHeight);
    };
  }, []);
}

/**
 * Tracks which slice of the iframe is visible in the parent page.
 *
 * When auto-resizing, the iframe is as tall as its content, so a `position:
 * fixed` modal would center in the middle of that tall frame — far off-screen.
 * The parent listens for our `request-viewport` message and replies with a
 * `tifo-portfolio:viewport` message describing the visible slice (in the
 * iframe's own coordinates). We ask for it whenever `enabled` flips true (i.e.
 * the lightbox opens) and keep it fresh while open.
 *
 * Returns `null` when no parent answers — e.g. the standalone site, an older
 * embed snippet, or when not embedded — so callers can fall back to normal
 * fixed-viewport centering.
 */
function useParentViewport(enabled: boolean): EmbedViewport | null {
  const [viewport, setViewport] = useState<EmbedViewport | null>(null);

  useEffect(() => {
    if (!enabled) {
      setViewport(null);
      return;
    }

    const handleMessage = (event: MessageEvent): void => {
      const data = event.data;
      if (
        data &&
        data.type === "tifo-portfolio:viewport" &&
        typeof data.top === "number" &&
        typeof data.height === "number"
      ) {
        setViewport({ top: data.top, height: data.height });
      }
    };

    const requestViewport = (): void => {
      window.parent.postMessage({ type: "tifo-portfolio:request-viewport" }, "*");
    };

    window.addEventListener("message", handleMessage);
    requestViewport();

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [enabled]);

  return viewport;
}

export function App() {
  const [activeYear, setActiveYear] = useState<YearFilter>(ALL_YEARS);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [language, setLanguage] = useState<Language>(() => detectLanguage());

  const strings = UI_STRINGS[language];

  useIframeAutoResize();
  const modalOpen = activeIndex !== null;
  const parentViewport = useParentViewport(modalOpen);

  // Ask the parent page to lock its scroll while the lightbox is open, so the
  // host page behind the (cross-origin) iframe can't scroll underneath it. The
  // parent restores scrolling on unlock; older embed snippets simply ignore
  // these messages. See EMBED.md.
  useEffect(() => {
    const type = modalOpen
      ? "tifo-portfolio:lock-scroll"
      : "tifo-portfolio:unlock-scroll";
    window.parent.postMessage({ type }, "*");
    return () => {
      if (modalOpen) {
        window.parent.postMessage(
          { type: "tifo-portfolio:unlock-scroll" },
          "*",
        );
      }
    };
  }, [modalOpen]);

  // Keep the document language in sync for assistive tech and `lang`-scoped CSS,
  // and persist the choice so repeat visitors keep their preferred language.
  useEffect(() => {
    document.documentElement.lang = language;
    persistLanguage(language);
  }, [language]);

  const toggleLanguage = (): void => {
    setLanguage((current) => (current === "en" ? "es" : "en"));
  };

  // Tifos shown newest-first; the source data is oldest-first.
  const orderedTifos = useMemo<readonly Tifo[]>(
    () => [...TIFOS].sort((a, b) => b.isoDate.localeCompare(a.isoDate)),
    [],
  );

  const visibleTifos = useMemo<readonly Tifo[]>(() => {
    if (activeYear === ALL_YEARS) {
      return orderedTifos;
    }
    return orderedTifos.filter(
      (tifo) => new Date(tifo.isoDate).getUTCFullYear() === activeYear,
    );
  }, [orderedTifos, activeYear]);

  const activeTifo = activeIndex === null ? null : visibleTifos[activeIndex];

  const showPrev = (): void => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + visibleTifos.length) % visibleTifos.length,
    );
  };

  const showNext = (): void => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % visibleTifos.length,
    );
  };

  return (
    <div className="app">
      <header className="hero">
        <button
          className="lang-toggle"
          onClick={toggleLanguage}
          aria-label={strings.languageToggleAria}
        >
          {strings.languageToggleLabel}
        </button>
        <h1 className="hero__title">{strings.heroTitle}</h1>
        <HeroBody language={language} />
        <p className="hero__cta">{strings.heroCta}</p>
      </header>

      <div className="filters" role="group" aria-label={strings.filtersLabel}>
        <span className="filters__label">{strings.filtersLabel}</span>
        <button
          className={`chip ${activeYear === ALL_YEARS ? "chip--active" : ""}`}
          onClick={() => {
            setActiveYear(ALL_YEARS);
            setActiveIndex(null);
          }}
        >
          {strings.filterAll}
        </button>
        {TIFO_YEARS.map((year) => (
          <button
            key={year}
            className={`chip ${activeYear === year ? "chip--active" : ""}`}
            onClick={() => {
              setActiveYear(year);
              setActiveIndex(null);
            }}
          >
            {year}
          </button>
        ))}
      </div>

      <section className="grid">
        {visibleTifos.map((tifo, index) => {
          const { title } = localizeTifo(tifo, language);
          const displayDate = formatDisplayDate(tifo.isoDate, language);
          return (
            <button
              key={tifo.imageSlug}
              className="card"
              onClick={() => setActiveIndex(index)}
              aria-label={strings.openTifoAria(title, displayDate)}
            >
              <div className="card__imgwrap">
                <span className="card__year">{tifo.isoDate.slice(0, 4)}</span>
                <img
                  className="card__img"
                  src={`${import.meta.env.BASE_URL}tifos/thumbs/${tifo.imageSlug}.webp`}
                  alt={`${title} tifo`}
                  loading="lazy"
                />
              </div>
              <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="card__meta">
                  {displayDate} · {strings.versus}{" "}
                  <strong>{tifo.opponent}</strong>
                </p>
              </div>
            </button>
          );
        })}
      </section>

      <footer className="footer">
        <p>
          {strings.footerPrefix}
          <strong>{strings.footerOrg}</strong>
          {strings.footerSuffix}
          <a href="https://losverdesatx.org" target="_blank" rel="noopener noreferrer">
            losverdesatx.org
          </a>
        </p>
      </footer>

      <Lightbox
        tifo={activeTifo}
        language={language}
        viewport={parentViewport}
        onClose={() => setActiveIndex(null)}
        onPrev={showPrev}
        onNext={showNext}
        onToggleLanguage={toggleLanguage}
      />
    </div>
  );
}
