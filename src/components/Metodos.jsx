const steps = [
  {
    num: "01",
    title: "Diagnóstico Inicial",
    text: "Evaluación del estado actual de tu empresa frente a la Res. 0312, identificando fortalezas, hallazgos y requisitos pendientes de cumplimiento.",
  },
  {
    num: "02",
    title: "Plan de Acción",
    text: "Propuesta personalizada según la actividad económica, nivel de riesgo y necesidades operativas de tu organización.",
  },
  {
    num: "03",
    title: "Formalización",
    text: "Alcance del servicio, tiempos de ejecución y compromisos definidos mediante una planeación clara y estructurada.",
  },
  {
    num: "04",
    title: "Implementación",
    text: "Equipo técnico en tu empresa ejecutando procesos activos, soportes y evidencias verificables desde el primer día.",
  },
  {
    num: "05",
    title: "Gestión Documental",
    text: "Documentación organizada y digitalizada conforme a la normatividad vigente para facilitar auditorías e inspecciones.",
  },
  {
    num: "06",
    title: "Seguimiento",
    text: "Informes periódicos con indicadores de avance y nivel de cumplimiento, para un control continuo del SG-SST.",
  },
  {
    num: "07",
    title: "Auditoría y Cierre",
    text: "Auditoría interna y consolidación del reporte requerido. Tu empresa alineada al 100% con los estándares legales.",
  },
];

const tabs = [
  { label: "Planear",    dot: "#4ab3e8" },
  { label: "Hacer",     dot: "#4ecb91" },
  { label: "Verificar", dot: "#f5a623" },
  { label: "Actuar",    dot: "#c47fe0" },
];

const guarantees = [
  "Cumplimiento total con la Resolución 0312",
  "Documentación lista para visitas del Ministerio",
  "Evidencias listas para el reporte 2026",
  "Acompañamiento continuo técnico-legal",
];

export default function Metodos() {
  return (
    <section style={s.section}>
      {/* Header */}
      <div style={s.header}>
        <span style={s.badge}>Metodología PHVA · Res. 0312 de 2019</span>
        <h2 style={s.h2}>Gestión estratégica con cumplimiento normativo</h2>
        <h3 style={s.h3}>Metodología alineada con los estándares del Ministerio</h3>
        <p style={s.lead}>
          Trabajamos bajo el método establecido por el Ministerio, aplicando el ciclo PHVA conforme
          a la Resolución 0312 de 2019. Cada fase se desarrolla de manera estratégica y verificable,
          asegurando resultados efectivos, medibles y más allá del simple cumplimiento documental.
        </p>
      </div>

      {/* Tabs PHVA */}
      <div style={s.tabs}>
        {tabs.map((t) => (
          <div key={t.label} style={s.tab}>
            <span style={{ ...s.dot, backgroundColor: t.dot }} />
            {t.label}
          </div>
        ))}
      </div>

      {/* Timeline horizontal */}
      <div style={s.timelineWrap}>
        {/* Línea central */}
        <div style={s.line} />
        <div style={s.stepsRow}>
          {steps.map((step) => (
            <div key={step.num} style={s.step}>
              <div style={s.num}>{step.num}</div>
              <div style={s.card}>
                <h4 style={s.cardTitle}>{step.title}</h4>
                <p style={s.cardText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Garantías */}
      <div style={s.guarantee}>
        <div style={s.gIcon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <p style={s.gTitle}>Lo que garantizamos en cada proceso</p>
          <div style={s.gGrid}>
            {guarantees.map((g) => (
              <div key={g} style={s.gItem}>
                <span style={s.check}>✓</span>
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const GREEN = "#1a7a52";

const s = {
  section: {
    background: "#ffffff",
    padding: "4rem 2rem",
    fontFamily: "sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  badge: {
    display: "inline-block",
    background: "rgba(26,122,82,0.08)",
    color: GREEN,
    border: "1px solid rgba(26,122,82,0.2)",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.07em",
    padding: "4px 16px",
    marginBottom: "1rem",
    textTransform: "uppercase",
  },
  h2: {
    fontSize: "26px",
    fontWeight: 600,
    color: "#111",
    margin: "0 0 0.4rem",
    lineHeight: 1.3,
  },
  h3: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#666",
    margin: "0 0 0.9rem",
  },
  lead: {
    fontSize: "14px",
    color: "#666",
    maxWidth: "580px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "3rem",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 18px",
    borderRadius: "999px",
    background: "#f5f5f5",
    border: "1px solid #e0e0e0",
    color: "#444",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  dot: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    flexShrink: 0,
  },

  /* Timeline */
  timelineWrap: {
    position: "relative",
    overflowX: "auto",
    paddingBottom: "1rem",
    maxWidth: "1100px",
    margin: "0 auto 2rem",
  },
  line: {
    position: "absolute",
    top: "23px",
    left: "5%",
    right: "5%",
    height: "2px",
    background: "#e0e0e0",
    zIndex: 0,
  },
  stepsRow: {
    display: "flex",
    gap: "8px",
    position: "relative",
    zIndex: 1,
    minWidth: "700px",
  },
  step: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  num: {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0f4d35, #2eaa72)",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginBottom: "1rem",
    border: "3px solid #fff",
    outline: `1.5px solid ${GREEN}`,
  },
  card: {
    background: "#fff",
    border: "1px solid #e8e8e8",
    borderRadius: "12px",
    padding: "0.8rem",
    width: "100%",
    boxSizing: "border-box",
  },
  cardTitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: GREEN,
    margin: "0 0 0.35rem",
    lineHeight: 1.3,
  },
  cardText: {
    fontSize: "11px",
    color: "#666",
    margin: 0,
    lineHeight: 1.5,
  },

  /* Garantías */
  guarantee: {
    background: "#f9f9f9",
    border: "1px solid #e8e8e8",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    maxWidth: "760px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  gIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #0f4d35, #2eaa72)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  gTitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#111",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    margin: "0 0 0.6rem",
  },
  gGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5px 20px",
  },
  gItem: {
    fontSize: "12px",
    color: "#555",
    display: "flex",
    gap: "6px",
    alignItems: "flex-start",
  },
  check: {
    color: GREEN,
    fontWeight: 700,
    flexShrink: 0,
  },
};