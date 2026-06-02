import { useEffect } from "react";
import { TIFO_LINKS, type Tifo } from "../data/tifos.ts";
import { linkify } from "./linkify.tsx";

interface LightboxProps {
  /** The tifo currently shown, or null when the lightbox is closed. */
  readonly tifo: Tifo | null;
  readonly onClose: () => void;
  readonly onPrev: () => void;
  readonly onNext: () => void;
}

/**
 * Full-screen modal that shows a single tifo's full-resolution image alongside
 * its full write-up. Supports keyboard navigation (Esc to close, arrows to
 * page between tifos) and locks background scroll while open.
 */
export function Lightbox({ tifo, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!tifo) {
      return;
    }

    const handleKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [tifo, onClose, onPrev, onNext]);

  if (!tifo) {
    return null;
  }

  const year = tifo.isoDate.slice(0, 4);
  const inlineLinks = TIFO_LINKS[tifo.imageSlug] ?? [];

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${tifo.title} tifo details`}
      onClick={onClose}
    >
      <button className="modal__close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button
        className="modal__nav modal__nav--prev"
        aria-label="Previous tifo"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
      >
        ‹
      </button>
      <button
        className="modal__nav modal__nav--next"
        aria-label="Next tifo"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
      >
        ›
      </button>

      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal__imgwrap">
          <img
            className="modal__img"
            src={`${import.meta.env.BASE_URL}tifos/${tifo.imageSlug}.webp`}
            alt={`${tifo.title} tifo, raised ${tifo.displayDate}`}
          />
        </div>
        <div className="modal__panel">
          <p className="modal__year">{year}</p>
          <h2 className="modal__title">{tifo.title}</h2>
          <ul className="modal__facts">
            <li>
              <span className="k">Date</span>
              {tifo.displayDate}
            </li>
            <li>
              <span className="k">Opponent</span>
              {tifo.opponent}
            </li>
            <li>
              <span className="k">Artist</span>
              {linkify(tifo.artist, inlineLinks)}
            </li>
          </ul>
          <p className="modal__desc">
            {linkify(tifo.description, inlineLinks)}
          </p>
          <p className="modal__credit">Photo by {tifo.photoCredit}</p>
          <div className="modal__links">
            {tifo.sourceUrl ? (
              <a
                className="modal__link"
                href={tifo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View original photo →
              </a>
            ) : null}
            {tifo.blogUrl ? (
              <a
                className="modal__link"
                href={tifo.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the blog post →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
