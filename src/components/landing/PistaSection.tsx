import SectionLabel from "./SectionLabel";

const PISTA_SPECS = [
  { label: "Indicativo", value: "SS8X" },
  { label: "Comprimento", value: "1040 m" },
  { label: "Largura", value: "20 m" },
  { label: "Altitude", value: "2530 pés" },
  { label: "Operação", value: "VFR Diurna" },
  { label: "Cabeceiras", value: "05/23" },
];

const PistaSection = () => (
  <section id="pista" className="py-12 px-[6%] bg-muted">
    <div className="max-w-[1100px] mx-auto">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div>
          <SectionLabel>Infraestrutura</SectionLabel>
          <h2 className="font-display text-4xl tracking-[0.06em] text-foreground leading-none">
            CARACTERÍSTICAS DA PISTA
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {PISTA_SPECS.map((s) => (
          <div
            key={s.label}
            className="flex justify-between items-center bg-accent border border-border rounded-sm px-[18px] py-3"
          >
            <span className="text-[10px] text-muted-foreground tracking-[0.1em] uppercase font-semibold">
              {s.label}
            </span>
            <span className="font-display text-lg text-foreground tracking-[0.06em]">
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PistaSection;
