import React, { useState } from "react";
import logo from "../image/Logo1.png";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1720]/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Logo Segurilabs"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h2 className="text-2xl font-black tracking-wide text-white">
                SEGURILABS
              </h2>

              <span className="text-sm text-green-300 font-medium">
                Seguridad y salud laboral
              </span>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            
            <a
              href="#"
              className="relative text-white font-medium transition duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </a>

            <a
              href="#"
              className="relative text-white font-medium transition duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Nosotros
            </a>

            <a
              href="#"
              className="relative text-white font-medium transition duration-300 hover:text-green-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Servicios
            </a>

            <a
              href="#contacto"
              className="bg-gradient-to-r from-green-400 to-green-500 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-green-500/30 transition-all duration-300"
            >
              Contacto
            </a>
          </nav>

          {/* Botón Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {open && (
          <div className="md:hidden pb-6 flex flex-col gap-5 animate-fadeIn">
            
            <a
              href="#"
              className="text-white font-medium hover:text-green-300 transition"
            >
              Inicio
            </a>

            <a
              href="#"
              className="text-white font-medium hover:text-green-300 transition"
            >
              Nosotros
            </a>

            <a
              href="#"
              className="text-white font-medium hover:text-green-300 transition"
            >
              Servicios
            </a>

            <a
              href="#contacto"
              className="bg-green-400 text-black text-center py-3 rounded-xl font-bold hover:bg-green-300 transition"
            >
              Contacto
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;