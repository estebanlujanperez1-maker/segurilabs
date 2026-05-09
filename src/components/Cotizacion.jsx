import { useState } from "react";

const SERVICIOS = [
  "- Asesorías y Consultorías",
  "- Implementación SG-SST",
  "- Psicología Organizacional",
  "- Capacitaciones en SST",
  "- Auditorías y Diagnósticos",
  "- Medicina del Trabajo",
  "- Gestión de Riesgos Laborales",
];

const IconMicro = ({ active }) => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: active ? "#1a5c45" : "#7a9ab5" }}>
    <rect x="8" y="14" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M5 14L16 5L27 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="13" y="20" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconPequena = ({ active }) => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: active ? "#1a5c45" : "#7a9ab5" }}>
    <rect x="6" y="12" width="20" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M3 12L16 3L29 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="8" y="16" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="20" y="16" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="13" y="21" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconMediana = ({ active }) => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: active ? "#1a5c45" : "#7a9ab5" }}>
    <rect x="4" y="10" width="24" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M2 10L16 2L30 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="7" y="14" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="14" y="14" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="21" y="14" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="12" y="22" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconGrande = ({ active }) => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: active ? "#1a5c45" : "#7a9ab5" }}>
    <rect x="3" y="8" width="26" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M1 8L16 1L31 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="12" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="14" y="12" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="22" y="12" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="6" y="18" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="22" y="18" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="12" y="23" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const TAMANOS = [
  { label: "Microempresa", sub: "1 – 10 empleados", Icon: IconMicro },
  { label: "Pequeña", sub: "11 – 50 empleados", Icon: IconPequena },
  { label: "Mediana", sub: "51 – 200 empleados", Icon: IconMediana },
  { label: "Grande", sub: "201+ empleados", Icon: IconGrande },
];

const NIVELES = [
  { label: "Clase I", sublabel: "Riesgo Mínimo", pct: "0.522%", color: "#1a7a4a", bg: "#e6f7ef", desc: "Actividades administrativas, oficinas, finanzas." },
  { label: "Clase II", sublabel: "Riesgo Bajo", pct: "1.044%", color: "#27a85f", bg: "#eafaf1", desc: "Comercio al por menor, manipulación de mercancías, manufactura ligera." },
  { label: "Clase III", sublabel: "Riesgo Medio", pct: "2.436%", color: "#c9900a", bg: "#fef9ec", desc: "Manufactura ligera, procesos industriales livianos." },
  { label: "Clase IV", sublabel: "Riesgo Alto", pct: "4.350%", color: "#c96214", bg: "#fef3ea", desc: "Construcción, manejo de maquinaria pesada, manufactura de alimentos." },
  { label: "Clase V", sublabel: "Riesgo Máximo", pct: "6.960%", color: "#c0392b", bg: "#fef0ee", desc: "Minería subterránea, explotación petrolera, manejo de explosivos." },
];

const btnStyle = {
  background: "linear-gradient(135deg, #1a5c45 0%, #3aaa7a 70%, #4cd694 100%)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "14px 32px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  letterSpacing: "0.3px",
  transition: "opacity 0.2s, transform 0.1s",
  minWidth: "160px",
};

const btnOutlineStyle = {
  background: "transparent",
  color: "#1a5c45",
  border: "2px solid #1a5c45",
  borderRadius: "10px",
  padding: "14px 32px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  minWidth: "160px",
  transition: "background 0.2s, color 0.2s",
};

const inputStyle = {
  width: "100%",
  padding: "13px 16px",
  border: "1.5px solid #d0d7de",
  borderRadius: "10px",
  fontSize: "15px",
  color: "#1e2d3d",
  background: "#fff",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle = {
  fontWeight: "700",
  fontSize: "14px",
  color: "#1a3a5c",
  marginBottom: "6px",
  display: "block",
};

const requiredBadge = (
  <span style={{ color: "#e05c2a", fontWeight: "600", marginLeft: "6px", fontSize: "13px" }}>
    (Obligatorio)
  </span>
);

const errorStyle = {
  color: "#e05c2a",
  fontSize: "12px",
  marginTop: "5px",
  marginBottom: "0",
  fontWeight: "600",
};

const containerStyle = {
  fontFamily: "'Segoe UI', system-ui, sans-serif",
  maxWidth: "700px",
  margin: "0 auto",
  padding: "48px 20px",
  background: "#f2f6fb",
  minHeight: "100vh",
  boxSizing: "border-box",
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "18px",
  boxShadow: "0 4px 24px rgba(26,60,90,0.08)",
  padding: "36px 40px",
};

export default function CotizadorSGSST() {
  const [step, setStep] = useState(1);
  const [tamano, setTamano] = useState(null);
  const [nivel, setNivel] = useState(null);
  const [form, setForm] = useState({
    empresa: "",
    responsable: "",
    correo: "",
    telefono: "",
    servicio: SERVICIOS[0],
    acepta: false,
  });
  const [enviado, setEnviado] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = () => {
    const e = {};
    if (!tamano) e.tamano = "Selecciona el tamaño de tu empresa";
    if (!nivel) e.nivel = "Selecciona la clase de riesgo";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e = {};
    if (!form.empresa.trim()) e.empresa = "Este campo es obligatorio";
    if (!form.responsable.trim()) e.responsable = "Este campo es obligatorio";
    if (!form.telefono.trim()) e.telefono = "Este campo es obligatorio";
    if (!form.acepta) e.acepta = "Debes aceptar la política de privacidad";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };
  const handleBack = () => setStep(1);
  const handleSubmit = () => { if (validateStep2()) setEnviado(true); };

  const resetAll = () => {
    setEnviado(false); setStep(1); setTamano(null); setNivel(null);
    setForm({ empresa: "", responsable: "", correo: "", telefono: "", servicio: SERVICIOS[0], acepta: false });
    setErrors({});
  };

  if (enviado) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ margin: "0 auto 20px", display: "block" }}>
              <circle cx="32" cy="32" r="30" stroke="#3aaa7a" strokeWidth="2.5"/>
              <path d="M20 32L28 40L44 24" stroke="#3aaa7a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 style={{ color: "#1a5c45", fontSize: "26px", marginBottom: "10px", fontWeight: "800", margin: "0 0 10px" }}>
              ¡Solicitud enviada!
            </h2>
            <p style={{ color: "#555", fontSize: "16px", maxWidth: "380px", margin: "12px auto 0", lineHeight: "1.6" }}>
              Gracias, <strong>{form.empresa}</strong>. Nos pondremos en contacto con <strong>{form.responsable}</strong> muy pronto.
            </p>
            <button style={{ ...btnStyle, marginTop: "32px" }} onClick={resetAll}>
              Nueva cotización
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <p style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "2px", color: "#3aaa7a", textTransform: "uppercase", marginBottom: "10px", margin: "0 0 10px" }}>
          PERSONALIZA TU PLAN
        </p>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "800", color: "#1a3a5c", margin: "0 0 14px" }}>
          Cotiza tu Solución SG-SST a Medida
        </h1>
        <p style={{ fontSize: "16px", color: "#5a6a7a", fontStyle: "italic", maxWidth: "560px", margin: "0 auto", lineHeight: "1.6" }}>
          Selecciona el tamaño y riesgo de tu empresa para recibir una propuesta ajustada a tu realidad normativa.
        </p>
      </div>

      <div style={cardStyle}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#7a8fa0", marginBottom: "8px", fontWeight: "600", letterSpacing: "1px" }}>
            <span>PASO</span>
            <span style={{ color: "#1a3a5c", fontWeight: "700" }}>{step} DE 2</span>
          </div>
          <div style={{ background: "#e0eaf3", borderRadius: "99px", height: "6px", overflow: "hidden" }}>
            <div style={{ width: step === 1 ? "50%" : "100%", background: "linear-gradient(90deg, #1a5c45, #3aaa7a)", height: "100%", borderRadius: "99px", transition: "width 0.4s ease" }} />
          </div>
        </div>

        {step === 1 && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <label style={{ ...labelStyle, marginBottom: "12px" }}>
                Tamaño de la empresa {requiredBadge}
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {TAMANOS.map((t) => {
                  const active = tamano === t.label;
                  return (
                    <button
                      key={t.label}
                      onClick={() => { setTamano(t.label); setErrors((p) => ({ ...p, tamano: undefined })); }}
                      style={{
                        border: active ? "2px solid #3aaa7a" : "1.5px solid #d0d7de",
                        borderRadius: "14px",
                        padding: "18px 8px 14px",
                        background: active ? "#e8f7f0" : "#fff",
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <t.Icon active={active} />
                      <div style={{ fontWeight: "700", color: "#1a3a5c", fontSize: "13px" }}>{t.label}</div>
                      <div style={{ fontSize: "11px", color: "#7a8fa0", lineHeight: "1.3" }}>{t.sub}</div>
                    </button>
                  );
                })}
              </div>
              {errors.tamano && <p style={errorStyle}>{errors.tamano}</p>}
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label style={{ ...labelStyle, marginBottom: "4px" }}>
                Clase de riesgo ARL {requiredBadge}
              </label>
              <p style={{ fontSize: "12px", color: "#7a8fa0", margin: "0 0 12px" }}>Según el Decreto 1607 de 2002 — Colombia</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {NIVELES.map((n) => {
                  const active = nivel === n.label;
                  return (
                    <button
                      key={n.label}
                      onClick={() => { setNivel(n.label); setErrors((p) => ({ ...p, nivel: undefined })); }}
                      style={{
                        border: active ? `2px solid ${n.color}` : "1.5px solid #d0d7de",
                        borderRadius: "10px",
                        padding: "12px 16px",
                        background: active ? n.bg : "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.2s",
                      }}
                    >
                      <span style={{
                        width: "12px", height: "12px", borderRadius: "50%",
                        background: n.color, flexShrink: 0, display: "inline-block",
                        boxShadow: active ? `0 0 0 3px ${n.color}30` : "none",
                        transition: "box-shadow 0.2s",
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                          <span style={{ fontWeight: "700", color: "#1a3a5c", fontSize: "13px" }}>{n.label}</span>
                          <span style={{ fontSize: "12px", color: n.color, fontWeight: "600" }}>{n.sublabel}</span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#7a8fa0", marginTop: "2px" }}>{n.desc}</div>
                      </div>
                      <span style={{
                        fontSize: "12px", fontWeight: "700", color: n.color,
                        background: n.bg, border: `1px solid ${n.color}50`,
                        borderRadius: "6px", padding: "3px 8px", flexShrink: 0,
                      }}>
                        {n.pct}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.nivel && <p style={errorStyle}>{errors.nivel}</p>}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
              <button style={btnStyle} onClick={handleNext}>Siguiente →</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Nombre de la Empresa {requiredBadge}</label>
              <input
                style={{ ...inputStyle, borderColor: errors.empresa ? "#e05c2a" : "#d0d7de" }}
                value={form.empresa}
                onChange={(e) => handleChange("empresa", e.target.value)}
                placeholder="Ej: Grupo Salud y Vida S.A.S."
              />
              {errors.empresa && <p style={errorStyle}>{errors.empresa}</p>}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Nombre del responsable de la gestión de riesgos {requiredBadge}</label>
              <input
                style={{ ...inputStyle, borderColor: errors.responsable ? "#e05c2a" : "#d0d7de" }}
                value={form.responsable}
                onChange={(e) => handleChange("responsable", e.target.value)}
                placeholder="Ej: Laura Gómez"
              />
              {errors.responsable && <p style={errorStyle}>{errors.responsable}</p>}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Correo electrónico</label>
              <input
                type="email"
                style={inputStyle}
                value={form.correo}
                onChange={(e) => handleChange("correo", e.target.value)}
                placeholder="correo@empresa.com"
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Teléfono {requiredBadge}</label>
              <input
                type="tel"
                style={{ ...inputStyle, borderColor: errors.telefono ? "#e05c2a" : "#d0d7de" }}
                value={form.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                placeholder="+57 300 000 0000"
              />
              {errors.telefono && <p style={errorStyle}>{errors.telefono}</p>}
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle}>¿Necesitas algún servicio en específico?</label>
              <select
                style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath fill='%231a3a5c' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: "40px" }}
                value={form.servicio}
                onChange={(e) => handleChange("servicio", e.target.value)}
              >
                {SERVICIOS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ ...labelStyle, color: errors.acepta ? "#e05c2a" : "#1a3a5c" }}>
                Consentimiento para tratamiento de datos personales {requiredBadge}
              </label>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", marginBottom: "12px" }}>
                <input
                  type="checkbox"
                  checked={form.acepta}
                  onChange={(e) => handleChange("acepta", e.target.checked)}
                  style={{ marginTop: "2px", accentColor: "#3aaa7a", width: "16px", height: "16px", flexShrink: 0 }}
                />
                <span style={{ fontSize: "14px", color: "#3a4a5a" }}>He leído y acepto la Política de Privacidad</span>
              </label>
              {errors.acepta && <p style={errorStyle}>{errors.acepta}</p>}
              <div style={{ background: "#f0f6fb", border: "1px solid #d0e4f0", borderRadius: "8px", padding: "14px 16px", fontSize: "13px", color: "#4a5a6a", lineHeight: "1.6" }}>
                En cumplimiento con la Ley 1581 de 2012 y el Decreto 1377 de 2013, informamos que los datos personales suministrados serán tratados conforme a nuestra Política de Privacidad.<br />
                <span style={{ color: "#1a5c45", textDecoration: "underline", cursor: "pointer" }}>Puedes consultar nuestra Política de Privacidad aquí.</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginTop: "8px" }}>
              <button style={btnOutlineStyle} onClick={handleBack}>← Anterior</button>
              <button style={btnStyle} onClick={handleSubmit}>Enviar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}