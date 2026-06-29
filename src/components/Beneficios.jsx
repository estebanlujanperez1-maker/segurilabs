import React from "react";
import {
  ShieldCheck,
  Clock3,
  Users,
  BadgeCheck,
} from "lucide-react";

const beneficios = [
  { icon: <ShieldCheck size={16} />, text: "Cumplimiento legal" },
  { icon: <Clock3 size={16} />, text: "Atención rápida" },
  { icon: <Users size={16} />, text: "Equipo profesional" },
  { icon: <BadgeCheck size={16} />, text: "Calidad garantizada" },
];

export default function BeneficiosSeparador() {
  return (
    <div className="w-full bg-green-500 px-4 py-3 text-center text-sm text-white font-semibold hover:bg-green-400 transition shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {beneficios.map((item, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap">
            <span className="opacity-90">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}