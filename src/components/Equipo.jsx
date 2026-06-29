import React from "react";

export default function Equipo() {
  const team = [
    {
      name: "Luisa Lopera",
      role: "Coordinadora SG-SST",
      bio: "Psicóloga con práctica privada híbrida, mi trabajo se centra en acompañar duelo, ansiedad, estrés y dificultades relacionales en adultos. También acompaño a adolescentes. Combino rigor clínico con una mirada cercana y humana, cuidando tanto la documentación formal como el vínculo terapéutico a lo largo del proceso.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Milena Palacios",
      role: "Psicólogo Organizacional",
      bio: "Tecnóloga en Seguridad y Salud en el Trabajo, apasionada por el bienestar de las personas y la creación de entornos laborales seguros y saludables. Me caracterizo por ser una persona cercana, creativa y comprometida, enfocada en encontrar soluciones prácticas que promuevan el cuidado, la prevención y el crecimiento de las organizaciones y sus colaboradores.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Nombre Apellido",
      role: "Asesora de Riesgos Laborales",
      bio: "Con formación en medicina del trabajo y ergonomía, lidera los diagnósticos de condiciones de salud y los programas de vigilancia epidemiológica.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-block text-green-600 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
          
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Profesionales comprometidos con tu seguridad
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Contamos con especialistas altamente capacitados en seguridad
            y salud en el trabajo para brindar soluciones integrales y
            acompañamiento estratégico a las empresas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-green-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 via-green-100/0 to-green-200/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Avatar */}
              <div className="relative flex justify-center mb-8">

                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-500 via-green-400 to-emerald-300 p-[5px] shadow-xl">

                  <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">

                    <svg
                      viewBox="0 0 80 80"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[65%] h-[65%] text-gray-400"
                    >
                      <circle
                        cx="40"
                        cy="30"
                        r="16"
                        fill="currentColor"
                        opacity="0.4"
                      />

                      <ellipse
                        cx="40"
                        cy="70"
                        rx="26"
                        ry="17"
                        fill="currentColor"
                        opacity="0.25"
                      />
                    </svg>

                  </div>
                </div>
              </div>

              {/* Información */}
              <div className="relative text-center">

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-5">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {member.bio}
                </p>

                {/* Redes sociales */}
                <div className="flex items-center justify-center gap-4">

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-md hover:scale-110 hover:bg-green-600 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M20.447 20.452H16.9v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-md hover:scale-110 hover:bg-green-600 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm8.88 1.12a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}