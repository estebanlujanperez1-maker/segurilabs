import { useState } from "react";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem repudiandae.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto blanditiis.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're really good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo mollitia.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the 'P' is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam sint.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He just couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[#1a1f36] font-semibold text-base pr-8 leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 text-[#1a1f36] text-xl leading-none transition-transform duration-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Preguntas() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center px-6 py-20">
      <div className="w-full max-w-3xl">
        <h1 className="text-[#1a1f36] text-4xl font-bold mb-12 tracking-tight">
          Frequently asked questions
        </h1>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}