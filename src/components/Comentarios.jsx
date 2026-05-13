import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Comentarios() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const comments = [
    {
      id: 1,
      name: "María García",
      role: "Directora Ejecutiva",
      company: "TechVision Solutions",
      content:
        "Excelente servicio, superaron nuestras expectativas. El equipo fue profesional y entregó los resultados a tiempo.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "CEO",
      company: "Digital Innovations Inc",
      content:
        "Una experiencia transformadora. No solo cumplieron con lo solicitado, sino que aportaron ideas innovadoras.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Alejandra Ruiz",
      role: "Gerente de Proyectos",
      company: "Creative Agency Co",
      content:
        "Impresionante atención al detalle y compromiso con la calidad.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Diego Sánchez",
      role: "Fundador",
      company: "StartUp Ventures",
      content:
        "El mejor equipo con el que hemos trabajado. Profesionales y responsables.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Laura Fernández",
      role: "Coordinadora",
      company: "Enterprise Global",
      content:
        "Recomendamos ampliamente sus servicios. Fueron puntuales y eficientes.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517256673193-ecf94d273885?w=400&h=400&fit=crop",
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
            Testimonios
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Lo que dicen nuestros clientes
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
            Empresas que han confiado en nosotros destacan nuestro compromiso,
            profesionalismo y calidad en cada proyecto.
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
      {/* Top */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={comment.image}
          alt={comment.name}
          loading="lazy"
          className={`rounded-full object-cover border-2 border-white shadow-md ${
            active ? "w-16 h-16" : "w-12 h-12"
          }`}
        />

        <div>
          <h3
            className={`font-bold text-gray-900 ${
              active ? "text-lg" : "text-sm"
            }`}
          >
            {comment.name}
          </h3>

          <p className="text-gray-500 text-sm">
            {comment.role}
          </p>

          <p className="text-green-600 text-sm font-medium">
            {comment.company}
          </p>
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