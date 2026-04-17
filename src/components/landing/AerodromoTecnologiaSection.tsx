const AerodromoTecnologiaSection = () => (
  <section id="aerodromo-tecnologia" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aeródromo */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <h3 className="font-display text-3xl tracking-[0.02em] text-foreground font-bold mb-6 text-center">
            Pista + Hangaragem
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
            App Diplomata
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

      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mt-12 max-w-3xl mx-auto leading-tight">
        Uma única cobrança e várias facilidades
      </h2>
    </div>
  </section>
);

export default AerodromoTecnologiaSection;
