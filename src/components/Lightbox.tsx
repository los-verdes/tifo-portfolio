import { useEffect } from "react";
import { TIFO_LINKS, localizeTifo, type Tifo } from "../data/tifos.ts";
import { formatDisplayDate, UI_STRINGS, type Language } from "../i18n.ts";
import { linkify } from "./linkify.tsx";

interface LightboxProps {
  /** The tifo currently shown, or null when the lightbox is closed. */
  readonly tifo: Tifo | null;
  /** Active UI language. */
  readonly language: Language;
  readonly onClose: () => void;
  readonly onPrev: () => void;
  readonly onNext: () => void;
  /** Toggles between the supported languages without closing the lightbox. */
  readonly onToggleLanguage: () => void;
}

/**
 * Full-screen modal that shows a single tifo's full-resolution image alongside
 * its full write-up. Supports keyboard navigation (Esc to close, arrows to
 * page between tifos) and locks background scroll while open.
 */
export function Lightbox({
  tifo,
  language,
  onClose,
  onPrev,
  onNext,
  onToggleLanguage,
}: LightboxProps) {
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

  const strings = UI_STRINGS[language];
  const { title, description } = localizeTifo(tifo, language);
  const displayDate = formatDisplayDate(tifo.isoDate, language);
  const year = tifo.isoDate.slice(0, 4);
  const inlineLinks = TIFO_LINKS[tifo.imageSlug] ?? [];

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} tifo details`}
      onClick={onClose}
    >
      <button
        className="modal__close"
        aria-label={strings.modalClose}
        onClick={onClose}
      >
        ×
      </button>
      <button
        className="modal__nav modal__nav--prev"
        aria-label={strings.modalPrev}
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
      >
        ‹
      </button>
      <button
        className="modal__nav modal__nav--next"
        aria-label={strings.modalNext}
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
            alt={`${title} tifo, raised ${displayDate}`}
          />
        </div>
        <div className="modal__panel">
          <button
            className="lang-toggle lang-toggle--modal"
            onClick={onToggleLanguage}
            aria-label={strings.languageToggleAria}
          >
            {strings.languageToggleLabel}
          </button>
          <p className="modal__year">{year}</p>
          <h2 className="modal__title">{title}</h2>
          <ul className="modal__facts">
            <li>
              <span className="k">{strings.modalDateKey}</span>
              {displayDate}
            </li>
            <li>
              <span className="k">{strings.modalOpponentKey}</span>
              {tifo.opponent}
            </li>
            <li>
              <span className="k">{strings.modalArtistKey}</span>
              {linkify(tifo.artist, inlineLinks)}
            </li>
          </ul>
          <p className="modal__desc">{linkify(description, inlineLinks)}</p>
          <p className="modal__credit">
            {strings.photoBy} {tifo.photoCredit}
          </p>
          <div className="modal__links">
            {tifo.sourceUrl ? (
              <a
                className="modal__link"
                href={tifo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {strings.viewOriginalPhoto}
              </a>
            ) : null}
            {tifo.blogUrl ? (
              <a
                className="modal__link"
                href={tifo.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {strings.readBlogPost}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
