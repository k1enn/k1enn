import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  SiFlutter,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiMongodb,
  SiFirebase,
  SiCloudflare,
  SiPostgresql,
  SiNextdotjs,
  SiNestjs,
  SiAstro,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

const TECHNOLOGIES = [
  { name: "Java", icon: FaJava },
  { name: "Flutter", icon: SiFlutter },
  { name: ".NET Framework", icon: SiDotnet },
  { name: ".NET Core", icon: SiDotnet },
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "ReactJS", icon: SiReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Astro", icon: SiAstro },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQL Server", icon: DiMsqlServer },
  { name: "Firebase", icon: SiFirebase },
  { name: "Cloudflare", icon: SiCloudflare },
];

export default function Technology() {
  const looped = [...TECHNOLOGIES, ...TECHNOLOGIES];
  const scrollRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    let id;
    const step = () => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [paused, prefersReducedMotion]);

  return (
    <div
      style={{
        marginTop: "2rem",
        border: "2px solid #000",
        background: "#FFF",
        boxShadow: "var(--shadow-brutal)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={scrollRef}
        className="tech-row"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setTimeout(() => setPaused(false), 2000)}
        style={{
          display: "flex",
          overflowX: "auto",
          padding: 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {looped.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div key={index} className="tech-cell">
              <Icon className="tech-icon" aria-hidden="true" />
              <span className="tech-name">{tech.name}</span>
            </div>
          );
        })}
      </div>
      <style>{`
        .tech-row::-webkit-scrollbar { display: none; }
        .tech-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          min-width: 120px;
          height: 120px;
          border-right: 2px solid #000;
          background: #FFF;
          color: #000;
          transition: all 0.12s ease-out;
        }
        .tech-cell:hover { background: #000; color: #FFF; }
        .tech-icon { font-size: 36px; margin-bottom: 12px; }
        .tech-name {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0 8px;
        }
        @media (min-width: 640px) {
          .tech-cell { min-width: 140px; height: 140px; }
          .tech-icon { font-size: 44px; }
        }
      `}</style>
    </div>
  );
}
