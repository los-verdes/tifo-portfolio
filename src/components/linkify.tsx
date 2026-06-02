import { Fragment, type ReactNode } from "react";
import type { InlineLink } from "../data/tifos.ts";

/**
 * Wraps each `InlineLink.text` occurrence found in `source` with an anchor,
 * leaving the surrounding text untouched. Matches are applied left-to-right and
 * never overlap: once a span of the source is consumed by one link it cannot be
 * matched again, so the first link whose text appears earliest wins.
 *
 * This lets the tifo descriptions and artist credits carry the same inline
 * hyperlinks the source document had (artist Instagram profiles, etc.) without
 * storing HTML in the data.
 */
export function linkify(source: string, links: readonly InlineLink[]): ReactNode {
  if (links.length === 0) {
    return source;
  }

  // Find the earliest, non-overlapping match for each link, then render the
  // string as alternating plain-text and anchor segments.
  type Match = { start: number; end: number; url: string };
  const matches: Match[] = [];
  const claimed: Array<[number, number]> = [];

  const overlaps = (start: number, end: number): boolean =>
    claimed.some(([cStart, cEnd]) => start < cEnd && end > cStart);

  // Process links in their declared order so repeated names (e.g. several
  // "Joel Corral" mentions) each consume the next available occurrence.
  for (const link of links) {
    let searchFrom = 0;
    let index = source.indexOf(link.text, searchFrom);
    while (index !== -1) {
      const end = index + link.text.length;
      if (!overlaps(index, end)) {
        matches.push({ start: index, end, url: link.url });
        claimed.push([index, end]);
        break;
      }
      searchFrom = index + 1;
      index = source.indexOf(link.text, searchFrom);
    }
  }

  if (matches.length === 0) {
    return source;
  }

  matches.sort((a, b) => a.start - b.start);

  const segments: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((match, i) => {
    if (match.start > cursor) {
      segments.push(
        <Fragment key={`t${i}`}>{source.slice(cursor, match.start)}</Fragment>,
      );
    }
    segments.push(
      <a
        key={`l${i}`}
        href={match.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {source.slice(match.start, match.end)}
      </a>,
    );
    cursor = match.end;
  });
  if (cursor < source.length) {
    segments.push(<Fragment key="tail">{source.slice(cursor)}</Fragment>);
  }

  return segments;
}
