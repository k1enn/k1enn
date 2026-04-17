import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isActive, setActiveSection] = useState("header"); // Set initial active section

  // Function to detect active section
  const detectActiveSection = () => {
    const sections = ["header", "technology", "connect", "projects"];
    let currentSection = "header"; // Default to header

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          currentSection = section;
          break;
        }
      }
    }
    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Detect active section on initial load
    detectActiveSection();

    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section on scroll
      detectActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    if (location.pathname !== "/") {
      return;
    }

    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      aria-label="Primary"
    >
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" aria-label="K1EN home">
          <span className="gradient-text">K1EN</span>
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
          <li className="nav-item">
            {/* Changed from NavLink to regular anchor to avoid conflict */}
            <a
              href="#header"
              className={`nav-link ${isActive === "header" ? "active" : ""}`}
              onClick={(e) => scrollToSection("header", e)}
            >
              Home
            </a>
          </li>
          {location.pathname === "/" && (
            <>
              <li className="nav-item">
                <a
                  href="#technology"
                  className={`nav-link ${
                    isActive === "technology" ? "active" : ""
                  }`}
                  onClick={(e) => scrollToSection("technology", e)}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#connect"
                  className={`nav-link ${
                    isActive === "connect" ? "active" : ""
                  }`}
                  onClick={(e) => scrollToSection("connect", e)}
                >
                  Connect
                </a>
              </li>
            </>
          )}
          <li className="nav-item">
            <a
              href="#projects"
              className={`nav-link ${isActive === "projects" ? "active" : ""}`}
              onClick={(e) => scrollToSection("projects", e)}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
