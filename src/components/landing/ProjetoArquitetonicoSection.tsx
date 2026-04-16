import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import plantaImg from "@/assets/projeto-planta.png";
import aereaImg from "@/assets/projeto-aerea.png";
import { Ruler, Plane } from "lucide-react";

const ProjetoArquitetonicoSection = () => (
  <section id="projeto" className="py-20 px-[6%] bg-muted">
    <div className="max-w-[1200px] mx-auto">
      <SectionLabel>Engenharia & Conformidade</SectionLabel>
      <SectionTitle>PROJETO ARQUITETÔNICO AERONÁUTICO</SectionTitle>

      <p className="text-base md:text-lg text-muted-foreground leading-[1.7] max-w-3xl mb-12">
        Projeto de pista desenvolvido seguindo as regras aeronáuticas e padrões exigidos pelas regulamentações.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Planta técnica */}
        <div className="group relative overflow-hidden rounded-sm bg-background border border-border shadow-sm hover:shadow-lg transition-shadow">
          <div className="aspect-[16/9] overflow-hidden bg-white">
            <img
              src={plantaImg}
              alt="Planta técnica do projeto arquitetônico aeronáutico — pista, hangares e lotes"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-5 border-t border-border">
            <div className="flex items-center gap-2 mb-1.5">
              <Ruler className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-semibold text-primary tracking-[0.18em] uppercase">
                Planta Técnica
              </span>
            </div>
            <h3 className="font-display text-xl text-foreground tracking-[0.06em]">
              LAYOUT DA PISTA E LOTES
            </h3>
          </div>
        </div>

        {/* Vista aérea */}
        <div className="group relative overflow-hidden rounded-sm bg-background border border-border shadow-sm hover:shadow-lg transition-shadow">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={aereaImg}
              alt="Vista aérea do aeródromo Diplomata com sobreposição do projeto"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-5 border-t border-border">
            <div className="flex items-center gap-2 mb-1.5">
              <Plane className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-semibold text-primary tracking-[0.18em] uppercase">
                Vista Aérea
              </span>
            </div>
            <h3 className="font-display text-xl text-foreground tracking-[0.06em]">
              IMPLANTAÇÃO NO TERRENO
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjetoArquitetonicoSection;
