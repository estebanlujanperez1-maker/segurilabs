import React from "react";
import {
  ShieldCheck,
  Clock3,
  Users,
  BadgeCheck,
} from "lucide-react";

const beneficios = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Cumplimiento legal",
    desc: "Procesos alineados con la normatividad vigente.",
  },
  {
    icon: <Clock3 size={26} />,
    title: "Atención rápida",
    desc: "Respuesta oportuna y acompañamiento continuo.",
  },
  {
    icon: <Users size={26} />,
    title: "Equipo profesional",
    desc: "Especialistas capacitados para tu empresa.",
  },
  {
    icon: <BadgeCheck size={26} />,
    title: "Calidad garantizada",
    desc: "Servicios confiables y personalizados.",
  },
];

export default function Beneficios() {
  return (
    <section className="relative w-full overflow-hidden bg-green-100 py-16 px-5">

      {/* Blur decorativo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/30 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative max-w-3xl mx-auto text-center mb-12">

        <span className="inline-block rounded-full bg-white border border-green-300 px-4 py-1 text-xs font-semibold text-green-700 shadow-sm">
          Beneficios
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-900">
          ¿Por qué trabajar con nosotros?
        </h2>

        <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
          Soluciones profesionales enfocadas en seguridad,
          bienestar y crecimiento empresarial.
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {beneficios.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-green-200 bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center mb-4 shadow-lg">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}