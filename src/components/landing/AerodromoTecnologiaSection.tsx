import { Plus } from "lucide-react";

const AerodromoTecnologiaSection = () => (
  <section id="aerodromo-tecnologia" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <Plus className="h-6 w-6" strokeWidth={2.5} />
        </div>
        {/* Aeródromo */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <h3 className="font-display text-3xl tracking-[0.02em] text-foreground font-bold mb-6 text-center">
            Infraestrutura
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
            Plataforma
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
        Opere com liberdade e tenha toda a inteligência de uma operação aeronáutica moderna em um único ecossistema
      </h2>
    </div>
  </section>
);

export default AerodromoTecnologiaSection;
