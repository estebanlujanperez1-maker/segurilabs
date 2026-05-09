import { useEffect, useRef } from "react";

const partners = [
  { name: "Divisa Publicidad", abbr: "DP", color: "#1a3a6b" },
  { name: "David Majana", abbr: "DM", color: "#2c5f8a" },
  { name: "Diversa Negocios", abbr: "DN", color: "#e07b2a" },
  { name: "Empresa Constructora", abbr: "EC", color: "#4a7c59" },
  { name: "Contribuutto", abbr: "CO", color: "#555555" },
  { name: "Luis Mejia", abbr: "LM", color: "#333333" },
  { name: "Casa Korea", abbr: "CK", color: "#c0392b" },
  { name: "La Cachaquera", abbr: "LC", color: "#27ae60" },
  { name: "Más Motos", abbr: "MM", color: "#2ecc71" },
  { name: "Lácteos La Ensenada", abbr: "LE", color: "#f1c40f" },
  { name: "Salto del Buey", abbr: "SB", color: "#16a085" },
  { name: "Campo Libre", abbr: "CL", color: "#8bc34a" },
  { name: "CH Industria", abbr: "CH", color: "#444444" },
  { name: "Hotel Calaos", abbr: "HC", color: "#2980b9" },
  { name: "Universidad del Atlántico", abbr: "UA", color: "#8e44ad" },
];

const stats = [
  { value: "+50", label: "ALIADOS ACTIVOS" },
  { value: "100%", label: "SATISFACCIÓN REPORTADA" },
  { value: "9+", label: "SECTORES INDUSTRIALES" },
  { value: "6+", label: "AÑOS DE CONFIANZA" },
];

function LogoCard({ partner }) {
  return (
    <div style={{
      minWidth: "160px",
      height: "80px",
      background: "#ffffff",
      border: "1.5px solid #e8edf5",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 10px",
      padding: "0 16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      flexShrink: 0,
      gap: "6px",
    }}>
      <div style={{
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        background: partner.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "800",
        fontSize: "12px",
        letterSpacing: "0.5px",
        fontFamily: "'Sora', sans-serif",
      }}>
        {partner.abbr}
      </div>
      <span style={{
        fontSize: "11px",
        fontWeight: "600",
        color: "#4a5568",
        textAlign: "center",
        lineHeight: "1.2",
        fontFamily: "'Sora', sans-serif",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "120px",
      }}>
        {partner.name}
      </span>
    </div>
  );
}

function InfiniteTrack({ items, duration = 30, reverse = false }) {
  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      {/* fade edges */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
        background: "linear-gradient(to right, #f8faff, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
        background: "linear-gradient(to left, #f8faff, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      <div style={{
        display: "flex",
        animation: `${reverse ? "scrollLeft" : "scrollRight"} ${duration}s linear infinite`,
        width: "max-content",
      }}>
        {[...items, ...items, ...items].map((p, i) => (
          <LogoCard key={i} partner={p} />
        ))}
      </div>
    </div>
  );
}

export default function Empresas() {
  return (
    <section style={{
      background: "linear-gradient(160deg, #f0f5ff 0%, #f8faff 50%, #eef3ff 100%)",
      padding: "72px 24px",
      fontFamily: "'Sora', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* decorative blobs */}
      <div style={{
        position: "absolute", top: "-60px", right: "-60px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-40px", left: "-40px",
        width: "250px", height: "250px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');

        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span style={{
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "3px",
          color: "#6366f1",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "12px",
        }}>
          NUESTROS ALIADOS ESTRATÉGICOS
        </span>
        <h2 style={{
          fontSize: "clamp(24px, 4vw, 38px)",
          fontWeight: "800",
          color: "#1e293b",
          margin: 0,
          lineHeight: "1.2",
        }}>
          Empresas que ya confían en{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366f1, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            nosotros
          </span>
        </h2>
      </div>

      {/* Carousels */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "56px" }}>
        <InfiniteTrack items={partners.slice(0, 8)} duration={28} reverse={false} />
        <InfiniteTrack items={partners.slice(7)} duration={32} reverse={true} />
      </div>

      {/* Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "1px",
        maxWidth: "800px",
        margin: "0 auto 44px",
        background: "#d1d5db",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: "#ffffff",
            padding: "28px 16px",
            textAlign: "center",
          }}>
            <div style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #6366f1, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: "1",
              marginBottom: "8px",
            }}>
              {s.value}
            </div>
            <div style={{
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "20px" }}>
          ¿Quieres que tu empresa también opere con{" "}
          <strong style={{ color: "#1e293b" }}>cero riesgos normativos</strong>?
        </p>
        <a href="https://wa.me/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "linear-gradient(135deg, #10b981, #059669)",
          color: "#fff",
          padding: "14px 32px",
          borderRadius: "50px",
          fontWeight: "700",
          fontSize: "13px",
          letterSpacing: "1px",
          textDecoration: "none",
          textTransform: "uppercase",
          boxShadow: "0 6px 24px rgba(16,185,129,0.35)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 32px rgba(16,185,129,0.45)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 24px rgba(16,185,129,0.35)";
          }}
        >
          💬 Quiero ser el próximo caso de éxito
        </a>
      </div>
    </section>
  );
}