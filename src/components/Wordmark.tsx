/** One mark shared by the header and the introductory reveal. */
export function Wordmark({ expanded = false }: { expanded?: boolean }) {
  return <span className="brand-wordmark" aria-hidden="true"><span className="brand-initial">S</span>{expanded && <span className="brand-remainder">henugayana</span>}</span>;
}
