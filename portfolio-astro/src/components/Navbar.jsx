import { useEffect, useState } from "react";

const HOME_SECTIONS = ["header", "technology", "connect", "projects"];

export default function Navbar({ pathname = "/" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("header");
  const isHome = pathname === "/";

  useEffect(() => {
    const detect = () => {
      if (!isHome) return;
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          setActive(id);
          return;
        }
      }
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      detect();
    };

    detect();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const jump = (id, e) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setIsOpen(false);
    setActive(id);
  };

  const links = isHome
    ? [
        { id: "header", label: "Home" },
        { id: "technology", label: "Tech" },
        { id: "connect", label: "Connect" },
        { id: "projects", label: "Projects" },
      ]
    : [
        { id: "header", label: "Home" },
        { id: "projects", label: "Projects" },
      ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Primary">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" aria-label="K1EN home">
          K1EN
        </a>

        <button
          type="button"
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-nav-menu"
        >
          <div className={`hamburger ${isOpen ? "active" : ""}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <ul id="primary-nav-menu" className={isOpen ? "nav-menu active" : "nav-menu"}>
          {links.map((link) => {
            const href = isHome ? `#${link.id}` : link.id === "header" ? "/" : "/projects";
            return (
              <li className="nav-item" key={link.id}>
                <a
                  href={href}
                  className={`nav-link ${active === link.id ? "active" : ""}`}
                  onClick={(e) => jump(link.id, e)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
