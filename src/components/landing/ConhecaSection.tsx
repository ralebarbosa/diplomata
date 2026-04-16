import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import operadorImg from "@/assets/diferencial-operador.jpg";
import tanqueImg from "@/assets/diferencial-tanque.jpg";
import segurancaImg from "@/assets/diferencial-seguranca.jpg";
import meteorologiaImg from "@/assets/diferencial-meteorologia.jpg";

const DIFERENCIAIS: Array<{ title: string; desc: string; imgAlt: string; img?: string }> = [
  { title: "Câmera de Meteorologia", desc: "Monitoramento meteorológico em tempo real.", imgAlt: "Meteorologia", img: meteorologiaImg },
  { title: "Tanque de Combustível", desc: "Tanque próprio para abastecimento de aeronaves.", imgAlt: "Tanque", img: tanqueImg },
  { title: "Sistema de Segurança", desc: "Vigilância 24h e controle de acesso.", imgAlt: "Segurança", img: segurancaImg },
  { title: "Operador para Apoio", desc: "Equipe de apoio dedicada ao piloto.", imgAlt: "Operador", img: operadorImg },
  { title: "App Multifunção", desc: "Aplicativo para gestão e comunicação.", imgAlt: "App" },
  { title: "Pátio para Aeronaves", desc: "Pátio amplo para estacionamento.", imgAlt: "Pátio" },
  { title: "Hangaragem", desc: "Hangaragem coberta para sua aeronave.", imgAlt: "Hangaragem" },
  { title: "Espaço para Hangares", desc: "Lotes disponíveis para construção de hangares.", imgAlt: "Hangares" },
];

const ConhecaSection = () => (
  <section id="conheca" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <SectionLabel>Estrutura</SectionLabel>
      <SectionTitle>CONHEÇA O DIPLOMATA</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DIFERENCIAIS.map((d, i) => (
          <div key={i}>
            {d.img ? (
              <div className="w-full aspect-[4/3] overflow-hidden rounded-sm mb-3.5">
                <img
                  src={d.img}
                  alt={d.imgAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/3] bg-accent border border-dashed border-muted-foreground/30 rounded-sm flex flex-col items-center justify-center gap-1.5 mb-3.5">
                <span className="text-[22px] opacity-25">🖼</span>
                <span className="text-[10px] text-muted-foreground tracking-[0.08em] text-center leading-[1.5]">
                  Imagem
                  <br />
                  {d.imgAlt}
                </span>
              </div>
            )}
            <h3 className="text-sm font-semibold text-foreground mb-1">{d.title}</h3>
            <p className="text-[13px] text-muted-foreground leading-[1.6]">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConhecaSection;
