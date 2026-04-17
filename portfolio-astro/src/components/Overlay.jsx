import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Overlay() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Wait for document load + 800ms (mirrors Loading island) before showing
    const start = () => {
      setTimeout(() => setMounted(true), 800);
    };
    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, [mounted]);

  if (prefersReducedMotion) return null;
  if (!mounted || !visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 1.5rem",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          marginBottom: "1rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#D4D4D4",
        }}
      >
        // booting...
      </p>
      <motion.span
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 10vw, 7rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          display: "inline-block",
        }}
      >
        <TypeAnimation sequence={["Hello there."]} speed={50} repeat={0} cursor={true} />
      </motion.span>
      <div style={{ marginTop: "1.5rem", height: "6px", width: "120px", background: "#FFF" }} />
    </motion.div>
  );
}
