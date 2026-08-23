import React, { useState } from "react";
import { ShieldCheck, PhoneCall } from "lucide-react";

export default function Cotizacion() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    correo: '',
    telefono: '',
    tipoAsesoria: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/solicitudes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('¡Solicitud enviada con éxito!');
      } else {
        alert('Error: ' + data.mensaje);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-green-50 py-24 px-4 sm:px-6 lg:px-8">
      
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-1/2 -translate-x-1/2 rotate-12 bg-gradient-to-tr from-green-200 to-green-400 opacity-30 w-[70rem] aspect-[1155/678]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 mb-6">
            <ShieldCheck className="w-4 h-4" />
            Seguridad y Salud en el Trabajo
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Solicita una asesoría personalizada para tu empresa
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Nuestro equipo está listo para ayudarte a fortalecer la seguridad,
            el bienestar y el cumplimiento normativo de tu organización.
          </p>

          {/* Beneficios */}
          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <p className="text-gray-700">
                Diagnóstico y asesoría especializada
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <p className="text-gray-700">
                Atención rápida y personalizada
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <p className="text-gray-700">
                Soluciones adaptadas a tu empresa
              </p>
            </div>
          </div>

          {/* Contacto rápido */}
          <div className="mt-10 flex items-center gap-4">
            <div className="bg-green-500 text-white p-4 rounded-2xl shadow-lg">
              <PhoneCall className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Atención inmediata
              </p>

              <p className="font-semibold text-gray-900 text-lg">
                +57 300 000 0000
              </p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white/90 backdrop-blur-xl border border-green-100 shadow-2xl rounded-3xl p-8 md:p-10">

          <form className="space-y-6">

            {/* Nombre y apellido */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Nombre
                </label>

<input
  type="text"
  name="nombre"
  value={formData.nombre}
  onChange={handleChange}
  placeholder="Tu nombre"
  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-100"
  required
/>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Apellido
                </label>

                <input
                  type="text"
  name="apellido"
  value={formData.apellido}
  onChange={handleChange}
  placeholder="Tu apellido"
  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-100"
/>
              </div>
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Empresa
              </label>

<input
  type="text"
  name="empresa"
  value={formData.empresa}
  onChange={handleChange}
  placeholder="Empresa"
  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-100"
/>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Correo electrónico
              </label>

<input
  type="email"
  name="correo"
  value={formData.correo}
  onChange={handleChange}
  placeholder="Correo electrónico"
  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-100"
  required
/>
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Número de teléfono
              </label>

<input
     type="tel"
     name="telefono"
     value={formData.telefono}
     onChange={handleChange}
     placeholder="Número de teléfono"
     className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-100"
     required
   />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Mensaje
              </label>

    <textarea
  name="mensaje"
  value={formData.mensaje}
  onChange={handleChange}
  rows={5}
  placeholder="Mensaje"
  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none resize-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-100"
/>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
       <input
  type="checkbox"
  name="aceptaTerminos"
  checked={formData.aceptaTerminos}
  onChange={handleChange}
  className="mt-1 h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-400"
  required
/>

              <p className="text-sm text-gray-600 leading-relaxed">
                Acepto la política de privacidad y el tratamiento de datos personales.
              </p>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-green-500 px-6 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-[1.01]"
            >
              Solicitar asesoría
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}