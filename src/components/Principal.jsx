import React from 'react'
import Logo1 from '../image/Logo1.png'

const Principal = () => {
  return (
    <div
      className="relative bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between px-8 py-8 lg:px-14"
        >
          {/* Logo */}
          <div className="flex items-center gap-4 lg:flex-1">
            <a href="#" className="-m-2.5 p-2.5 flex items-center gap-4">
              <span className="sr-only">Segurilabs</span>

              <img
                src={Logo1}
                alt="Logo"
                className="h-24 w-auto relative z-10"
              />

              <div className="relative z-10">
                <h1 className="text-2xl font-bold text-white">
                  Segurilabs
                </h1>

                <p className="text-sm text-gray-300">
                  Seguridad y Salud en el Trabajo
                </p>
              </div>
            </a>
          </div>

          {/* Menú móvil */}
          <div className="flex lg:hidden relative z-10">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-8"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Menú desktop */}
          <div className="hidden lg:flex lg:gap-x-16 relative z-10">

            <a
              href="#"
              className="relative text-lg font-semibold text-white transition duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-2
              after:w-0 after:h-[3px] after:bg-green-400
              after:transition-all after:duration-300
              hover:text-green-300 hover:after:w-full"
            >
              Inicio
            </a>

            <a
              href="#"
              className="relative text-lg font-semibold text-white transition duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-2
              after:w-0 after:h-[3px] after:bg-green-400
              after:transition-all after:duration-300
              hover:text-green-300 hover:after:w-full"
            >
              Nosotros
            </a>

            <a
              href="#"
              className="relative text-lg font-semibold text-white transition duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-2
              after:w-0 after:h-[3px] after:bg-green-400
              after:transition-all after:duration-300
              hover:text-green-300 hover:after:w-full"
            >
              Servicios
            </a>

            <a
              href="#"
              className="relative text-lg font-semibold text-white transition duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-2
              after:w-0 after:h-[3px] after:bg-green-400
              after:transition-all after:duration-300
              hover:text-green-300 hover:after:w-full"
            >
              Preguntas
            </a>

          </div>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative isolate px-6 pt-20 lg:px-8 z-10">

        {/* Fondo superior */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a855f7] to-[#4ade80] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Contenido */}
        <div className="mx-auto max-w-4xl py-36 sm:py-48 lg:py-56">
          <div className="text-center">

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight">
              Protegemos tu empresa y el bienestar de tu equipo
            </h1>

            <p className="mt-8 text-xl font-medium text-gray-300 leading-9">
              Asesoría en Seguridad y Salud en el Trabajo y atención psicológica profesional
            </p>

            <div className="mt-12 flex items-center justify-center gap-x-8">
              <a
                href="#"
                className="rounded-xl bg-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-indigo-400 transition"
              >
                Solicitar Asesoría
              </a>

              <a
                href="#"
                className="text-lg font-semibold text-white hover:text-indigo-300 transition"
              >
                Ver planes →
              </a>
            </div>

          </div>
        </div>

        {/* Fondo inferior */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a855f7] to-[#4ade80] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

      </div>
    </div>
  )
}

export default Principal