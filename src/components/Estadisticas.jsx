import React from "react";
import {
  Building2,
  Users,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const stats = [
  { icon: <Building2 size={16} />, number: "+150", label: "Empresas asesoradas" },
  { icon: <Users size={16} />, number: "+500", label: "Trabajadores capacitados" },
  { icon: <ShieldCheck size={16} />, number: "98%", label: "Clientes satisfechos" },
  { icon: <Clock3 size={16} />, number: "24/7", label: "Acompañamiento" },
];

export default function EstadisticasSeparador() {
  return (
    <div className="w-full bg-green-500 px-4 py-4 text-white font-semibold hover:bg-green-400 transition duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 md:gap-x-8 divide-x-0 md:divide-x md:divide-green-300/40">
        {stats.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center gap-2 px-2 md:first:pl-0"
          >
            {/* Icono discreto */}
            <span className="opacity-90 shrink-0">{item.icon}</span>
            
            {/* Texto compacto */}
            <div className="flex items-baseline gap-1 text-sm md:text-base">
              <span className="font-black text-white">{item.number}</span>
              <span className="text-xs font-normal text-green-100 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}