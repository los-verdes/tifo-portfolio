import { useEffect, useMemo, useState } from "react";
import { TIFOS, TIFO_YEARS, type Tifo } from "./data/tifos.ts";
import { Lightbox } from "./components/Lightbox.tsx";

/** Sentinel value for the "All" year filter. */
const ALL_YEARS = "all" as const;

type YearFilter = number | typeof ALL_YEARS;

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

export function App() {
  const [activeYear, setActiveYear] = useState<YearFilter>(ALL_YEARS);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useIframeAutoResize();

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
        <h1 className="hero__title">Tifo</h1>
        <div className="hero__body">
          <p>
            The word <em>tifo</em> comes from the Italian word <em>tifosi</em>,
            meaning “supporters” or “fans.” In the soccer world, it has come to
            mean any large-scale, fan-produced visual display — whether that is
            a single image raised on a net, a large banner rolled over a
            section, a mosaic of cards raised together to create an image, or
            simple banners displayed at key moments. These messages are often
            aspirational, appreciative, political, or simply just to taunt your
            rivals, but no matter the medium or the message, the goal is the
            same: to support our team, show our passion, and create an
            atmosphere that rivals any other club in the world.
          </p>
          <p>
            Tifo is a community project that takes thousands of work-hours. From
            initial design, sewing, gridding, painting, cutting, taping,
            grommeting, and finally raising it on gameday, none of these
            projects would happen without a tremendous amount of work. While we
            host these images on the Los Verdes website, each of these tifos
            represents the volunteers, donations, and support of all Austin FC
            supporters and supporters groups like{" "}
            <a href="https://austinanthem.org/" target="_blank" rel="noopener noreferrer">
              Austin Anthem
            </a>
            ,{" "}
            <a href="https://lamurgadeaustin.org/" target="_blank" rel="noopener noreferrer">
              La Murga de Austin
            </a>
            ,{" "}
            <a href="https://www.collectifoatx.org/" target="_blank" rel="noopener noreferrer">
              Collectifo
            </a>
            ,{" "}
            <a href="https://www.fightinglesliesdc.com/#/" target="_blank" rel="noopener noreferrer">
              Fighting Leslies
            </a>
            , and many others.
          </p>
          <p>
            We’d also like to show our appreciation to all the local businesses
            like{" "}
            <a href="https://www.hopsquad.com/" target="_blank" rel="noopener noreferrer">
              Hopsquad Brewing Co
            </a>
            ,{" "}
            <a href="https://www.southernheightsbrewing.com/" target="_blank" rel="noopener noreferrer">
              Southern Heights Brewing Company
            </a>
            ,{" "}
            <a href="https://austinbeerworks.com/" target="_blank" rel="noopener noreferrer">
              Austin Beerworks
            </a>
            ,{" "}
            <a href="https://www.zachtheater.org/" target="_blank" rel="noopener noreferrer">
              Zach Theatre
            </a>
            ,{" "}
            <a href="https://www.thesteamteam.com/" target="_blank" rel="noopener noreferrer">
              Steam Team
            </a>
            , and the{" "}
            <a href="https://www.instagram.com/danipereira09/" target="_blank" rel="noopener noreferrer">
              Austin FC front office
            </a>{" "}
            that have let us use their spaces over the years, as we couldn’t
            create these without a roof over our heads.
          </p>
          <p>
            In addition to the energy and space it takes to create these giant
            displays, the cost to buy fabric, paint, brushes, and so, so, so
            much tape also adds up. You can support future tifos by becoming a{" "}
            <a
              href="https://store.losverdesatx.org/2026-los-verdes-annual-membership/"
              target="_blank"
              rel="noopener noreferrer"
            >
              member of Los Verdes
            </a>
            , purchasing{" "}
            <a
              href="https://store.losverdesatx.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              merch
            </a>
            , or donating to us directly. And if you’d like to be part of
            creating our next tifo, follow us on{" "}
            <a
              href="https://www.instagram.com/losverdesatx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://bsky.app/profile/losverdesatx.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bluesky
            </a>
            , and{" "}
            <a
              href="https://facebook.com/LosVerdesATX/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            , or join #team-tifo in LV Slack for more information!
          </p>
          <p className="hero__cta">¡Listos Verde!</p>
        </div>
      </header>

      <div className="filters" role="group" aria-label="Filter tifos by year">
        <span className="filters__label">Filter by year:</span>
        <button
          className={`chip ${activeYear === ALL_YEARS ? "chip--active" : ""}`}
          onClick={() => {
            setActiveYear(ALL_YEARS);
            setActiveIndex(null);
          }}
        >
          All
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
        {visibleTifos.map((tifo, index) => (
          <button
            key={tifo.imageSlug}
            className="card"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${tifo.title} (${tifo.displayDate})`}
          >
            <div className="card__imgwrap">
              <span className="card__year">{tifo.isoDate.slice(0, 4)}</span>
              <img
                className="card__img"
                src={`${import.meta.env.BASE_URL}tifos/thumbs/${tifo.imageSlug}.webp`}
                alt={`${tifo.title} tifo`}
                loading="lazy"
              />
            </div>
            <div className="card__body">
              <h3 className="card__title">{tifo.title}</h3>
              <p className="card__meta">
                {tifo.displayDate} · vs <strong>{tifo.opponent}</strong>
              </p>
            </div>
          </button>
        ))}
      </section>

      <footer className="footer">
        <p>
          A portfolio of tifo displays created by{" "}
          <strong>Los Verdes</strong> and Austin FC supporters.{" "}
          <a href="https://losverdesatx.org" target="_blank" rel="noopener noreferrer">
            losverdesatx.org
          </a>
        </p>
      </footer>

      <Lightbox
        tifo={activeTifo}
        onClose={() => setActiveIndex(null)}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  );
}
