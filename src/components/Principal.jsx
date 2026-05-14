import React, { useState } from "react";
import Logo1 from "../image/Logo1.png";

const Principal = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-green-950/70"></div>

      {/* Blur decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <header className="relative z-50">

        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-6">

          {/* Logo */}
          <a href="#" className="flex items-center gap-4">

            <img
              src={Logo1}
              alt="Segurilabs"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-xl"
            />

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                Segurilabs
              </h1>

              <p className="text-sm text-green-200 font-medium">
                Seguridad y Salud en el Trabajo
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">

            {[
              "Inicio",
              "Nosotros",
              "Servicios",
              "Equipo",
              "Contacto",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative text-white text-base font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}

            {/* Botón */}
            <a
              href="#"
              className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              Cotizar ahora
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileMenu
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="lg:hidden mx-6 mt-2 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">

            <div className="flex flex-col gap-5">

              {[
                "Inicio",
                "Nosotros",
                "Servicios",
                "Equipo",
                "Contacto",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white font-medium hover:text-green-300 transition"
                >
                  {item}
                </a>
              ))}

              <a
                href="#"
                className="mt-3 rounded-2xl bg-green-500 px-5 py-3 text-center text-white font-semibold hover:bg-green-400 transition"
              >
                Cotizar ahora
              </a>

            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="max-w-5xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-5 py-2 backdrop-blur-md mb-8">

            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            <p className="text-sm font-medium text-green-200">
              Expertos en Seguridad y Salud Laboral
            </p>
          </div>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">

            Protegemos el
            <span className="bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
              {" "}bienestar{" "}
            </span>

            de tu empresa
          </h1>

          {/* Texto */}
          <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">

            Implementamos soluciones integrales en Seguridad y Salud en el Trabajo,
            gestión del riesgo y bienestar organizacional para empresas modernas.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

            <a
              href="#"
              className="rounded-2xl bg-green-500 px-8 py-4 text-base font-bold text-white shadow-2xl hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              Solicitar asesoría
            </a>

            <a
              href="#"
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              Ver servicios
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

              <h3 className="text-4xl font-black text-green-300">
                +150
              </h3>

              <p className="mt-2 text-gray-300">
                Empresas asesoradas
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

              <h3 className="text-4xl font-black text-green-300">
                98%
              </h3>

              <p className="mt-2 text-gray-300">
                Clientes satisfechos
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

              <h3 className="text-4xl font-black text-green-300">
                24/7
              </h3>

              <p className="mt-2 text-gray-300">
                Acompañamiento profesional
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;