import { useState } from "react";

// Iconos SVG inline (Tabler Icons outline) con color heredado (currentColor)
const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  fileText: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <polyline points="9 11 11 13 15 9"/>
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  folders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      <path d="M12 11v6M9 14h6"/>
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 0 1-7 7 7 7 0 0 1-7-7c0-1.045.272-2.04.75-2.9.24.28.5.52.75.9z"/>
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/>
    </svg>
  ),
  chartBar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  handStop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
    </svg>
  ),
};

const services = [
  { cat: "sst", icon: "shield",   title: "Diseño del SG-SST",              desc: "Estructuramos desde cero tu Sistema de Gestión de SST, cumpliendo cada estándar de la Resolución 0312 de 2019." },
  { cat: "sst", icon: "refresh",  title: "Mantenimiento del SG-SST",        desc: "Mantenemos activo y actualizado tu sistema, garantizando cumplimiento continuo y documentación al día." },
  { cat: "sst", icon: "fileText", title: "Reporte de Estándares Mínimos",   desc: "Acompañamiento completo para el reporte anual ante el Ministerio de Trabajo, sin contratiempos." },
  { cat: "sst", icon: "search",   title: "Auditoría Interna",               desc: "Evaluamos el estado real de tu SG-SST antes de cualquier visita oficial, identificando hallazgos con anticipación." },
  { cat: "sst", icon: "alert",    title: "Gestión de Riesgos Laborales",    desc: "Identificación, valoración y control de peligros mediante matrices de riesgo actualizadas y planes de acción." },
  { cat: "sst", icon: "folders",  title: "Gestión Documental",              desc: "Organización y digitalización de toda la documentación exigida por la normatividad vigente." },
  { cat: "sst", icon: "flame",    title: "Plan de Emergencias",             desc: "Diseño e implementación de brigadas, simulacros y protocolos de respuesta ante emergencias organizacionales." },
  { cat: "psi", icon: "brain",    title: "Atención Psicológica Individual", desc: "Acompañamiento psicológico personalizado para adultos y adolescentes que atraviesan procesos de duelo, ansiedad, estrés o dificultades relacionales. Sesiones presenciales o virtuales, en un espacio seguro y confidencial." },
  { cat: "psi", icon: "chartBar", title: "Capacitaciones", desc: "Formación dirigida a equipos u organizaciones en temas de salud mental, regulación emocional y habilidades psicológicas aplicadas al entorno laboral o comunitario." },
  { cat: "psi", icon: "users",    title: "Talleres de Bienestar Laboral",   desc: "Espacios de aprendizaje y reflexión en grupo orientados al bienestar emocional. Una oportunidad para explorar herramientas prácticas junto a otros, en un ambiente de confianza y apoyo mutuo." },
   { cat: "psi", icon: "handStop", title: "Intervención en Crisis",          desc: "Apoyo psicológico inmediato ante situaciones críticas en el entorno laboral, con protocolos estructurados." },
];

const filters = [
  { key: "sst", label: "Seguridad y Salud" },
  { key: "psi", label: "Psicología" },
];

function ServiceCard({ item }) {
  return (
    <div className="bg-white/10 border border-white/20 hover:bg-white/18 hover:border-white/45 rounded-2xl p-5 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20 group">
      {/* Icono */}
      <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-4 transition-all duration-300 ease-in-out group-hover:bg-white/25 group-hover:border-white/40">
        {icons[item.icon]}
      </div>

      <h3 className="text-[14px] font-semibold text-white mb-2 leading-snug">{item.title}</h3>
      <p className="text-[12px] text-white/70 mb-4 leading-relaxed">{item.desc}</p>
      
      {item.cat === "sst" ? (
        <span className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-200 border border-sky-500/30">
          SST
        </span>
      ) : (
        <span className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
          Psicología
        </span>
      )}
    </div>
  );
}

export default function Servicios() {
  const [active, setActive] = useState("sst");

  const filtered = services.filter((srv) => srv.cat === active);

  return (
    <section className="bg-gradient-to-br from-[#0f4d35] via-[#1a7a52] to-[#3dc47f] py-16 px-8 font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block bg-white/12 text-white border border-white/25 rounded-full text-[11px] font-semibold tracking-widest uppercase px-4 py-1 mb-4">
          Nuestros servicios
        </span>
        <h2 className="text-[26px] font-semibold text-white mb-3 leading-snug">
          Soluciones integrales para la salud<br />y seguridad de tu organización
        </h2>
        <p className="text-[14px] text-white/75 max-w-[520px] mx-auto leading-relaxed">
          Combinamos la gestión técnica del riesgo laboral con el acompañamiento psicológico,
          cubriendo cada dimensión del bienestar dentro de tu empresa.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`px-5 py-2 rounded-full text-[12px] font-semibold tracking-wide uppercase cursor-pointer border-1.5 transition-all duration-150 ${
              active === f.key
                ? "bg-white text-[#0f4d35] border-white"
                : "bg-white/7 text-white/70 border-white/30"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 max-w-[960px] mx-auto">
        {filtered.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}