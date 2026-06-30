import { useState } from "react";

import Centro from "../image/Centro.png"; 
import pyp from "../image/pyp.png";
import Danjo from "../image/Danjo.png";
import Occygea from "../image/Occygea.png";
import Portaldelacapilla from "../image/Portaldelacapilla.png";
import seminario from "../image/Seminario.png";
import Daniel from "../image/Daniel.png";
import Panaderia from "../image/Panaderia.png";
const partners = [
  { name: "Tienda comercializadora", abbr: "DP", logoFile: pyp}, 
  { name: "Centro Optivisión", abbr: "CO", logoFile: Centro },              
  { name: "DANJO construciones", abbr: "DN", logoFile: Danjo },
  { name: "Occygea S.A.S", abbr: "EC", logoFile: Occygea },
  { name: "Portal de la capilla", abbr: "CO", logoFile: Portaldelacapilla },
  { name: "Seminario Diocesano Santo Tomas de Aquino", abbr: "LM", logoFile: seminario },
  { name: "Daniel Ingeniero", abbr: "CK", logoFile: Daniel },
  { name: "Panadería la san jose S.A.S", abbr: "EL", logoFile: Panaderia },
];

function LogoCard({ partner }) {
  const [isHovered, setIsHovered] = useState(false);

  // El fondo se mantiene blanco para resaltar los logos, el borde cambia a verde al pasar el mouse
  const activeClasses = isHovered
    ? "border-green-500 shadow-xl -translate-y-1 scale-105"
    : "border-slate-100 shadow-sm bg-white text-slate-700";

  return (
    <div 
      className={`logo-card flex items-center justify-center shrink-0 rounded-xl border bg-white px-5 transition-all duration-300 ease-out cursor-pointer ${activeClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {partner.logoFile ? (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img 
            src={partner.logoFile} 
            alt={partner.name} 
            className="w-full h-full"
            style={{ 
              objectFit: "contain",
              // LOGOS SIEMPRE A COLOR: Eliminamos el filtro 'grayscale' completamente
              filter: "none", 
              opacity: 1, // Visibilidad completa desde el primer instante
            }}
          />
        </div>
      ) : (
        <div className="flex items-center gap-3 font-sans w-full justify-start pl-1">
          <span 
            className={`text-[11px] font-black tracking-wider px-2 py-1.5 rounded-lg transition-all duration-300 shrink-0 ${
              isHovered ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
            }`}
          >
            {partner.abbr}
          </span>
          <span 
            className={`text-xs font-semibold tracking-tight leading-tight transition-colors duration-300 ${
              isHovered ? "text-slate-900" : "text-slate-500"
            }`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {partner.name}
          </span>
        </div>
      )}
    </div>
  );
}

function InfiniteTrack({ items, duration = 25, reverse = false }) {
  if (!items.length) return null;
  
  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }} className="py-4">
      <div className="fade-edge left" style={{
        position: "absolute", left: 0, top: 0, bottom: 0,
        background: "linear-gradient(to right, #fafafa 20%, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div className="fade-edge right" style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        background: "linear-gradient(to left, #fafafa 20%, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      <div 
        className="track-container"
        style={{
          display: "flex",
          animation: `${reverse ? "scrollLeft" : "scrollRight"} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {[...items, ...items, ...items, ...items].map((p, i) => (
          <LogoCard key={i} partner={p} />
        ))}
      </div>
    </div>
  );
}

export default function Empresas() {
  const midIndex = Math.ceil(partners.length / 2);
  const firstRow = partners.slice(0, midIndex);
  const secondRow = partners.slice(midIndex);

  return (
    <section style={{
      background: "#fafafa", 
      padding: "80px 20px",
      fontFamily: "sans-serif",
      position: "relative",
    }}>
      <style>{`
        .logo-card {
          min-width: 190px;
          height: 80px;
          margin: 0 16px;
        }
        .fade-edge {
          width: 120px;
        }
        
        .track-container:hover {
          animation-play-state: paused !important;
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .logo-card {
            min-width: 160px;
            height: 70px;
            margin: 0 10px;
          }
          .fade-edge {
            width: 60px;
          }
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={{
          fontSize: "clamp(20px, 5vw, 28px)", 
          fontWeight: "700",
          color: "#0f172a",
          margin: 0,
          letterSpacing: "-0.75px"
        }}>
          Empresas que confían en nosotros
        </h2>
        <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px" }}>
          Alianzas estratégicas que impulsan nuestro crecimiento
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <InfiniteTrack items={firstRow} duration={26} reverse={false} />
        {secondRow.length > 0 && (
          <InfiniteTrack items={secondRow} duration={30} reverse={true} />
        )}
      </div>
    </section>
  );
}