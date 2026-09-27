import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  GitBranch as Github,
  Download,
} from "lucide-react";
import { profile } from "../data/profile";
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    if (window.location.pathname.replace(/\/$/, "").startsWith("/projects")) {
      setActive("projects");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActive(
              ["home", "projects"].includes(entry.target.id)
                ? "home"
                : entry.target.id,
            );
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 },
    );
    ["home", "projects", "about", "experience", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  const links = [
    ["Home", "home", "/"],
    ["Projects", "projects", "/projects/"],
    ["About", "about", "/#about"],
    ["Experience", "experience", "/#experience"],
    ["Contact", "contact", "/#contact"],
  ];
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="/" aria-label="Shenugayana — home">
            <Wordmark />
            <span className="wordmark-name">Shenugayana</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, id, href]) => (
              <a
                key={id}
                href={href}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <a className="cv-link" href={profile.cv} download>
              Download CV <Download size={15} aria-hidden="true" />
            </a>
            <button
              className="menu-button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                document
                  .querySelector<HTMLButtonElement>(".menu-button")
                  ?.focus();
              }
            }}
          >
            {links.map(([label, id, href]) => (
              <a key={id} onClick={() => setOpen(false)} href={href}>
                {label}
              </a>
            ))}
            <a href={profile.cv} download>
              Download CV
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <p>© {new Date().getFullYear()} Shenugayana</p>
      <span>Software. Systems. Intelligence.</span>
      <a href="#top">
        Back to top <ArrowUp size={15} />
      </a>
    </footer>
  );
}
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Let’s build
            <br />
            something thoughtful.
          </h2>
          <p>For engineering opportunities, research, or collaboration.</p>
        </div>
        <div className="contact-links">
          <a className="email-link" href={"mailto:" + profile.email}>
            {profile.email}
            <ArrowUpRight />
          </a>
          <div className="social-links">
            <ExternalLink href={profile.github}>
              <Github size={17} />
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <a href={profile.cv} download>
              Download CV <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function SectionHeading({
  number,
  title,
  note,
}: {
  number: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{number}</p>
        <h2>{title}</h2>
      </div>
      {note && <p>{note}</p>}
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
