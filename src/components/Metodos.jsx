import { useState } from "react";

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
  {
    label: "Planear",
    dot: "#4ab3e8",
    description:
      "Define objetivos, identifica peligros y establece controles antes de actuar. Es la base del SG-SST.",
  },
  {
    label: "Hacer",
    dot: "#4ecb91",
    description:
      "Ejecuta las actividades planificadas: capacitaciones, inspecciones, procedimientos y registros en campo.",
  },
  {
    label: "Verificar",
    dot: "#f5a623",
    description:
      "Monitorea el cumplimiento mediante indicadores, auditorías internas y revisión de evidencias documentales.",
  },
  {
    label: "Actuar",
    dot: "#c47fe0",
    description:
      "Implementa mejoras a partir de los hallazgos, cierra no conformidades y eleva continuamente el sistema.",
  },
];

const guarantees = [
  "Cumplimiento total con la Resolución 0312",
  "Documentación lista para visitas del Ministerio",
  "Evidencias listas para el reporte 2026",
  "Acompañamiento continuo técnico-legal",
];

const GREEN = "#1a7a52";

function PhvaTab({ label, dot, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 18px",
        borderRadius: "999px",
        background: hovered ? "#fff" : "#f5f5f5",
        border: hovered ? "1px solid #bbb" : "1px solid #e0e0e0",
        color: "#444",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        cursor: "pointer",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 18px rgba(0,0,0,0.12)" : "none",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease",
        userSelect: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          backgroundColor: dot,
          flexShrink: 0,
        }}
      />

      {label}

      <div
        style={{
          position: "absolute",
          bottom: "calc(100% + 10px)",
          left: "50%",
          transform: hovered
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(6px)",
          background: "#1a1a1a",
          color: "#fff",
          fontSize: "11px",
          fontWeight: 400,
          lineHeight: 1.55,
          letterSpacing: 0,
          textTransform: "none",
          padding: "9px 13px",
          borderRadius: "8px",
          width: "210px",
          textAlign: "center",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.2s ease",
          zIndex: 100,
          whiteSpace: "normal",
        }}
      >
        {description}
        <span
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "5px solid #1a1a1a",
          }}
        />
      </div>
    </div>
  );
}

function Step({ num, title, text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
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
          outline: hovered ? "2.5px solid #1a7a52" : "1.5px solid #1a7a52",
          transform: hovered
            ? "translateY(-8px) scale(1.12)"
            : "translateY(0) scale(1)",
          boxShadow: hovered ? "0 8px 20px rgba(26,122,82,0.3)" : "none",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, outline 0.3s ease",
        }}
      >
        {num}
      </div>

      <div
        style={{
          background: hovered ? "#e8f8ef" : "#fff",
          border: hovered ? "1px solid #1a7a52" : "1px solid #e8e8e8",
          borderRadius: "12px",
          padding: "0.8rem",
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: hovered ? "0 10px 25px rgba(26,122,82,0.15)" : "none",
          transition:
            "transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <h4
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: GREEN,
            margin: "0 0 0.35rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h4>
        <p style={{ fontSize: "11px", color: "#666", margin: 0, lineHeight: 1.5 }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Metodos() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "4rem 2rem",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span
          style={{
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
          }}
        >
          Metodología PHVA · Res. 0312 de 2019
        </span>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: 600,
            color: "#111",
            margin: "0 0 0.4rem",
            lineHeight: 1.3,
          }}
        >
          Gestión estratégica con cumplimiento normativo
        </h2>

        <h3
          style={{
            fontSize: "15px",
            fontWeight: 400,
            color: "#666",
            margin: "0 0 0.9rem",
          }}
        >
          Metodología alineada con los estándares del Ministerio
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#666",
            maxWidth: "580px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Trabajamos bajo el método establecido por el Ministerio, aplicando el
          ciclo PHVA conforme a la Resolución 0312 de 2019. Cada fase se
          desarrolla de manera estratégica y verificable, asegurando resultados
          efectivos, medibles y más allá del simple cumplimiento documental.
        </p>
      </div>

      {/* Tabs PHVA */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        {tabs.map((t) => (
          <PhvaTab
            key={t.label}
            label={t.label}
            dot={t.dot}
            description={t.description}
          />
        ))}
      </div>

      {/* Timeline horizontal */}
      <div
        style={{
          position: "relative",
          overflowX: "auto",
          /* paddingTop generoso para que el círculo al subir con hover
             no quede recortado por el overflow */
          padding: "1.2rem 0.5rem 1rem",
          maxWidth: "1100px",
          margin: "0 auto 2rem",
        }}
      >
        {/* Línea */}
        <div
          style={{
            position: "absolute",
            top: "39px", // 1.2rem (padding-top ~19px) + 23px centro del círculo
            left: "30px",
            right: "30px",
            height: "2px",
            background: "#e0e0e0",
            zIndex: 0,
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "8px",
            position: "relative",
            zIndex: 1,
            minWidth: "700px",
          }}
        >
          {steps.map((step) => (
            <Step
              key={step.num}
              num={step.num}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </div>

      {/* Garantías */}
      <div
        style={{
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
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #0f4d35, #2eaa72)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        </div>

        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#111",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: "0 0 0.6rem",
            }}
          >
            Lo que garantizamos en cada proceso
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5px 20px",
            }}
          >
            {guarantees.map((g) => (
              <div
                key={g}
                style={{
                  fontSize: "12px",
                  color: "#555",
                  display: "flex",
                  gap: "6px",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>
                  ✓
                </span>
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
