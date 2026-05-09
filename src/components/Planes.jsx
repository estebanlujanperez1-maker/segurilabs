import React from 'react'

const Planes = () => {
  return (
   <div>
  <section className="bg-white py-24 px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-green-500 font-semibold"></p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight text-black sm:text-6xl">
          Conoce nuestros planes
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Elige tu plan según tus necesidades
        </p>
      </div>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">

        {/* Card 1 */}
        <div className="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-black">
            Microempresa
          </h3>

          <p className="mt-4 text-gray-700">
            Ideal para empresas pequeñas
          </p>

          <div className="mt-8 flex items-end gap-1">
            <span className="text-5xl font-bold text-black">$19</span>
            <span className="mb-1 text-gray-600">/mes</span>
          </div>

          <ul className="mt-10 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              5 productos
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Hasta 1,000 usuarios
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Análisis básico
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Soporte en 48 horas
            </li>
          </ul>

          <button className="mt-10 w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-400">
            Comprar plan
          </button>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-3xl border border-green-400 bg-green-50 p-8 shadow-xl shadow-green-200">

          <div className="absolute right-6 top-6 rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-700">
            Más popular
          </div>

          <h3 className="text-2xl font-bold text-green-700">
            Empresa Mediana
          </h3>

          <p className="mt-4 text-gray-700">
            Este plan es ideal para medianas empresas
          </p>

          <div className="mt-8 flex items-end gap-1">
            <span className="text-5xl font-bold text-black">$49</span>
            <span className="mb-1 text-gray-600">/mes</span>
          </div>

          <ul className="mt-10 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              25 productos
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Hasta 10,000 usuarios
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Análisis avanzado
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Soporte en 24 horas
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Automatización de marketing
            </li>
          </ul>

          <button className="mt-10 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-500">
            Comprar plan
          </button>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-black">
            Empresarial
          </h3>

          <p className="mt-4 text-gray-700">
            Ideal para grandes compañías
          </p>

          <div className="mt-8 flex items-end gap-1">
            <span className="text-5xl font-bold text-black">$99</span>
            <span className="mb-1 text-gray-600">/mes</span>
          </div>

          <ul className="mt-10 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Productos ilimitados
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Usuarios ilimitados
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Análisis avanzado
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Soporte prioritario 24/7
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Automatización de marketing
            </li>
          </ul>

          <button className="mt-10 w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-400">
            Comprar plan
          </button>
        </div>

      </div>
    </div>
  </section>
</div>
  )
}

export default Planes