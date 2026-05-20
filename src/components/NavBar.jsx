import React, { useState } from "react";

import Logo1 from "../image/Logo1.png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
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
    </>
  );
};

export default NavBar;