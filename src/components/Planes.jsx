import { useState } from "react";

const plans = [
  {
    id: "freelancer",
    name: "Freelancer",
    description: "Lo esencial para ofrecer tu mejor trabajo a clientes.",
    price: 19,
    features: [
      "5 productos",
      "Hasta 1,000 suscriptores",
      "Analítica básica",
      "Soporte en 48 horas",
    ],
    popular: false,
  },
  {
    id: "startup",
    name: "Startup",
    description: "Un plan que escala con tu negocio en rápido crecimiento.",
    price: 49,
    features: [
      "25 productos",
      "Hasta 10,000 suscriptores",
      "Analítica avanzada",
      "Soporte en 24 horas",
      "Automatizaciones de marketing",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Soporte dedicado e infraestructura para tu empresa.",
    price: 99,
    features: [
      "Productos ilimitados",
      "Suscriptores ilimitados",
      "Analítica avanzada",
      "Soporte dedicado en 1 hora",
      "Automatizaciones de marketing",
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
  const [selected, setSelected] = useState("startup");

  const maxFeatures = plans.reduce(
    (max, p) => (p.features.length > max ? p.features.length : max),
    0
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{
        background: "#ffffff",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl">
        <span
          className="inline-block text-xs font-semibold uppercase mb-4 px-4 py-1.5 rounded-full"
          style={{
            color: "#7c3aed",
            background: "#ede9fe",
            letterSpacing: "0.18em",
          }}
        >
         
        </span>
        <h1
          className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Precios que crecen{" "}
          <span style={{ color: "#16a34a" }}>contigo</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-500">
          Elige un plan asequible repleto de las mejores funciones para
          fidelizar a tu audiencia, crear lealtad y aumentar ventas.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-5 w-full max-w-5xl">
        {plans.map((plan) => {
          const isSelected = selected === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className="relative flex flex-col w-full md:w-80 rounded-2xl cursor-pointer"
              style={{
                border: isSelected ? "2px solid #4ade80" : "2px solid #e5e7eb",
                background: isSelected ? "#f0fdf4" : "#ffffff",
                transform: isSelected ? "translateY(-18px)" : "translateY(0px)",
                transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: isSelected
                  ? "0 20px 40px rgba(74,222,128,0.18), 0 4px 16px rgba(0,0,0,0.06)"
                  : "0 2px 12px rgba(0,0,0,0.07)",
                zIndex: isSelected ? 10 : 1,
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold z-20 whitespace-nowrap"
                  style={{
                    background: "#7c3aed",
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                  }}
                >
                  ✦ Más popular
                </div>
              )}

              {/* Card content */}
              <div className="flex flex-col flex-1 p-7">
                {/* Plan name */}
                <h2
                  className="text-xl font-bold mb-1"
                  style={{
                    color: isSelected ? "#15803d" : "#111827",
                    transition: "color 0.3s ease",
                  }}
                >
                  {plan.name}
                </h2>

                {/* Description */}
                <p className="text-sm mb-6 leading-relaxed text-gray-400">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-8">
                  <span
                    className="text-5xl font-black leading-none"
                    style={{
                      color: isSelected ? "#16a34a" : "#111827",
                      transition: "color 0.3s ease",
                    }}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-sm mb-2 text-gray-400">/mes</span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {[
                    ...plan.features,
                    ...Array(maxFeatures - plan.features.length).fill(null),
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm"
                      style={{
                        color: feature ? "#374151" : "transparent",
                        minHeight: "20px",
                      }}
                    >
                      {feature && (
                        <>
                          <span style={{ color: isSelected ? "#16a34a" : "#7c3aed" }}>
                            <CheckIcon />
                          </span>
                          {feature}
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200"
                  style={
                    isSelected
                      ? {
                          background: "#16a34a",
                          color: "#ffffff",
                          boxShadow: "0 4px 14px rgba(22,163,74,0.25)",
                        }
                      : {
                          background: "#f3f4f6",
                          color: "#374151",
                          border: "1px solid #e5e7eb",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = "#ede9fe";
                      e.currentTarget.style.color = "#7c3aed";
                      e.currentTarget.style.borderColor = "#c4b5fd";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = "#f3f4f6";
                      e.currentTarget.style.color = "#374151";
                      e.currentTarget.style.borderColor = "#e5e7eb";
                    }
                  }}
                >
                  {isSelected ? "✦ Plan seleccionado" : "Elegir plan"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="mt-14 text-xs text-center text-gray-300 tracking-wide">
        Sin contratos · Cancela cuando quieras · Todos los precios en USD
      </p>
    </div>
  );
}