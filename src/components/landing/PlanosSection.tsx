import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS = [
  "Pista registrada 1000x20 metros",
  "Hangaragem",
  "Câmera de Meteorologia",
  "Câmera de Segurança",
  "App Multifunção do Aeródromo",
  "Decolagens e Pousos ilimitados",
  "Zero Tarifas",
  "Operador apoio em solo*",
  "Tanque Abastecimento*",
];

const PlanosSection = () => (
  <section id="planos" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mb-3">
        Hangaragem e Valores
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
        Aeronaves a pistão monomotoras e bimotoras e turbo-hélices
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mensal */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <h3 className="font-display text-3xl tracking-[0.02em] text-foreground font-bold mb-3">
            Mensal
          </h3>
          <p className="text-muted-foreground text-sm mb-8">
            Todas as facilidades inclusas
          </p>
          <Button
            className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 tracking-[0.08em] text-sm uppercase h-12 mb-8"
          >
            Consulte Valores
          </Button>
          <ul className="flex flex-col gap-4">
            {ITEMS.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Anual */}
        <div className="rounded-2xl bg-dark p-10 lg:p-12 flex flex-col">
          <h3 className="font-display text-3xl tracking-[0.02em] text-primary-foreground font-bold mb-3">
            Anual
          </h3>
          <p className="text-primary-foreground/60 text-sm mb-8">
            Todas as facilidades inclusas
          </p>
          <Button
            className="w-full rounded-full bg-primary-foreground text-dark hover:bg-primary-foreground/90 tracking-[0.08em] text-sm uppercase h-12 mb-8"
          >
            Consulte Valores
          </Button>
          <ul className="flex flex-col gap-4">
            {ITEMS.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PlanosSection;
