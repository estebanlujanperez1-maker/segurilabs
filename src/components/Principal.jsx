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

      {/* WIDGET FLOTANTE INNOVADOR - DIAGNÓSTICO GRATIS (LADO IZQUIERDO) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group">
        <a
          href="https://wa.me/573001112233?text=Hola,%20quisiera%20solicitar%20mi%20Diagnóstico%20Gratis"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 bg-black/70 backdrop-blur-xl border-y border-r border-green-500/40 p-2.5 sm:p-3 rounded-r-2xl shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all duration-300 hover:translate-x-2 hover:border-green-400 hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] group"
        >
          {/* Indicador de pulso animado en vivo */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
          </span>

          {/* Icono con Gradiente y Efecto Hover */}
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          {/* Texto del Widget */}
          <div className="flex flex-col pr-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Obtén tu
            </span>
            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-green-300 transition-colors whitespace-nowrap">
              Diagnóstico Gratis
            </span>
          </div>
        </a>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
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
              className="h-20 md:h-25 w-auto object-contain"
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
            <HashLink
              smooth
              to="/#inicio"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </HashLink>

            <HashLink
              smooth
              to="/#servicios"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Servicios
            </HashLink>

            <HashLink
              smooth
              to="/#equipo"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Equipo
            </HashLink>

            <Link
              to="/blog"
              className="relative text-white text-sm font-semibold transition-all duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </Link>

            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-4 py-2 text-xs font-semibold text-white shadow-xl hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              Cotizar ahora
            </a>
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
              <HashLink
                smooth
                to="/#inicio"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Inicio
              </HashLink>

              <Link
                to="/nosotros"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Nosotros
              </Link>

              <HashLink
                smooth
                to="/#servicios"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Servicios
              </HashLink>

              <HashLink
                smooth
                to="/#equipo"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Equipo
              </HashLink>

              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-medium hover:text-green-300 transition"
              >
                Contacto
              </a>

              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-xl bg-green-500 px-4 py-3 text-center text-sm text-white font-semibold hover:bg-green-400 transition"
              >
                Cotizar ahora
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-28">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">
            Protegemos el
            <span className="bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
              {" "}bienestar{" "}
            </span>
            de tu empresa
          </h1>

          <p className="mt-7 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Implementamos soluciones integrales en Seguridad y Salud en el Trabajo,
            gestión del riesgo y bienestar organizacional.
          </p>

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
        </div>
      </div>
    </section>
  );
};

export default Principal;