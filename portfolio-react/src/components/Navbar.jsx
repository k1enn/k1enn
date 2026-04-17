import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const SECTIONS = ["header", "technology", "connect", "projects"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("header");
  const location = useLocation();

  useEffect(() => {
    const detect = () => {
      for (const id of SECTIONS) {
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
  }, []);

  const jump = (id, e) => {
    if (location.pathname !== "/") return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setIsOpen(false);
    setActive(id);
  };

  const links =
    location.pathname === "/"
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
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      aria-label="Primary"
    >
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" aria-label="K1EN home">
          K1EN
        </NavLink>

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

        <ul
          id="primary-nav-menu"
          className={isOpen ? "nav-menu active" : "nav-menu"}
        >
          {links.map((link) => (
            <li className="nav-item" key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${active === link.id ? "active" : ""}`}
                onClick={(e) => jump(link.id, e)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
