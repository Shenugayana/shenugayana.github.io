import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
    const sync = (event: StorageEvent) => {
      if (event.key !== "shenugayana-theme") return;
      const next = event.newValue === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#111310" : "#f6f6f2");
    setTheme(next);
    try { localStorage.setItem("shenugayana-theme", next); } catch { /* The theme still works when storage is unavailable. */ }
  };
  const label = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;
  return <button className="theme-toggle" onClick={toggle} aria-label={label} title={label}><Sun className="theme-sun" size={18} aria-hidden="true"/><Moon className="theme-moon" size={18} aria-hidden="true"/></button>;
}
