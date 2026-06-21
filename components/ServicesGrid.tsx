import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Personal Tax",
      description: "Optimización de su declaración de renta personal buscando el máximo ahorro legal posible.",
      details: ["Form 1040", "State Filings"],
      href: "/personal-tax-preparation",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Business Tax",
      description: "Preparación estratégica para Corporaciones, LLCs y Alianzas (Partnerships).",
      details: ["Form 1120/1120S", "Form 1065"],
      href: "/business-tax-services",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Bookkeeping",
      description: "Mantenga sus libros al día y listos para cualquier auditoría o toma de decisiones.",
      details: ["Mensual / Trimestral", "QuickBooks Setup"],
      href: "/bookkeeping-services",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Payroll",
      description: "Gestión de nómina sin complicaciones para que usted se enfoque en vender.",
      details: ["W-2 & 1099", "Direct Deposit"],
      href: "/payroll-services",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Sales Tax",
      description: "Cálculo y presentación precisa del impuesto a las ventas en múltiples estados.",
      details: ["Multistate Nexus", "Timely Filings"],
      href: "/sales-tax-services",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Health Insurance",
      description: "Asesoría en planes Marketplace (Obamacare/ACA) para individuos y familias.",
      details: ["ACA Enrollment", "Subsidy Calc"],
      href: "/health-insurance",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="w-full max-w-[1280px] mx-auto px-6 py-[40px] md:py-[80px]">
      
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary uppercase tracking-tight">
            Soluciones Contables de Élite
          </h2>
          <p className="font-body text-sm md:text-base text-text-variant mt-2 max-w-[600px]">
            Ofrecemos un ecosistema completo de servicios financieros diseñados para la eficiencia y el crecimiento patrimonial.
          </p>
        </div>
        
        <Link 
          href="/contact" 
          className="font-display font-bold text-sm text-secondary hover:text-secondary/80 flex items-center gap-1 group shrink-0 transition-colors"
        >
          Ver todos los servicios 
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Grilla de 6 tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
            href={service.href}
            key={index}
            className="group bg-white border border-surface-dim/30 p-6 rounded-lg shadow-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
          >
            <div>
              {/* Icono */}
              <div className="bg-background w-12 h-12 rounded-md flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
                {service.icon}
              </div>
              
              {/* Título y descripción */}
              <h3 className="font-display font-semibold text-lg text-primary mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-text-variant leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Listado de sub-servicios/detalles técnicos */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-surface-low pt-4">
              {service.details.map((detail, dIndex) => (
                <span 
                  key={dIndex} 
                  className="font-body text-xs text-text-variant/70 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                  {detail}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}