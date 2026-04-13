import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const DISTANCIAS = [
  { cidade: "Uberlândia", tempo: "45 min" },
  { cidade: "Uberaba", tempo: "40 min" },
  { cidade: "Ribeirão Preto", tempo: "2h30" },
  { cidade: "São Paulo", tempo: "5h" },
];

const LocalizacaoSection = () => (
  <section id="localizacao" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <SectionLabel>Como chegar</SectionLabel>
      <SectionTitle>LOCALIZAÇÃO</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-[11px] font-semibold text-muted-foreground tracking-[0.12em] uppercase mb-2.5">
            Endereço
          </p>
          <p className="text-base text-foreground leading-[1.75] mb-1.5">Rodovia BR-050, Km 133</p>
          <p className="text-sm text-muted-foreground leading-[1.75] mb-8">
            Entre Uberlândia-MG e Uberaba-MG
            <br />
            Acesso exclusivo pela beira da rodovia
            <br />
            Apenas 1 km de estrada de terra
          </p>
          <p className="text-[11px] font-semibold text-muted-foreground tracking-[0.12em] uppercase mb-1">
            Distâncias
          </p>
          {DISTANCIAS.map((d) => (
            <div
              key={d.cidade}
              className="flex justify-between items-center py-[15px] border-b border-border last:border-b-0"
            >
              <span className="text-[15px] text-foreground/70">{d.cidade}</span>
              <span className="font-display text-2xl text-primary tracking-[0.06em]">{d.tempo}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[11px] font-semibold text-muted-foreground tracking-[0.12em] uppercase mb-4">
            Entorno Estratégico
          </p>
          <div className="flex flex-col gap-[18px] mb-7">
            {[
              {
                title: "Vinícola Arpuro",
                desc: "Ao lado do aeródromo — destino refinado para receber visitantes.",
              },
              {
                title: "Condomínio de Casas de Campo",
                desc: "Projeto em desenvolvimento adjacente — oportunidade de lotes em breve.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-primary pl-[18px]">
                <p className="text-[15px] font-semibold text-foreground mb-1">{item.title}</p>
                <p className="text-[13px] text-muted-foreground leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-accent rounded-sm h-[180px] flex items-center justify-center border border-dashed border-muted-foreground/30">
            <span className="text-[11px] text-muted-foreground tracking-[0.08em] uppercase">
              Embed Google Maps
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocalizacaoSection;
