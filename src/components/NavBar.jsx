import React, { useState } from "react";
import Logo1 from "../image/Logo1.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Número y mensaje predeterminado configurado para WhatsApp
  const phone = "3207805001";
  const message = encodeURIComponent(
    "Hola, Segurilabs. Me comunico con ustedes porque estoy interesado/a en recibir asesoría y más información sobre sus servicios de seguridad y salud."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

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
          <div className="hidden lg:flex items-center gap-7">

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

            {/* BOTÓN WHATSAPP (DESKTOP) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-700 bg-emerald-100/70 hover:bg-emerald-100 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
            >
              {/* Icono de WhatsApp */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4 text-emerald-600"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp
            </a>

            {/* BOTÓN COTIZAR */}
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

              {/* ENLACE WHATSAPP (MÓVIL) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-2 text-emerald-700 font-semibold"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5 text-emerald-600"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Escríbenos por WhatsApp
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