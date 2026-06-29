import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Separador2() {
  return (
    <div className="w-full bg-green-500 px-4 py-4 text-center text-white font-semibold hover:bg-green-400 transition duration-300 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {[
          "SG-SST",
          "Plan de emergencias",
          "Capacitaciones",
          "Riesgo psicosocial",
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base">
            {/* Icono discreto */}
            <span className="opacity-90 shrink-0">
              <ShieldCheck size={16} />
            </span>
            {/* Texto limpio */}
            <span className="tracking-wide">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}