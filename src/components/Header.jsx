import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";

export default function Header() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const startDate = new Date("August 1, 2023").getTime();
    const endDate = new Date("August 1, 2027").getTime();
    const currentDate = Date.now();
    const total = endDate - startDate;
    const elapsed = currentDate - startDate;
    const progress = Math.min(Math.max((elapsed / total) * 100, 0), 100);

    const delay = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        if (current >= progress) {
          clearInterval(interval);
        } else {
          current += 1;
          setProgressValue(current);
        }
      }, 40);
    }, 600);

    return () => clearTimeout(delay);
  }, []);

  const scrollToTech = () => {
    const tech = document.getElementById("technology");
    if (tech) tech.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="header"
      role="banner"
      style={{
        minHeight: "100dvh",
        background: "#FFF",
        color: "#000",
        paddingTop: "clamp(96px, 12vw, 120px)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        position: "relative",
        borderBottom: "2px solid #000",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <span style={{ display: "inline-block", width: "12px", height: "12px", background: "#000" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            VN / Back-End Dev / 2026
          </span>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 16vw, 10rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.06em",
              textTransform: "uppercase",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            Trung
            <br />
            Kien
            <span
              style={{
                display: "inline-block",
                width: "clamp(12px, 1.5vw, 18px)",
                height: "clamp(12px, 1.5vw, 18px)",
                background: "#000",
                marginLeft: "8px",
                verticalAlign: "middle",
              }}
            />
          </h1>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
          className="header-row"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
              maxWidth: "560px",
              lineHeight: 1.4,
            }}
          >
            Passionate programmer building{" "}
            <span style={{ background: "#000", color: "#FFF", padding: "0 4px" }}>server-side</span>{" "}
            systems from Vietnam. Learning out loud, shipping small.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{
              width: "100%",
              maxWidth: "320px",
              border: "2px solid #000",
              background: "#FFF",
              boxShadow: "var(--shadow-brutal)",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Road to Graduation
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700 }}>
                {progressValue.toFixed(0)}%
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "18px",
                border: "2px solid #000",
                background: "#FFF",
                position: "relative",
                overflow: "hidden",
                margin: "8px 0",
              }}
            >
              <motion.div
                style={{ background: "#000", height: "100%" }}
                animate={{ width: `${progressValue}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#737373",
              }}
            >
              <span>2023.08</span>
              <span>2027.08</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 0.8, duration: 1.6, repeat: Infinity }}
          style={{ marginTop: "clamp(2.5rem, 6vw, 4rem)", display: "inline-block" }}
        >
          <button
            type="button"
            onClick={scrollToTech}
            aria-label="Scroll to next section"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "2px solid #000",
              background: "#FFF",
              padding: "8px 16px",
              transition: "all 0.12s ease-out",
              color: "#000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#000";
              e.currentTarget.style.color = "#FFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFF";
              e.currentTarget.style.color = "#000";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
              }}
            >
              Scroll
            </span>
            <BsArrowDownShort size={20} />
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .header-row {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end;
            gap: 2rem;
          }
        }
      `}</style>
    </header>
  );
}
