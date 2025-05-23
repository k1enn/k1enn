import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="gradient-text">K1EN</span>
        </NavLink>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive && location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={(e) => scrollToSection("header", e)}
            >
              Home
            </NavLink>
          </li>
          {location.pathname === "/" && (
            <>
              <li className="nav-item">
                <a
                  href="#technology"
                  className="nav-link"
                  onClick={(e) => scrollToSection("technology", e)}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#connect"
                  className="nav-link"
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
              className="nav-link"
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
