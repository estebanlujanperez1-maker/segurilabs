import React from "react";

export default function Cotizacion() {
  return (
    <section className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 -translate-x-1/2 rotate-12 bg-gradient-to-tr from-green-200 to-green-400 opacity-30 w-[72rem] aspect-[1155/678]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Encabezado */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Contáctanos
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Solocita una cotización personalizada para tu empresa.
        </p>
      </div>

      {/* Formulario */}
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Nombre
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                placeholder="Tu nombre"
                className="block w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Apellido */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Apellido
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                placeholder="Tu apellido"
                className="block w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Empresa */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Empresa
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                placeholder="Nombre de tu empresa"
                className="block w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Correo electrónico
            </label>

            <div className="mt-2.5">
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="block w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Teléfono */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Número de teléfono
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                placeholder="+57 300 000 0000"
                className="block w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Mensaje
            </label>

            <div className="mt-2.5">
              <textarea
                rows={5}
                placeholder="Escribe tu mensaje..."
                className="block w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="sm:col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-green-300 text-green-500 focus:ring-green-400"
            />

            <p className="text-sm text-gray-600">
              Acepto la política de privacidad.
            </p>
          </div>
        </div>

        {/* Botón */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-600"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </section>
  );
}