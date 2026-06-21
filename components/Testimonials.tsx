import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Excelente servicio, muy profesionales y siempre dispuestos a responder mis dudas sobre mi pequeña empresa.",
      author: "Ricardo C.",
      role: "Propietario de Construcción",
      initials: "RC"
    },
    {
      quote: "He trabajado con ellos por 2 años y mi tax return siempre está a tiempo. El proceso virtual es increíblemente fácil.",
      author: "María A.",
      role: "Freelancer / 1099",
      initials: "MA"
    },
    {
      quote: "La mejor decisión para mi restaurante. El bookkeeping y el sales tax ya no son un dolor de cabeza.",
      author: "Juan P.",
      role: "Empresario Gastronómico",
      initials: "JP"
    }
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 py-[40px] md:py-[80px] flex flex-col items-center">
      
      {/* ENCABEZADO Y CALIFICACIÓN GENERAL */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary uppercase tracking-tight">
          Lo que dicen nuestros clientes
        </h2>
        
        {/* Fila Central de 5 Estrellas Doradas */}
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
          ))}
        </div>
      </div>

      {/* GRILLA DE TARJETAS DE OPINIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {reviews.map((rev, index) => (
          <div 
            key={index}
            className="bg-white border border-surface-dim/30 p-6 rounded-lg shadow-sm hover:shadow-ambient transition-all duration-300 flex flex-col justify-between min-h-[220px]"
          >
            {/* Contenido / Cita */}
            <div className="space-y-4">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              <p className="font-body text-sm text-text-variant italic leading-relaxed">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            {/* Meta Datos del Cliente (Identificador Inferior) */}
            <div className="flex items-center space-x-3 pt-6 border-t border-surface-low mt-4">
              {/* Avatar Circular con Iniciales */}
              <div className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center text-primary font-display font-bold text-sm shrink-0 border border-surface-dim/20">
                {rev.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-sm text-primary">
                  {rev.author}
                </span>
                <span className="font-body text-xs text-text-variant/70">
                  {rev.role}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}