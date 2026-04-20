import { Ruler, Plane } from "lucide-react";
import plantaImg from "@/assets/projeto-planta.png";
import aereaImg from "@/assets/projeto-aerea.png";

const ProjetoArquitetonicoSection = () => (
  <section id="projeto" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mb-3">
        Projeto Arquitetônico Aeronáutico
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
        Pista desenvolvida seguindo as regras aeronáuticas e padrões regulamentares
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Planta técnica */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
            <Ruler className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground leading-[1.6] font-bold text-xl">
              Planta técnica — layout da pista e lotes.
            </span>
          </div>
          <div className="rounded-xl overflow-hidden flex-1 min-h-[320px] bg-white">
            <img
              src={plantaImg}
              alt="Planta técnica do projeto arquitetônico aeronáutico — pista, hangares e lotes"
              className="w-full h-full object-contain min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Vista aérea */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
            <Plane className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground leading-[1.6] font-bold text-xl">
              Vista aérea — implantação no terreno.
            </span>
          </div>
          <div className="rounded-xl overflow-hidden flex-1 min-h-[320px]">
            <img
              src={aereaImg}
              alt="Vista aérea do aeródromo Diplomata com sobreposição do projeto"
              className="w-full h-full object-cover min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjetoArquitetonicoSection;
