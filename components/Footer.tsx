import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#001833] text-white">
      
      {/* 1. SECCIÓN DE CONVERSIÓN INFERIOR (CTA BANNER) */}
      <div className="w-full bg-gradient-to-b from-[#e7eeff] to-[#f0f3ff] text-text-main py-12 px-6 border-t border-surface-dim/20">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <span className="font-body text-xs font-bold uppercase tracking-[0.05em] text-secondary">
            ¿Listo para trabajar con expertos en impuestos?
          </span>
          <p className="font-body text-sm md:text-base text-text-variant max-w-[600px] mx-auto leading-relaxed">
            Tome el control de su futuro financiero hoy mismo con el respaldo de Acevedo Pucci & Associates LLC.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-[#001833] hover:bg-[#002d56] text-white font-body font-semibold text-sm px-6 py-3.5 rounded-sm shadow-sm transition-all duration-200"
            >
              Agendar Consulta Gratuita
            </Link>
            <a
              href="https://wa.me/13055550123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#22c35e] text-white font-body font-semibold text-sm px-6 py-3.5 rounded-sm shadow-sm transition-all duration-200"
            >
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. ENLACES Y MAPA DEL SITIO */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Columna 1: Perfil de Firma */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Acevedo Pucci
            </span>
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-secondary-container font-semibold -mt-1">
              & Associates LLC
            </span>
          </div>
          <p className="font-body text-xs text-primary-fixed/70 leading-relaxed">
            Firma boutique de contabilidad y preparación de impuestos con sede en Miami, sirviendo a clientes internacionales y nacionales con excelencia.
          </p>
          <div className="flex space-x-3 pt-2 text-primary-fixed/50">
            <Globe className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Shield className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Columna 2: Servicios directos */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-secondary-container">
            Servicios
          </h4>
          <ul className="space-y-2.5 font-body text-xs text-primary-fixed/80">
            <li><Link href="/personal-tax-preparation" className="hover:text-secondary-container transition-colors">Tax Preparation</Link></li>
            <li><Link href="/bookkeeping-services" className="hover:text-secondary-container transition-colors">Bookkeeping</Link></li>
            <li><Link href="/payroll-services" className="hover:text-secondary-container transition-colors">Payroll Services</Link></li>
            <li><Link href="/sales-tax-services" className="hover:text-secondary-container transition-colors">Sales Tax</Link></li>
          </ul>
        </div>

        {/* Columna 3: Recursos */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-secondary-container">
            Recursos
          </h4>
          <ul className="space-y-2.5 font-body text-xs text-primary-fixed/80">
            <li><a href="#" className="hover:text-secondary-container transition-colors">IRS News</a></li>
            <li><a href="#" className="hover:text-secondary-container transition-colors">Tax Resources</a></li>
            <li><a href="#" className="hover:text-secondary-container transition-colors">CPA Verification</a></li>
            <li><Link href="/blog" className="hover:text-secondary-container transition-colors">Blog Contable</Link></li>
          </ul>
        </div>

        {/* Columna 4: Datos de Contacto */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-secondary-container">
            Contacto
          </h4>
          <ul className="space-y-3 font-body text-xs text-primary-fixed/80">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
              <span>Miami, Florida, United States</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-secondary-container shrink-0" />
              <span>+1 (305) 555-0123</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-secondary-container shrink-0" />
              <span className="break-all">info@acevedopucci.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 3. BARRA INFERIOR DE DERECHOS (LEGALES) */}
      <div className="w-full border-t border-white/10 bg-[#001c39]/50 py-6 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-body text-[11px] text-primary-fixed/50">
          <span>
            &copy; {currentYear} ACEVEDO PUCCI & ASSOCIATES LLC. ALL RIGHTS RESERVED. CERTIFIED PUBLIC ACCOUNTANTS.
          </span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>

    </footer>
  );
}