"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  // Estado para controlar qué pregunta está expandida (-1 significa ninguna)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué documentos necesito para mi declaración de impuestos?",
      answer: "Por lo general, necesitará sus formularios de ingresos (W-2 para empleados, 1099 para contratistas independientes), registros de gastos si tiene un negocio propio, identificaciones oficiales (SSN o ITIN) y la declaración del año anterior."
    },
    {
      question: "¿Puedo realizar mi consulta de forma totalmente virtual?",
      answer: "Sí, absolutamente. Ofrecemos un ecosistema digital completo a través de portales seguros y canales automatizados para que pueda enviar sus documentos y tener asesoría experta sin importar en qué estado de EE. UU. se encuentre."
    },
    {
      question: "¿Cómo ayuda el bookkeeping a mi negocio o pequeña empresa?",
      answer: "El bookkeeping mantiene sus registros financieros y conciliaciones bancarias al día mensualmente. Esto no solo le da claridad para tomar mejores decisiones operativas, sino que garantiza que sus libros estén listos ante cualquier auditoría del IRS y agiliza la declaración de taxes anual."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[800px] mx-auto px-6 py-[40px] md:py-[80px]">
      
      {/* ENCABEZADO */}
      <div className="text-center space-y-2 mb-10">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary uppercase tracking-tight">
          Preguntas Frecuentes
        </h2>
        <p className="font-body text-sm text-text-variant">
          Respuestas rápidas a sus dudas contables más comunes.
        </p>
      </div>

      {/* CONTENEDOR DE ACORDEONES */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index}
              className="bg-white border border-surface-dim/30 rounded-sm overflow-hidden transition-all duration-300 shadow-sm"
            >
              {/* Botón / Encabezado de la Pregunta */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 flex items-center justify-between text-left font-display font-semibold text-sm md:text-base text-primary hover:bg-surface-low/30 transition-colors focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-text-variant shrink-0 transition-transform duration-300 ${
                    isOpen ? "transform rotate-180 text-secondary" : ""
                  }`}
                />
              </button>

              {/* Contenido de la Respuesta (Animado de forma sutil) */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[200px] border-t border-surface-low" : "max-h-0"
                }`}
              >
                <div className="p-5 font-body text-sm md:text-base text-text-variant leading-relaxed bg-background/40">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}