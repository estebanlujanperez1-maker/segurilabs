
import { useState } from "react";

const plans = [
  {
    id: "esencial",
    name: "Paquete 1",
    subtitle: "SG-SST Esencial",
    description:
      "Para pequeños negocios, oficinas, comercios y establecimientos de baja complejidad.",
    coverage: "7 estándares mínimos",
    workers: "Hasta 10 trabajadores",
    risk: "Riesgos I, II y III",
    features: [
      "Documentos aplicables al SG-SST",
      "Plan de trabajo anual",
      "Soportes básicos requeridos",
      "Requisitos según el tamaño y riesgo de la empresa",
    ],
    popular: false,
  },
  {
    id: "integral",
    name: "Paquete 2",
    subtitle: "SG-SST Integral",
    description:
      "Para empresas que necesitan una gestión más amplia de seguridad y salud en el trabajo.",
    coverage: "21 estándares mínimos",
    workers: "De 11 a 50 trabajadores",
    risk: "Riesgos I, II y III",
    features: [
      "Gestión de peligros y riesgos",
      "Capacitación de trabajadores",
      "Gestión de comités",
      "Inspecciones de seguridad",
      "Preparación y atención de emergencias",
      "Seguimiento al plan anual",
    ],
    popular: true,
  },
  {
    id: "avanzado",
    name: "Paquete 3",
    subtitle: "SG-SST Avanzado",
    description:
      "Para empresas que requieren una gestión documentada y operativa más robusta.",
    coverage: "Gestión avanzada",
    workers: "Más de 50 trabajadores, o hasta 50 con riesgo IV o V",
    risk: "Cualquier clase de riesgo cuando corresponda",
    features: [
      "Evaluación y seguimiento del SG-SST",
      "Auditorías",
      "Indicadores de gestión",
      "Vigilancia de la salud",
      "Controles según los riesgos identificados",
      "Gestión documental y operativa",
    ],
    popular: false,
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
    <path
      d="M6 10.5l3 3 5-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Planes() {
  const [selected, setSelected] = useState("integral");

  const handleSelectPlan = (planId) => {
    const selectedPlan = plans.find((plan) => plan.id === planId);

    if (!selectedPlan) return;

    const message =
      `Hola, estoy interesado/a en el ${selectedPlan.name}: ` +
      `${selectedPlan.subtitle}. Quiero conocer el alcance, los requisitos ` +
      `y la cotización para mi empresa.`;

    const whatsappUrl =
      `https://wa.me/573015826390?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-20"
      style={{
        background: "#ffffff",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Encabezado */}
      <div className="text-center mb-16 max-w-3xl">
        <span
          className="inline-block text-xs font-semibold uppercase mb-4 px-4 py-1.5 rounded-full"
          style={{
            color: "#15803d",
            background: "#dcfce7",
            letterSpacing: "0.18em",
          }}
        >
          Servicios de seguridad y salud en el trabajo
        </span>

        <h1
          className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Encuentra el paquete{" "}
          <span style={{ color: "#16a34a" }}>SG-SST</span>{" "}
          para tu empresa
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-gray-500">
          Soluciones de seguridad y salud en el trabajo adaptadas al tamaño
          de tu empresa, su clase de riesgo y sus necesidades de gestión.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="flex flex-col md:flex-row md:items-stretch justify-center gap-5 w-full max-w-6xl">
        {plans.map((plan) => {
          const isSelected = selected === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className="relative flex flex-col w-full md:flex-1 rounded-2xl cursor-pointer"
              style={{
                border: isSelected
                  ? "2px solid #4ade80"
                  : "2px solid #e5e7eb",
                background: isSelected ? "#f0fdf4" : "#ffffff",
                transform: isSelected ? "translateY(-6px)" : "translateY(0)",
                transition: "all 0.3s ease",
                boxShadow: isSelected
                  ? "0 16px 35px rgba(74,222,128,0.16)"
                  : "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{ background: "#15803d", color: "#ffffff" }}
                >
                  Recomendado
                </div>
              )}

              <div className="flex flex-col flex-1 p-6 md:p-7">
                <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">
                  {plan.name}
                </p>

                <h2
                  className="text-2xl font-black mb-3"
                  style={{ color: isSelected ? "#15803d" : "#111827" }}
                >
                  {plan.subtitle}
                </h2>

                <p className="text-sm mb-6 leading-relaxed text-gray-500">
                  {plan.description}
                </p>

                <div className="rounded-xl bg-white border border-gray-100 p-4 mb-6">
                  <p className="text-sm font-bold text-green-700 mb-2">
                    {plan.coverage}
                  </p>

                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Personal:</strong> {plan.workers}
                  </p>

                  <p className="text-sm text-gray-700">
                    <strong>Clase de riesgo:</strong> {plan.risk}
                  </p>
                </div>

                <h3 className="text-sm font-bold text-gray-900 mb-4">
                  ¿Qué incluye?
                </h3>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span
                        className="mt-0.5"
                        style={{
                          color: isSelected ? "#16a34a" : "#15803d",
                        }}
                      >
                        <CheckIcon />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleSelectPlan(plan.id);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-200"
                  style={
                    isSelected
                      ? {
                          background: "#16a34a",
                          color: "#ffffff",
                        }
                      : {
                          background: "#f3f4f6",
                          color: "#374151",
                          border: "1px solid #e5e7eb",
                        }
                  }
                >
                  Solicitar información
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 max-w-3xl text-center text-xs leading-relaxed text-gray-400">
        La aplicación de los estándares mínimos debe verificarse según el
        número de trabajadores y la clasificación de riesgo de la empresa.
        El alcance definitivo se establece de acuerdo con sus condiciones
        y requisitos aplicables.
      </p>
    </div>
  );
}
