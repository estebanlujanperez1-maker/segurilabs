import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Comentarios() {
  const [currentIndex, setCurrentIndex] = useState(1);

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
    }, 5000);

    return () => clearInterval(interval);
  }, [comments.length]);

  const getPrevIndex = () =>
    (currentIndex - 1 + comments.length) % comments.length;

  const getNextIndex = () =>
    (currentIndex + 1) % comments.length;

  const handlePrev = () => {
    setCurrentIndex(getPrevIndex());
  };

  const handleNext = () => {
    setCurrentIndex(getNextIndex());
  };

  return (
    <section className="w-full bg-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comentarios de nuestros clientes
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-green-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>

          <p className="text-gray-600 text-base mt-5 max-w-xl mx-auto">
            Descubre lo que nuestros clientes dicen sobre nosotros
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Izquierda */}
          <div className="hidden md:block w-52 opacity-50 scale-90">
            <CommentCard
              comment={comments[getPrevIndex()]}
              isCenter={false}
            />
          </div>

          {/* Centro */}
          <div className="w-full max-w-md z-10">
            <CommentCard
              comment={comments[currentIndex]}
              isCenter={true}
            />
          </div>

          {/* Derecha */}
          <div className="hidden md:block w-52 opacity-50 scale-90">
            <CommentCard
              comment={comments[getNextIndex()]}
              isCenter={false}
            />
          </div>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicadores */}
          <div className="flex gap-2">
            {comments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-green-400 w-7"
                    : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CommentCard({ comment, isCenter }) {
  return (
    <div
      className={`rounded-2xl transition-all duration-500 ${
        isCenter
          ? "bg-green-50 border-2 border-green-300 shadow-xl p-6"
          : "bg-white border border-gray-200 shadow-md p-4"
      }`}
    >
      {/* Usuario */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={comment.image}
          alt={comment.name}
          className={`rounded-full object-cover ${
            isCenter ? "w-14 h-14" : "w-10 h-10"
          }`}
        />

        <div>
          <h3
            className={`font-bold text-gray-900 ${
              isCenter ? "text-base" : "text-sm"
            }`}
          >
            {comment.name}
          </h3>

          <p className="text-xs text-gray-500">{comment.role}</p>

          <p className="text-xs text-green-600 font-medium">
            {comment.company}
          </p>
        </div>
      </div>

      {/* Estrellas */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: comment.rating }).map((_, i) => (
          <Star
            key={i}
            className={`fill-purple-500 text-purple-500 ${
              isCenter ? "w-4 h-4" : "w-3 h-3"
            }`}
          />
        ))}
      </div>

      {/* Texto */}
      <p
        className={`text-gray-700 leading-relaxed ${
          isCenter ? "text-sm" : "text-xs"
        }`}
      >
        "{comment.content}"
      </p>
    </div>
  );
}