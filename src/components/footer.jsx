import React from "react";
import Logo1 from "../image/Logo1.png";
import WhatsappLogo from "../image/whatsapp.png";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-green-700 via-green-800 to-emerald-950 text-white overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-300/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Brand */}
            <div className="flex items-center gap-5">

              <img
                src={Logo1}
                alt="Segurilabs"
                className="h-20 w-auto object-contain"
              />

              <div>

                <h2 className="text-3xl font-extrabold tracking-wide">
                  SEGURILABS
                </h2>

                <p className="text-green-100 mt-1 text-sm">
                  Seguridad y Salud en el Trabajo
                </p>

              </div>
            </div>

            {/* Email Box */}
            <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 backdrop-blur-md shadow-xl">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.909A2.25 2.25 0 0 1 2.25 6.993V6.75"
                  />
                </svg>

              </div>

              <div>

                <p className="text-sm text-green-100">
                  Correo principal
                </p>

                <a
                  href="mailto:contacto@empresa.com"
                  className="text-white font-semibold hover:text-green-200 transition"
                >
                  contacto@empresa.com
                </a>

              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 my-12"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Horarios */}
            <div>

              <h3 className="text-lg font-bold mb-4 text-green-300">
                Horarios
              </h3>

              <p className="text-white">
                Lunes a Viernes
              </p>

              <p className="text-green-100 mt-1">
                8:00 AM - 6:00 PM
              </p>

            </div>

            {/* Ubicación */}
            <div>

              <h3 className="text-lg font-bold mb-4 text-green-300">
                Ubicación
              </h3>

              <p className="text-white">
                Calle 123 #45-67
              </p>

              <p className="text-green-100 mt-1">
                Cali, Colombia
              </p>

            </div>

            {/* SST */}
            <div>

              <h3 className="text-lg font-bold mb-4 text-green-300">
                Contacto SST
              </h3>

              <a
                href="tel:+573000000000"
                className="text-white hover:text-green-200 transition"
              >
                +57 300 000 0000
              </a>

            </div>

            {/* Psicología */}
            <div>

              <h3 className="text-lg font-bold mb-4 text-green-300">
                Contacto Psicología
              </h3>

              <a
                href="tel:+573010000000"
                className="text-white hover:text-green-200 transition"
              >
                +57 301 000 0000
              </a>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-5 border-t border-white/20 pt-8">

            <p className="text-green-100 text-sm text-center md:text-left">
              © 2026 Segurilabs. Todos los derechos reservados.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">

              {/* Instagram */}
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.447 20.452H16.9v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/573126544698"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div
          className="
            relative
            w-24 h-24
            rounded-full
            bg-white
            flex items-center justify-center
            shadow-[0_15px_40px_rgba(0,0,0,0.45)]
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-40 scale-110"></div>

          {/* Logo */}
          <img
            src={WhatsappLogo}
            alt="WhatsApp"
            className="relative z-10 w-20 h-20 object-contain"
          />

        </div>
      </a>
    </>
  );
};

export default Footer;