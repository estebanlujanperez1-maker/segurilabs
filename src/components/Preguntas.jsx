import { useState } from "react";
import { Plus, HelpCircle, MessageCircle, Search } from "lucide-react";

const faqs = [
  // SST
  {
    category: "SST",
    question: "¿Qué es el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)?",
    answer:
      "El SG-SST es un proceso lógico y por etapas basado en la mejora continua que incluye la política, organización, planificación, aplicación, evaluación, auditoría y acciones de mejora para anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud en el trabajo.",
  },
  {
    category: "SST",
    question: "¿Cuáles son los factores de riesgo más comunes en el entorno laboral?",
    answer:
      "Los factores de riesgo más frecuentes incluyen: riesgos físicos (ruido, temperatura, iluminación), riesgos ergonómicos (posturas inadecuadas, movimientos repetitivos), riesgos químicos (exposición a sustancias tóxicas), riesgos biológicos (bacterias, virus), y riesgos psicosociales (estrés, burnout, acoso laboral).",
  },
  {
    category: "SST",
    question: "¿Qué debo hacer si sufro un accidente de trabajo?",
    answer:
      "Debes reportarlo de forma inmediata a tu empleador o al responsable de SST. El empleador tiene la obligación de reportarlo a la ARL dentro de los 2 días hábiles siguientes. Es importante documentar las circunstancias del accidente y recibir atención médica de inmediato.",
  },
  {
    category: "SST",
    question: "¿Qué es una enfermedad laboral y cómo se diferencia de un accidente de trabajo?",
    answer:
      "Una enfermedad laboral es el resultado de la exposición a factores de riesgo inherentes a la actividad laboral. A diferencia del accidente —que es un evento súbito—, la enfermedad laboral se desarrolla de forma progresiva como consecuencia de la exposición continua a condiciones adversas.",
  },
  {
    category: "SST",
    question: "¿Con qué frecuencia deben realizarse los exámenes médicos ocupacionales?",
    answer:
      "Los exámenes médicos ocupacionales deben realizarse al ingreso del trabajador, periódicamente durante la vigencia del contrato (la frecuencia depende del cargo y nivel de exposición al riesgo), y al retiro del trabajador. El empleador es responsable de garantizarlos y costearlos.",
  },
  // Psicología
  {
    category: "Psicología",
    question: "¿Qué es el síndrome de burnout y cómo identificarlo?",
    answer:
      "El burnout es un estado de agotamiento físico, emocional y mental causado por el estrés laboral crónico. Sus señales incluyen: agotamiento extremo, sensación de ineficacia, cinismo frente al trabajo, irritabilidad, dificultad para concentrarse y síntomas físicos como dolores de cabeza o insomnio.",
  },
  {
    category: "Psicología",
    question: "¿Cómo manejar el estrés laboral de forma efectiva?",
    answer:
      "Algunas estrategias efectivas incluyen: establecer límites claros entre el trabajo y la vida personal, practicar técnicas de respiración o mindfulness, hacer pausas activas durante la jornada, mantener hábitos de sueño regulares, realizar actividad física, y buscar apoyo profesional cuando el estrés se vuelve difícil de manejar.",
  },
  {
    category: "Psicología",
    question: "¿Qué es el riesgo psicosocial en el trabajo y por qué es importante gestionarlo?",
    answer:
      "Los riesgos psicosociales son condiciones relacionadas con la organización y realización del trabajo que pueden afectar el bienestar y la salud del trabajador. Incluyen carga excesiva, falta de autonomía, conflicto de roles y acoso laboral. Gestionarlos es clave para prevenir enfermedades mentales y mejorar el rendimiento.",
  },
  {
    category: "Psicología",
    question: "¿Cuándo es recomendable buscar apoyo psicológico profesional?",
    answer:
      "Se recomienda buscar apoyo cuando experimentas síntomas persistentes como tristeza, ansiedad o dificultad para dormir por más de dos semanas; cuando el estrés afecta tu desempeño o relaciones; si has vivido un evento traumático en el trabajo, o cuando sientes que tus propias estrategias de afrontamiento ya no son suficientes.",
  },
  {
    category: "Psicología",
    question: "¿Qué diferencia hay entre ansiedad normal y un trastorno de ansiedad?",
    answer:
      "La ansiedad normal es una respuesta adaptativa ante situaciones de amenaza y desaparece cuando el estímulo se resuelve. Un trastorno de ansiedad implica una preocupación excesiva, persistente y difícil de controlar que interfiere significativamente con las actividades cotidianas, el trabajo y las relaciones, incluso sin una causa objetiva clara.",
  },
];

const categories = ["SST", "Psicología"];

const categoryStyles = {
  SST: {
    badge: "bg-green-100 text-green-800",
    tab: "bg-green-400 text-black border-green-400",
    border: "border-green-400",
  },
  Psicología: {
    badge: "bg-purple-100 text-purple-700",
    tab: "bg-purple-600 text-white border-purple-600",
    border: "border-purple-500",
  },
};

function FAQItem({ question, answer, category, index, isOpen, onToggle }) {
  const styles = categoryStyles[category];
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen ? `${styles.border} bg-white` : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-xs font-semibold tracking-wide min-w-[24px] transition-colors duration-200 ${
            isOpen
              ? category === "SST" ? "text-green-600" : "text-purple-600"
              : "text-gray-300"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1">
          <span
            className={`block text-[15px] font-semibold leading-snug transition-colors duration-200 ${
              isOpen ? "text-black" : "text-[#1a1f36]"
            }`}
          >
            {question}
          </span>
        </span>

        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? `${styles.tab} rotate-45`
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <Plus
            className={`w-4 h-4 transition-colors duration-200 ${
              isOpen ? "text-inherit" : "text-gray-500"
            }`}
          />
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed px-6 pb-5 pl-[52px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Preguntas() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("SST");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filtered = faqs.filter((f) => {
    const matchCat = f.category === activeCategory;
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white flex justify-center px-6 py-20">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Soporte
          </span>
          <h1 className="text-4xl font-bold text-[#1a1f36] tracking-tight mb-2">
            Preguntas frecuentes
          </h1>
          <p className="text-gray-400 text-sm">
            Resolvemos tus dudas sobre seguridad, salud en el trabajo y bienestar psicológico.
          </p>
        </div>

        {/* Buscador */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 mb-4">
          <Search className="w-4 h-4 text-gray-300 flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar una pregunta..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIndex(null);
            }}
            className="bg-transparent text-sm text-[#1a1f36] placeholder-gray-300 outline-none w-full"
          />
        </div>

        {/* Tabs de categoría */}
        <div className="flex gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`text-xs font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? categoryStyles[cat].tab
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-300 self-center">
            {filtered.length} pregunta{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Lista */}
        <div className="flex flex-col gap-2">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-300 text-sm py-10">
              No se encontraron resultados.
            </p>
          ) : (
            filtered.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                category={faq.category}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 flex items-center gap-4 bg-gray-50 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1a1f36]">¿Sigues con dudas?</p>
            <p className="text-xs text-gray-400">Nuestro equipo responde en menos de 24 horas.</p>
          </div>
          <a
            href="mailto:empresa@email.com"
            className="ml-auto text-xs font-semibold text-purple-600 bg-white border border-purple-200 hover:bg-purple-50 transition rounded-xl px-4 py-2 whitespace-nowrap"
          >
            Contactar →
          </a>
        </div>

      </div>
    </div>
  );
}