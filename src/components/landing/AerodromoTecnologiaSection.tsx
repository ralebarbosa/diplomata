const AerodromoTecnologiaSection = () => (
  <section id="aerodromo-tecnologia" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mb-3">
        Aeródromo <span className="text-primary">+</span> Tecnologia
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12 max-w-2xl mx-auto">
        A união entre infraestrutura aeronáutica de excelência e tecnologia de ponta para transformar a sua operação.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aeródromo */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <h3 className="font-display text-3xl tracking-[0.02em] text-foreground font-bold mb-6 text-center">
            Aeródromo
          </h3>
          <div className="rounded-xl aspect-[4/3] overflow-hidden flex items-center justify-center w-full bg-muted">
            <div className="flex flex-col items-center justify-center gap-2 opacity-40">
              <span className="text-4xl">🛬</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.08em] uppercase">
                Imagem Aeródromo
              </span>
            </div>
          </div>
        </div>

        {/* Tecnologia */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <h3 className="font-display text-3xl tracking-[0.02em] text-foreground font-bold mb-6 text-center">
            Tecnologia
          </h3>
          <div className="rounded-xl aspect-[4/3] overflow-hidden flex items-center justify-center w-full bg-muted">
            <div className="flex flex-col items-center justify-center gap-2 opacity-40">
              <span className="text-4xl">📱</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.08em] uppercase">
                Imagem Tecnologia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AerodromoTecnologiaSection;
