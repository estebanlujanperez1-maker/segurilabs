import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";

export default function Presencia() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-green-50 py-24 px-6 lg:px-16">

      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-16">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-green-100
              border border-green-200
              px-5 py-2
              text-xs font-bold
              uppercase tracking-[0.2em]
              text-green-700
            "
          >
            Nuestra ubicación
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-extrabold
              text-gray-900
              leading-tight
            "
          >
            Estamos cerca de
            <span className="block text-green-600">
              tu empresa
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Brindamos atención personalizada y acompañamiento
            profesional en Seguridad y Salud en el Trabajo.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Cards */}
          <div className="flex flex-col gap-6">

            {/* Ubicación */}
            <div
              className="
                group
                bg-white/80
                backdrop-blur-xl
                border border-green-100
                rounded-3xl
                p-8
                shadow-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="flex items-start gap-5">

                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-green-100
                    flex items-center justify-center
                    group-hover:bg-green-600
                    transition-all duration-300
                  "
                >
                  <MapPin className="w-8 h-8 text-green-700 group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Ubicación
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Centro Comercial Plaza Real
                    <br />
                    Bello, Antioquia
                    <br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div
              className="
                group
                bg-gradient-to-br
                from-green-600
                to-emerald-500
                rounded-3xl
                p-8
                shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              <div className="flex items-start gap-5">

                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-md
                    flex items-center justify-center
                  "
                >
                  <Phone className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Contacto
                  </h3>

                  <div className="space-y-2">

                    <p className="text-green-50 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +57 300 000 0000
                    </p>

                    <p className="text-green-50 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      contacto@segurilabs.com
                    </p>

                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div
              className="
                group
                bg-gray-900
                rounded-3xl
                p-8
                shadow-xl
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              <div className="flex items-start gap-5">

                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-green-500/20
                    flex items-center justify-center
                  "
                >
                  <Clock className="w-8 h-8 text-green-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Horarios
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    Lunes a Viernes
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              shadow-2xl
              border border-white/20
              min-h-[650px]
              group
            "
          >

            {/* Glow */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-green-500/10
                to-transparent
                z-10
                pointer-events-none
              "
            ></div>

            {/* Línea superior */}
            <div
              className="
                absolute top-0 left-0
                w-full h-2
                bg-gradient-to-r
                from-green-400
                via-emerald-500
                to-green-700
                z-20
              "
            ></div>

            <iframe
              title="Mapa empresa"
              src="https://www.google.com/maps?q=6.6470161,-75.4598565&hl=es&z=17&output=embed"
              className="
                absolute inset-0
                w-full h-full
                border-0
                grayscale-[0.1]
                group-hover:scale-105
                transition-transform duration-700
              "
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay info */}
            <div
              className="
                absolute
                bottom-6 left-6 right-6
                bg-white/85
                backdrop-blur-xl
                rounded-3xl
                p-6
                shadow-2xl
                z-20
              "
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">

                <div>
                  <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                    Oficina Principal
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    Segurilabs
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Centro Comercial Plaza Real · Bello, Antioquia
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/TCTzpczaQzsrAzwTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-6 py-3
                    rounded-2xl
                    bg-green-600
                    text-white
                    font-semibold
                    shadow-lg
                    hover:bg-green-700
                    transition-all duration-300
                  "
                >
                  Ver ubicación
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}