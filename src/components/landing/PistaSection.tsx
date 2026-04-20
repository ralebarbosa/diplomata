import { Plane } from "lucide-react";

const PISTA_SPECS = [
  { label: "Indicativo", value: "SS8X" },
  { label: "Operação", value: "VFR Diurna" },
  { label: "Largura", value: "20 m" },
  { label: "Altitude", value: "2530 pés" },
  { label: "Comprimento", value: "1040 m" },
  { label: "Cabeceiras", value: "05/23" },
];

const PistaSection = () => (
  <section id="pista" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mb-3">
        Características da Pista
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
        Infraestrutura projetada para operação segura e eficiente
      </p>

      <div className="rounded-2xl border border-border bg-card p-10 lg:p-12">
        <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
          <Plane className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-foreground leading-[1.6] text-xl font-medium">
            Pista registrada com 1040 metros de extensão, projetada conforme padrões aeronáuticos.
          </span>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
          {PISTA_SPECS.map((s) => (
            <li
              key={s.label}
              className="flex justify-between items-center border-b border-border/60 pb-4"
            >
              <span className="text-sm text-muted-foreground tracking-[0.05em] uppercase font-semibold">
                {s.label}
              </span>
              <span className="text-lg md:text-xl text-foreground font-bold">
                {s.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PistaSection;
