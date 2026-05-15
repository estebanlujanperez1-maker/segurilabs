import React from "react";
import {
  Building2,
  Users,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: <Building2 size={26} />,
    number: "+150",
    label: "Empresas asesoradas",
  },
  {
    icon: <Users size={26} />,
    number: "+500",
    label: "Trabajadores capacitados",
  },
  {
    icon: <ShieldCheck size={26} />,
    number: "98%",
    label: "Clientes satisfechos",
  },
  {
    icon: <Clock3 size={26} />,
    number: "24/7",
    label: "Acompañamiento",
  },
];

export default function Estadisticas() {
  return (
    <section className="w-full bg-green-200 py-12 px-5">

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">

        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white/70 backdrop-blur-md border border-green-300 p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-14 h-14 mx-auto rounded-2xl bg-green-600 text-white flex items-center justify-center mb-4">
              {item.icon}
            </div>

            {/* Number */}
            <h3 className="text-3xl md:text-4xl font-black text-gray-900">
              {item.number}
            </h3>

            {/* Label */}
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}