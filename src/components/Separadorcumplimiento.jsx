import React from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function SeparadorCumplimiento() {
  // Reemplaza este número por el tuyo (incluye el código de país, ej: 57 para Colombia)
  const telefono = "573000000000"; 
  const mensaje = encodeURIComponent("Hola, me interesa solicitar el diagnóstico gratis de cumplimiento para mi empresa.");
  const whatsappUrl = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <div className="w-full bg-green-500 px-6 py-5 hover:bg-green-400 transition duration-300 shadow-sm text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Lado Izquierdo: Impacto y Datos */}
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-5">
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm shrink-0">
            <TrendingUp size={18} className="text-white" />
            <span className="text-xl md:text-2xl font-black tracking-tight">92%</span>
          </div>
          
          <h2 className="text-sm md:text-base font-semibold max-w-xl text-balance leading-tight">
            Elevamos el nivel de cumplimiento empresarial. Protege tu negocio de sanciones hoy mismo.
          </h2>
        </div>

        {/* Lado Derecho: Botón de Acción hacia WhatsApp */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 px-4 py-2 rounded-xl text-xs md:text-sm font-bold shadow-md transition-all duration-300 transform hover:scale-[1.02] shrink-0"
        >
          Diagnóstico Gratis
          <ArrowRight size={16} />
        </a>

      </div>
    </div>
  );
}