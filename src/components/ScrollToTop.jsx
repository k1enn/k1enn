import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.2 } });
    } else {
      controls.start({ opacity: 0, y: 16, transition: { duration: 0.15 } });
    }
  }, [isVisible, controls]);

  return (
    <motion.button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      animate={controls}
      initial={{ opacity: 0, y: 16 }}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        zIndex: 99,
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#FFF",
        border: "2px solid #000",
        boxShadow: "var(--shadow-brutal)",
        cursor: "pointer",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <FaArrowUp aria-hidden="true" />
    </motion.button>
  );
}
