import { 
  Wrench, 
  Building2, 
  ShoppingBag, 
  Truck, 
  UtensilsCrossed, 
  UserCheck 
} from "lucide-react";

export default function IndustryFocus() {
  // Mapeamos los iconos exactos de la librería que coinciden con image_517682.png
  const industries = [
    { name: "Construcción", icon: Wrench },
    { name: "Real Estate", icon: Building2 },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Trucking", icon: Truck },
    { name: "Restaurantes", icon: UtensilsCrossed },
    { name: "1099 Contractors", icon: UserCheck },
  ];

  return (
    <section className="w-full bg-[#002d56] text-white py-[60px] md:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTOS Y LISTA */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            Especializados en su Industria
          </h2>
          <p className="font-body text-sm md:text-base text-primary-fixed/80 leading-relaxed max-w-[500px]">
            Nuestra experiencia no es genérica. Entendemos las deducciones y regulaciones específicas de cada sector.
          </p>
          
          {/* Grilla interna de industrias - Coincidiendo con image_517682.png */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-4">
            {industries.map((ind, index) => {
              const IconComponent = ind.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 group"
                >
                  {/* El icono hereda la clase de color esmeralda de Stich */}
                  <IconComponent 
                    className="w-6 h-6 text-secondary-container stroke-[2] transition-transform duration-200 group-hover:scale-110" 
                  />
                  <span className="font-display font-semibold text-base text-white">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMNA DERECHA: CUADRO DE IMPACTO DE EXPERIENCIA */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[400px] aspect-square bg-[#001c39] border border-white/10 rounded-lg flex flex-col items-center justify-center p-8 text-center shadow-ambient relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
            
            <span className="font-display font-bold text-6xl md:text-7xl text-secondary-container block mb-2 tracking-tight">
              10+
            </span>
            <span className="font-display font-bold text-sm md:text-base uppercase tracking-[0.15em] text-white/90 max-w-[200px] leading-relaxed">
              Años de Expertise Vertical
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}