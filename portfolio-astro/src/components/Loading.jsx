import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => {
      setTimeout(() => setVisible(false), 800);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    return () => window.removeEventListener("load", hide);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFFFFF",
        zIndex: 9999,
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", gap: "8px" }}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            style={{ width: "14px", height: "40px", background: "#000000" }}
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.12,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#000",
        }}
      >
        Loading
      </p>
    </div>
  );
}
