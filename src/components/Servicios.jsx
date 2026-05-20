 import { useState } from "react";
import { Link } from "react-router-dom";

// Iconos SVG inline (Tabler Icons outline)
const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  fileText: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <polyline points="9 11 11 13 15 9"/>
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  folders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      <path d="M12 11v6M9 14h6"/>
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 0 1-7 7 7 7 0 0 1-7-7c0-1.045.272-2.04.75-2.9.24.28.5.52.75.9z"/>
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/>
    </svg>
  ),
  chartBar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  handStop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
    </svg>
  ),
};

const services = [
  { cat: "sst", icon: "shield",   title: "Diseño del SG-SST",               desc: "Estructuramos desde cero tu Sistema de Gestión de SST, cumpliendo cada estándar de la Resolución 0312 de 2019." },
  { cat: "sst", icon: "refresh",  title: "Mantenimiento del SG-SST",        desc: "Mantenemos activo y actualizado tu sistema, garantizando cumplimiento continuo y documentación al día." },
  { cat: "sst", icon: "fileText", title: "Reporte de Estándares Mínimos",   desc: "Acompañamiento completo para el reporte anual ante el Ministerio de Trabajo, sin contratiempos." },
  { cat: "sst", icon: "search",   title: "Auditoría Interna",               desc: "Evaluamos el estado real de tu SG-SST antes de cualquier visita oficial, identificando hallazgos con anticipación." },
  { cat: "sst", icon: "alert",    title: "Gestión de Riesgos Laborales",    desc: "Identificación, valoración y control de peligros mediante matrices de riesgo actualizadas y planes de acción." },
  { cat: "sst", icon: "folders",  title: "Gestión Documental",              desc: "Organización y digitalización de toda la documentación exigida por la normatividad vigente." },
  { cat: "sst", icon: "flame",    title: "Plan de Emergencias",             desc: "Diseño e implementación de brigadas, simulacros y protocolos de respuesta ante emergencias organizacionales." },
  { cat: "psi", icon: "brain",    title: "Atención Psicológica Individual", desc: "Consultas confidenciales orientadas al bienestar emocional, manejo del estrés y salud mental de los colaboradores." },
  { cat: "psi", icon: "chartBar", title: "Evaluación de Riesgo Psicosocial", desc: "Aplicación de la Batería del Ministerio para identificar factores de riesgo en el entorno laboral." },
  { cat: "psi", icon: "users",    title: "Talleres de Bienestar Laboral",   desc: "Programas grupales sobre inteligencia emocional, comunicación asertiva, liderazgo y clima organizacional." },
  { cat: "psi", icon: "heart",    title: "Prevención del Burnout",          desc: "Estrategias de intervención temprana para prevenir el agotamiento profesional y mejorar la productividad." },
  { cat: "psi", icon: "handStop", title: "Intervención en Crisis",          desc: "Apoyo psicológico inmediato ante situaciones críticas en el entorno laboral, con protocolos estructurados." },
];

const filters = [
  { key: "sst", label: "Seguridad y Salud" },
  { key: "psi", label: "Psicología" },
];

/* ── Card con hover ── */
function ServiceCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)",
        border: hovered ? "1px solid rgba(255,255,255,0.45)" : "1px solid rgba(255,255,255,0.2)",
        borderRadius: "16px",
        padding: "1.4rem 1.2rem",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 30px rgba(0,0,0,0.2)" : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Icono */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: hovered ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.15)",
          border: hovered ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {icons[item.icon]}
      </div>

      <h3 style={s.cardTitle}>{item.title}</h3>
      <p style={s.cardDesc}>{item.desc}</p>
      <span style={item.cat === "sst" ? s.tagSst : s.tagPsi}>
        {item.cat === "sst" ? "SST" : "Psicología"}
      </span>
    </div>
  );
}

export default function Servicios() {
  const [active, setActive] = useState("sst");

  const filtered = services.filter((srv) => srv.cat === active);

  return (
    <section style={s.section}>
      {/* Header */}
      <div style={s.header}>
        <span style={s.badge}>Nuestros servicios</span>
        <h2 style={s.h2}>
          Soluciones integrales para la salud<br />y seguridad de tu organización
        </h2>
        <p style={s.lead}>
          Combinamos la gestión técnica del riesgo laboral con el acompañamiento psicológico,
          cubriendo cada dimensión del bienestar dentro de tu empresa.
        </p>
      </div>

      {/* Filtros */}
      <div style={s.cats}>
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            style={{
              ...s.cat,
              background: active === f.key ? "#fff" : "rgba(255,255,255,0.07)",
              color: active === f.key ? "#0f4d35" : "rgba(255,255,255,0.7)",
              borderColor: active === f.key ? "#fff" : "rgba(255,255,255,0.3)",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={s.grid}>
        {filtered.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>

      {/* CTA */}
      <div style={s.footer}>
        <a href="#contacto" style={s.cta}>Solicitar información</a>
      <Link to="/servicios" style={s.ctaSecondary}>
  Conozco todos nuestros servicios
</Link>
      </div>
    </section>
  );
}

const s = {
  section: {
    background: "linear-gradient(135deg, #0f4d35 0%, #1a7a52 40%, #2eaa72 70%, #3dc47f 100%)",
    padding: "4rem 2rem",
    fontFamily: "sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  badge: {
    display: "inline-block",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    padding: "4px 16px",
    marginBottom: "1rem",
    textTransform: "uppercase",
  },
  h2: {
    fontSize: "26px",
    fontWeight: 600,
    color: "#fff",
    margin: "0 0 0.75rem",
    lineHeight: 1.35,
  },
  lead: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.75)",
    maxWidth: "520px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  cats: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "2.5rem",
  },
  cat: {
    padding: "7px 20px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "1.5px solid",
    transition: "all 0.15s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    maxWidth: "960px",
    margin: "0 auto",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#fff",
    margin: "0 0 0.45rem",
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.72)",
    margin: "0 0 1rem",
    lineHeight: 1.6,
  },
  tagSst: {
    display: "inline-block",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "999px",
    background: "rgba(74,179,232,0.2)",
    color: "#a8daef",
    border: "1px solid rgba(74,179,232,0.3)",
  },
  tagPsi: {
    display: "inline-block",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "999px",
    background: "rgba(196,127,224,0.2)",
    color: "#dbb7ef",
    border: "1px solid rgba(196,127,224,0.3)",
  },
  footer: {
    textAlign: "center",
    marginTop: "2.5rem",
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cta: {
    display: "inline-block",
    background: "#fff",
    color: "#0f4d35",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    padding: "13px 30px",
    borderRadius: "999px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "2px solid #fff",
  },
  ctaSecondary: {
    display: "inline-block",
    background: "transparent",
    color: "#fff",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    padding: "13px 30px",
    borderRadius: "999px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "2px solid #fff",
  },
};