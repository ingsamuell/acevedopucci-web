import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 py-[40px] md:py-[80px] flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* COLUMNA IZQUIERDA: TEXTOS Y ACCIONES */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
        {/* Tag Superior */}
        <span className="font-body text-xs font-bold uppercase tracking-[0.05em] text-secondary">
          Certified Public Accountants Miami
        </span>
        
        {/* Título Principal */}
        <h1 className="font-display font-bold text-3xl md:text-[48px] md:lineHeight-[56px] tracking-tight text-primary">
          Más de 2,000 Declaraciones de Impuestos Procesadas con Éxito
        </h1>
        
        {/* Descripción corta */}
        <p className="font-body text-base md:text-lg text-text-variant leading-relaxed max-w-[500px]">
          Ayudamos a individuos, emprendedores y empresas en todo Estados Unidos con preparación de impuestos, bookkeeping, payroll, sales tax y servicios empresariales.
        </p>
        
        {/* Grupo de Botones CTAs */}
        <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
          <Link
            href="/contact"
            className="flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-white font-body font-semibold text-sm px-6 py-3.5 rounded-sm shadow-sm transition-all duration-200"
          >
            {/* Icono de Calendario básico en SVG */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5h8v2H6V7z"/></svg>
            <span>Agendar Consulta</span>
          </Link>
          
          <a
            href="https://wa.me/13055550123" // Ajustable a futuro
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#22c35e] text-white font-body font-semibold text-sm px-6 py-3.5 rounded-sm shadow-sm transition-all duration-200"
          >
            {/* Icono de WhatsApp básico */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.428 0 9.842-4.414 9.845-9.843.001-2.63-1.012-5.101-2.859-6.95C17.199 1.81 14.726.81 12.012.81c-5.432 0-9.847 4.414-9.85 9.843-.001 1.983.515 3.921 1.499 5.644l-.991 3.619 3.698-.97z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* COLUMNA DERECHA: IMAGEN DESTACADA Y BADGE */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        {/* Contenedor tipo mock de la imagen de fondo azul de Stich */}
        <div className="relative w-full max-w-[460px] aspect-[4/3] md:aspect-[5/4] bg-[#0c2340] rounded-xl overflow-hidden shadow-lg flex justify-center items-end">
          {/* Aquí irá tu componente <Image src="..." /> de Next.js más adelante */}
          <div className="w-40 h-72 bg-gradient-to-t from-secondary/40 to-transparent rounded-t-full mb-0 border-b-0 border border-white/10" />
          
          {/* Silueta temporal simulando al profesional de la foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>

        {/* IRS Registered Floating Badge (Esquina inferior izquierda del contenedor de imagen) */}
        <div className="absolute bottom-[-20px] left-4 md:left-12 bg-white border border-surface-dim/30 shadow-ambient px-4 py-3 rounded-md flex items-center space-x-3 max-w-[240px]">
          <div className="bg-secondary/10 p-2 rounded-full text-secondary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-primary leading-tight">IRS Registered</h4>
            <p className="font-body text-[10px] text-text-variant">PTIN & EFIN Authorized</p>
          </div>
        </div>
      </div>

    </section>
  );
}