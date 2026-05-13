import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Presencia() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 font-semibold">
            Nuestra ubicación
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-black">
            Estamos cerca de ti
          </h2>

          <div className="w-28 h-1 bg-green-400 rounded-full mt-5"></div>
        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Tarjetas — flex-col + h-full para igualar altura del mapa */}
          <div className="flex flex-col gap-4 h-full">

            {/* Card 1 — Ubicación */}
            <div className="flex-1 bg-black rounded-3xl p-8 shadow-xl border border-purple-500/20 hover:scale-[1.01] transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-400/20 p-4 rounded-2xl">
                  <MapPin className="text-green-400 w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-3">
                    Ubicación
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Centro Comercial Plaza Real <br />
                    Bello, Antioquia <br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 — Contacto */}
            <div className="flex-1 bg-purple-700 rounded-3xl p-8 shadow-xl hover:scale-[1.01] transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Phone className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-3">
                    Contacto
                  </h3>
                  <p className="text-purple-100">
                    +57 300 000 0000 <br />
                    empresa@email.com
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 — Horarios */}
            <div className="flex-1 bg-green-400 rounded-3xl p-8 shadow-xl hover:scale-[1.01] transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-4 rounded-2xl">
                  <Clock className="text-black w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-black text-xl font-semibold mb-3">
                    Horarios
                  </h3>
                  <p className="text-black/80">
                    Lunes a Viernes <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Mapa */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">
            {/* Línea decorativa */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-purple-600 z-10"></div>

            <iframe
              title="Mapa empresa"
              src="https://maps.google.com/maps?q=6.6470161,-75.4598565&z=17&output=embed"
              className="w-full h-full min-h-[600px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-black font-semibold">Oficina Principal</p>
              <p className="text-sm text-gray-600">Centro Comercial Plaza Real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
