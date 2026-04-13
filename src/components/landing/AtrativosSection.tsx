import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const ATRATIVOS = [
  { icon: "✈️", title: "Zero Tarifas", desc: "Sem custos de pouso, permanência ou hangaragem cobrados pela administração." },
  { icon: "🛡️", title: "Segurança 24h", desc: "Monitoramento por câmeras e vigilância patrimonial permanente." },
  { icon: "⛽", title: "Combustível Próprio", desc: "Abastecimento direto na base sem necessidade de deslocamento." },
  { icon: "🏗️", title: "Infraestrutura Moderna", desc: "Pista asfaltada, hangares cobertos e iluminação de pátio." },
  { icon: "📍", title: "Localização Estratégica", desc: "Acesso pela BR-050, entre Uberlândia e Uberaba, com mínima estrada de terra." },
  { icon: "🎯", title: "Uso Exclusivo", desc: "Aeródromo privado com controle de acesso e ambiente reservado." },
];

const AtrativosSection = () => (
  <section className="py-20 px-[6%] bg-accent">
    <div className="max-w-[1100px] mx-auto">
      <SectionLabel>Por que escolher</SectionLabel>
      <SectionTitle>ATRATIVOS</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ATRATIVOS.map((a) => (
          <div
            key={a.title}
            className="p-7 border border-border rounded-sm transition-colors hover:border-primary"
          >
            <div className="text-[32px] mb-3.5">{a.icon}</div>
            <h3 className="text-base font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-[1.65]">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AtrativosSection;
