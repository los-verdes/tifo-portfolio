import { useEffect, useRef, type CSSProperties } from "react";
import type { EmbedViewport } from "../App.tsx";
import { TIFO_LINKS, localizeTifo, type Tifo } from "../data/tifos.ts";
import { formatDisplayDate, UI_STRINGS, type Language } from "../i18n.ts";
import { linkify } from "./linkify.tsx";

interface LightboxProps {
  /** The tifo currently shown, or null when the lightbox is closed. */
  readonly tifo: Tifo | null;
  /** Active UI language. */
  readonly language: Language;
  /**
   * Visible slice of the embedding iframe, or null when standalone / not
   * embedded. When provided, the overlay is pinned to this slice so it stays
   * centered in the visitor's view inside a tall auto-resized iframe.
   */
  readonly viewport: EmbedViewport | null;
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
  viewport,
  onClose,
  onPrev,
  onNext,
  onToggleLanguage,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // On open and whenever the shown tifo changes (next/prev), reset every scroll
  // region to the top so each tifo starts at its image/title rather than where
  // the previous one was scrolled. Which element actually scrolls varies by
  // layout: the overlay (desktop), the modal (mobile — image + text scroll as
  // one), or the panel (older/other cases). Resetting all is harmless.
  useEffect(() => {
    overlayRef.current?.scrollTo({ top: 0 });
    modalRef.current?.scrollTo({ top: 0 });
    panelRef.current?.scrollTo({ top: 0 });
  }, [tifo?.imageSlug]);

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

  // When embedded, pin the overlay to the visible slice of the iframe instead
  // of using the default fixed full-viewport positioning (which, in a tall
  // auto-resized iframe, would place the modal far off-screen).
  const overlayStyle: CSSProperties | undefined = viewport
    ? { position: "absolute", top: viewport.top, height: viewport.height }
    : undefined;

  return (
    <div
      ref={overlayRef}
      className={`modal-overlay ${viewport ? "modal-overlay--embedded" : ""}`}
      style={overlayStyle}
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

      <div
        className="modal"
        ref={modalRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal__imgwrap">
          <img
            className="modal__img"
            src={`${import.meta.env.BASE_URL}tifos/${tifo.imageSlug}.webp`}
            alt={`${title} tifo, raised ${displayDate}`}
          />
        </div>
        <div className="modal__panel" ref={panelRef}>
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
