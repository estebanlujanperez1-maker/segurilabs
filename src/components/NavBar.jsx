import React, { useState } from "react";
import Logo1 from "../image/Logo1.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-emerald-50/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        
        <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[82px] flex items-center justify-between">

          {/* LOGO */}
          <HashLink
            smooth
            to="/#inicio"
            className="flex items-center gap-3 group"
          >
            <img
              src={Logo1}
              alt="Segurilabs"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-all duration-300"
            />

            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
                Segurilabs
              </h1>

              <p className="text-[11px] md:text-xs text-emerald-700 font-semibold uppercase tracking-[2px]">
                Seguridad y Salud
              </p>
            </div>
          </HashLink>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">

            <HashLink
              smooth
              to="/#inicio"
              className="text-slate-700 font-semibold text-sm hover:text-emerald-600 transition-colors duration-300"
            >
              Inicio
            </HashLink>

            <Link
              to="/nosotros"
              className="text-slate-700 font-semibold text-sm hover:text-emerald-600 transition-colors duration-300"
            >
              Nosotros
            </Link>

            <HashLink
              smooth
              to="/#servicios"
              className="text-slate-700 font-semibold text-sm hover:text-emerald-600 transition-colors duration-300"
            >
              Servicios
            </HashLink>

            <HashLink
              smooth
              to="/#equipo"
              className="text-slate-700 font-semibold text-sm hover:text-emerald-600 transition-colors duration-300"
            >
              Equipo
            </HashLink>

            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 font-semibold text-sm hover:text-emerald-600 transition-colors duration-300"
            >
              Contacto
            </a>

            {/* BOTÓN */}
            <HashLink
              smooth
              to="/#cotizar"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Cotizar Ahora
            </HashLink>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-emerald-100 shadow-sm text-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileMenu
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 7h16M4 12h16M4 17h16"
                }
              />
            </svg>
          </button>
        </nav>

        {/* MENÚ MOBILE */}
        {mobileMenu && (
          <div className="lg:hidden border-t border-emerald-100 bg-emerald-50 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
            
            <div className="flex flex-col gap-5">

              <HashLink
                smooth
                to="/#inicio"
                onClick={() => setMobileMenu(false)}
                className="text-slate-700 font-semibold"
              >
                Inicio
              </HashLink>

              <Link
                to="/nosotros"
                onClick={() => setMobileMenu(false)}
                className="text-slate-700 font-semibold"
              >
                Nosotros
              </Link>

              <HashLink
                smooth
                to="/#servicios"
                onClick={() => setMobileMenu(false)}
                className="text-slate-700 font-semibold"
              >
                Servicios
              </HashLink>

              <HashLink
                smooth
                to="/#equipo"
                onClick={() => setMobileMenu(false)}
                className="text-slate-700 font-semibold"
              >
                Equipo
              </HashLink>

              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenu(false)}
                className="text-slate-700 font-semibold"
              >
                Contacto
              </a>

              <HashLink
                smooth
                to="/#cotizar"
                onClick={() => setMobileMenu(false)}
                className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-2xl font-bold shadow-md transition-all duration-300"
              >
                Cotizar Ahora
              </HashLink>
            </div>
          </div>
        )}
      </header>

      {/* ESPACIO */}
      <div className="h-[82px] w-full"></div>
    </>
  );
};

export default NavBar;