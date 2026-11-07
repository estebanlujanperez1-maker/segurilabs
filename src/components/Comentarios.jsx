import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import CDA from "../image/CDA.jpeg";
import Occygea from "../image/Occygea.png";
import Daniel from "../image/Daniel.png";
import Danjo from "../image/Danjo.png";

export default function Comentarios() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const comments = [
    {
      id: 1,
      company: "Constructora & Consultores SST",
      content:
        "La implementación del SG-SST fue impecable. Nos ayudaron a cumplir con toda la normatividad legal vigente y a reducir los riesgos laborales significativamente.",
      rating: 5,
      logo: CDA,
    },
    {
      id: 2,
      company: "OCCYGEA",
      content:
        "Su asesoría en medicina preventiva y capacitaciones en seguridad industrial transformaron la cultura de autocuidado en nuestra empresa. Totalmente recomendados.",
      rating: 5,
      logo: Occygea,
    },
    {
      id: 3,
      company: "Ingeniero Daniel Preciado",
      content:
        "Excelente acompañamiento en la matriz de peligros y valorización de riesgos. Demuestran un gran dominio técnico y compromiso con la integridad de los trabajadores.",
      rating: 5,
      logo: Daniel,
    },
    {
      id: 4,
      company: "Danjo Construcciones",
      content:
        "Gracias a su gestión en SST, optimizamos los protocolos de trabajo en alturas y elementos de protección personal. Un aliado clave para nuestras obras.",
      rating: 5,
      logo: Danjo,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % comments.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [comments.length]);

  const prevIndex =
    (currentIndex - 1 + comments.length) % comments.length;

  const nextIndex =
    (currentIndex + 1) % comments.length;

  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-widest text-sm">
            Testimonios SST
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Lo que dicen nuestros clientes en Seguridad y Salud
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
            Empresas del sector industrial y de construcción que confían en nosotros para proteger su activo más valioso: sus trabajadores.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left */}
          <div className="hidden lg:block w-60 opacity-40 scale-90 transition-all duration-500">
            <CommentCard
              comment={comments[prevIndex]}
              active={false}
            />
          </div>

          {/* Center */}
          <div className="w-full max-w-lg mx-4 relative z-10">
            <CommentCard
              comment={comments[currentIndex]}
              active={true}
            />
          </div>

          {/* Right */}
          <div className="hidden lg:block w-60 opacity-40 scale-90 transition-all duration-500">
            <CommentCard
              comment={comments[nextIndex]}
              active={false}
            />
          </div>

          {/* Navigation */}
          <button
            onClick={() =>
              setCurrentIndex(prevIndex)
            }
            className="absolute left-0 md:left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={() =>
              setCurrentIndex(nextIndex)
            }
            className="absolute right-0 md:right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {comments.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-2 bg-green-500"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CommentCard({ comment, active }) {
  return (
    <div
      className={`rounded-3xl transition-all duration-500 backdrop-blur-sm ${
        active
          ? "bg-green-100 border border-green-200 shadow-2xl p-8"
          : "bg-white border border-gray-200 shadow-md p-5"
      }`}
    >
      {/* Top: Logo y Nombre de la Empresa */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={comment.logo}
          alt={`Logo de ${comment.company}`}
          loading="lazy"
          className={`object-contain bg-white rounded-lg p-1.5 border border-gray-100 shadow-sm ${
            active ? "w-16 h-16" : "w-12 h-12"
          }`}
        />

        <div>
          <h3
            className={`font-bold text-gray-900 ${
              active ? "text-xl" : "text-base"
            }`}
          >
            {comment.company}
          </h3>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: comment.rating }).map((_, i) => (
          <Star
            key={i}
            className={`fill-yellow-400 text-yellow-400 ${
              active ? "w-5 h-5" : "w-4 h-4"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p
        className={`text-gray-700 leading-relaxed ${
          active ? "text-base" : "text-sm"
        }`}
      >
        “{comment.content}”
      </p>
    </div>
  );
}