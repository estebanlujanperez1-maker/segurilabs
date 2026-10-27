import React from "react";

import milenaImage from "../image/Milena .jpg";
import sebastianImage from "../image/Sebastian .jpg";

export default function Equipo() {
  const team = [
    {
      name: "Atención de",
      role: "psicóloga Organizacional",
      image: null,
      bio: "Somos un equipo de profesionales en psicología que brinda atención presencial y virtual a adultos y adolescentes, acompañando procesos de duelo, ansiedad, estrés y dificultades relacionales. Nos caracterizamos por ofrecer una atención cercana, empática y humana, creando espacios seguros y libres de juicios donde cada persona pueda expresar sus emociones, afrontar los desafíos de la vida y fortalecer su bienestar emocional.",
    },
    {
      name: "Milena Palacio",
      role: "Coordinadora SST",
      image: milenaImage,
      bio: "Tecnóloga en Seguridad y Salud en el Trabajo, apasionada por el bienestar de las personas y la creación de entornos laborales seguros y saludables. Me caracterizo por ser una persona cercana, creativa y comprometida, enfocada en encontrar soluciones prácticas que promuevan el cuidado, la prevención y el crecimiento de las organizaciones y sus colaboradores.",
    },
    {
      name: "Sebastián",
      role: "Asesor de Riesgos Laborales",
      image: sebastianImage,
      bio: "Profesional comprometido con la seguridad y la salud en el trabajo, enfocado en la prevención de riesgos laborales y la promoción de entornos de trabajo seguros y saludables.",
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

        {/* Tarjetas del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-green-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Efecto decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 via-green-100/0 to-green-200/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

              {/* Fotografía */}
              <div className="relative flex justify-center mb-8">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-500 via-green-400 to-emerald-300 p-[5px] shadow-xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`Fotografía de ${member.name}`}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    ) : (
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
                    )}
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

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}