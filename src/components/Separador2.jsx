import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Separador2() {
  return (
    <section className="w-full bg-green-200 py-8 px-6">

      <div className="max-w-5xl mx-auto rounded-3xl bg-white p-6 shadow-lg border border-green-300">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            "SG-SST",
            "Plan de emergencias",
            "Capacitaciones",
            "Riesgo psicosocial",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >

              <div className="w-11 h-11 rounded-2xl bg-green-600 text-white flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>

              <p className="font-semibold text-gray-800">
                {item}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}