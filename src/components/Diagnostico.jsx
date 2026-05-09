import React from 'react'

const Diagnostico = () => {
  return (
    <div>
        <div>
        <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-green-400 min-h-screen px-6 py-16 lg:px-16">
  
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

    {/* Texto izquierdo */}
    <div>

      <p className="mb-8 text-sm font-semibold uppercase tracking-[0.4em] text-green-100">
        Da el primer paso
      </p>

      <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-7xl">
        Tu empresa merece
        <br />

        <span className="text-green-200">
          operar sin miedo
        </span>

        <br />
        a una sanción
      </h1>

      <p className="mt-10 max-w-2xl text-lg leading-9 text-white/90">
        En 30 minutos de diagnóstico gratuito identificamos exactamente
        qué le falta a tu SG-SST para estar blindado legalmente ante el Ministerio.
      </p>

      {/* Lista */}
      <div className="mt-10 space-y-6">

        <div className="flex items-start gap-4">
          <div className="text-3xl text-green-200">✓</div>

          <p className="text-lg text-white">
            Evaluación frente a los estándares mínimos.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-3xl text-green-200">✓</div>

          <p className="text-lg text-white">
            Identificación de brechas sancionables.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-3xl text-green-200">✓</div>

          <p className="text-lg text-white">
            Plan de acción inmediato para cierre de ciclo.
          </p>
        </div>

      </div>
    </div>

    {/* Card derecha */}
    <div className="flex justify-center lg:justify-end">

      <div className="w-full max-w-xl rounded-[40px] bg-white p-10 shadow-2xl">

        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400"></div>

          <span className="text-sm font-bold uppercase tracking-[0.3em] text-purple-600">
            En línea ahora
          </span>
        </div>

        <h2 className="text-center text-4xl font-bold leading-tight text-purple-700">
          Agenda tu Diagnóstico
          <br />
          Gratuito
        </h2>

        {/* Botón */}
        <button className="mt-10 flex w-full items-center justify-center gap-4 rounded-2xl bg-green-400 px-6 py-5 text-xl font-bold text-white shadow-lg transition hover:bg-green-300">

          {/* Icono WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M19.11 17.19c-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.38-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.92 2.93 4.65 4.11.65.27 1.16.43 1.56.55.66.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z" />

            <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.82.92 5.56 2.61 7.81L4 29l5.35-1.56A12.94 12.94 0 0 0 16.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3zm0 23.67c-2.16 0-4.27-.58-6.11-1.68l-.44-.26-3.18.93.94-3.1-.29-.46a10.61 10.61 0 0 1-1.63-5.66c0-5.9 4.8-10.7 10.71-10.7 2.86 0 5.54 1.11 7.56 3.13A10.64 10.64 0 0 1 26.7 16c0 5.9-4.8 10.67-10.69 10.67z" />
          </svg>

          ESCRIBIR POR WHATSAPP
        </button>

        <p className="mt-8 text-center text-lg text-gray-500">
          Chat directo con tu asesor especializado
        </p>

      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Diagnostico