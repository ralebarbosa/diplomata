import { Check } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { Button } from "@/components/ui/button";
import hangaragemImage from "@/assets/servico-hangaragem.jpg";
import aluguelImage from "@/assets/servico-aluguel.jpg";

const SERVICOS = [
  {
    image: hangaragemImage,
    label: "Serviço",
    title: "HANGARAGEM",
    items: [
      "Hangaragem para aeronaves",
      "Câmera de monitoramento",
      "Operador de apoio",
    ],
  },
  {
    image: aluguelImage,
    label: "Serviço",
    title: "ALUGUEL DE ÁREA",
    items: [
      "Aluguel de espaço para hangares",
      "Disponibilidade por metro quadrado",
      "Consulte disponibilidade",
    ],
  },
];

const EventosSection = () => (
  <section className="bg-dark">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {SERVICOS.map((s) => (
        <article
          key={s.title}
          className="flex flex-col bg-dark-surface border-b md:border-b-0 md:border-r border-primary-foreground/10 last:border-r-0 last:border-b-0"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover block"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
          <div className="flex flex-col flex-1 p-10 lg:p-14">
            <SectionLabel>{s.label}</SectionLabel>
            <h3 className="font-display text-[32px] lg:text-[38px] tracking-[0.06em] text-primary-foreground leading-none mb-7">
              {s.title}
            </h3>
            <ul className="flex flex-col gap-3.5 mb-9 list-none flex-1">
              {s.items.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/65 leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="self-start bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary tracking-[0.14em] text-[11px] uppercase rounded-none px-7 h-11"
            >
              Saiba Mais
            </Button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default EventosSection;
