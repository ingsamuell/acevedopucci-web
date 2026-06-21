export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 py-[60px] md:py-[80px]">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4">
          Por qué elegirnos
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
          Experiencia contable que protege su negocio y su tranquilidad
        </h2>
        <p className="font-body text-base md:text-lg text-text-variant leading-relaxed">
          Trabajamos con empresas y particulares en todo Estados Unidos para entregar atención fiscal, bookkeeping y payroll confiables, oportunas y con enfoque en resultados.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="bg-surface p-6 rounded-3xl border border-surface-dim/60 shadow-sm hover:shadow-ambient transition-shadow duration-300">
          <h3 className="font-display font-semibold text-xl text-primary mb-3">Atención personalizada</h3>
          <p className="font-body text-sm text-text-variant leading-relaxed">
            Cada cliente recibe un plan fiscal adaptado a su estructura legal, sector y objetivos financieros.
          </p>
        </article>

        <article className="bg-surface p-6 rounded-3xl border border-surface-dim/60 shadow-sm hover:shadow-ambient transition-shadow duration-300">
          <h3 className="font-display font-semibold text-xl text-primary mb-3">Cumplimiento sin sorpresas</h3>
          <p className="font-body text-sm text-text-variant leading-relaxed">
            Preparamos sus declaraciones y reportes de ventas con exactitud para minimizar riesgos y optimizar resultados.
          </p>
        </article>

        <article className="bg-surface p-6 rounded-3xl border border-surface-dim/60 shadow-sm hover:shadow-ambient transition-shadow duration-300">
          <h3 className="font-display font-semibold text-xl text-primary mb-3">Soporte continuo</h3>
          <p className="font-body text-sm text-text-variant leading-relaxed">
            Desde preguntas fiscales hasta cierres mensuales, estamos listos para responder con rapidez y claridad.
          </p>
        </article>
      </div>
    </section>
  );
}
