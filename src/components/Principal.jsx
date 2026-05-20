import React, { useState } from "react";

import Logo1 from "../image/Logo1.png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
      <div className="absolute inset-0 bg-black/60"></div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">

        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-3">

          {/* LOGO */}
          <HashLink
            smooth
            to="/#inicio"
            className="flex items-center gap-3"
          >
            <img
              src={Logo1}
              alt="Segurilabs"
              className="h-11 md:h-13 w-auto object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
                Segurilabs
              </h1>

              <p className="text-[11px] md:text-xs text-green-200 font-medium">
                Seguridad y Salud en el Trabajo
              </p>
            </div>
          </HashLink>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Inicio */}
            <HashLink
              smooth
              to="/#inicio"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </HashLink>

            {/* Nosotros */}
            <Link
              to="/nosotros"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Nosotros
            </Link>

            {/* Servicios */}
            <HashLink
              smooth
              to="/#servicios"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Servicios
            </HashLink>

            {/* Equipo */}
            <HashLink
              smooth
              to="/#equipo"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Equipo
            </HashLink>

            {/* Contacto */}
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contacto
            </a>

            {/* BOTÓN */}
            <HashLink
              smooth
              to="/#cotizar"
              className="rounded-xl bg-green-500 px-4 py-2 text-xs font-semibold text-white shadow-xl hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              Cotizar ahora
            </HashLink>

          </div>

          {/* MOBILE BUTTON */}
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
              className="w-7 h-7"
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

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden mx-5 mb-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 shadow-2xl">

            <div className="flex flex-col gap-5">

              {/* Inicio */}
              <HashLink
                smooth
                to="/#inicio"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Inicio
              </HashLink>

              {/* Nosotros */}
              <Link
                to="/nosotros"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Nosotros
              </Link>

              {/* Servicios */}
              <HashLink
                smooth
                to="/#servicios"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Servicios
              </HashLink>

              {/* Equipo */}
              <HashLink
                smooth
                to="/#equipo"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Equipo
              </HashLink>

              {/* Contacto */}
              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Contacto
              </a>

              {/* Cotizar */}
              <HashLink
                smooth
                to="/#cotizar"
                className="mt-2 rounded-xl bg-green-500 px-4 py-3 text-center text-sm text-white font-semibold hover:bg-green-400 transition"
              >
                Cotizar ahora
              </HashLink>

            </div>
          </div>
        )}

      </header>

      {/* HERO */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-28">

        <div className="max-w-5xl text-center">

          {/* TITULO */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">

            Protegemos el
            <span className="bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
              {" "}bienestar{" "}
            </span>

            de tu empresa
          </h1>

          {/* TEXTO */}
          <p className="mt-7 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">

            Implementamos soluciones integrales en Seguridad y Salud en el Trabajo,
            gestión del riesgo y bienestar organizacional.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <HashLink
              smooth
              to="/#cotizar"
              className="rounded-xl bg-green-500 px-7 py-3 text-sm font-bold text-white shadow-2xl hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              Solicitar asesoría
            </HashLink>

            <HashLink
              smooth
              to="/#servicios"
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              Ver servicios
            </HashLink>

          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">

              <h3 className="text-3xl font-black text-green-300">
                +150
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Empresas asesoradas
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">

              <h3 className="text-3xl font-black text-green-300">
                98%
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Clientes satisfechos
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">

              <h3 className="text-3xl font-black text-green-300">
                24/7
              </h3>

              <p className="mt-2 text-sm text-gray-300">
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