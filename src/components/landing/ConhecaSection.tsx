import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const DIFERENCIAIS = [
  { title: "Pista Asfaltada", desc: "900 m de pista em asfalto com sinalização completa.", imgAlt: "Pista" },
  { title: "Hangar Coberto", desc: "Proteção e segurança para sua aeronave.", imgAlt: "Hangar" },
  { title: "Área de Abastecimento", desc: "Posto próprio de combustível de aviação.", imgAlt: "Abastecimento" },
  { title: "Acesso Rápido", desc: "Apenas 1 km de estrada de terra até a BR-050.", imgAlt: "Acesso" },
];

const ConhecaSection = () => (
  <section id="conheca" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <SectionLabel>Estrutura</SectionLabel>
      <SectionTitle>CONHEÇA O DIPLOMATA</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DIFERENCIAIS.map((d, i) => (
          <div key={i}>
            <div className="w-full aspect-[4/3] bg-accent border border-dashed border-muted-foreground/30 rounded-sm flex flex-col items-center justify-center gap-1.5 mb-3.5">
              <span className="text-[22px] opacity-25">🖼</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.08em] text-center leading-[1.5]">
                Imagem
                <br />
                {d.imgAlt}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{d.title}</h3>
            <p className="text-[13px] text-muted-foreground leading-[1.6]">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConhecaSection;
