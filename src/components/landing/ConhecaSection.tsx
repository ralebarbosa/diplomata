import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import operadorImg from "@/assets/diferencial-operador.jpg";
import tanqueImg from "@/assets/diferencial-tanque.jpg";
import segurancaImg from "@/assets/diferencial-seguranca.jpg";
import meteorologiaImg from "@/assets/diferencial-meteorologia.jpg";
import patioImg from "@/assets/diferencial-patio.jpg";
import hangaragemImg from "@/assets/diferencial-hangaragem.jpg";
import hangaresImg from "@/assets/diferencial-hangares.jpg";

const DIFERENCIAIS: Array<{ title: string; desc: string; imgAlt: string; img?: string; bg: string }> = [
  { title: "Câmera de Meteorologia", desc: "Monitoramento meteorológico em tempo real, permitindo acompanhamento das condições de voo a qualquer momento.", imgAlt: "Meteorologia", img: meteorologiaImg, bg: "bg-[hsl(40,40%,92%)]" },
  { title: "Tanque de Combustível", desc: "Tanque próprio para abastecimento de aeronaves com agilidade e segurança em todas as operações.", imgAlt: "Tanque", img: tanqueImg, bg: "bg-[hsl(35,35%,88%)]" },
  { title: "Sistema de Segurança", desc: "Vigilância 24h e controle de acesso garantindo a proteção total da sua aeronave e do patrimônio.", imgAlt: "Segurança", img: segurancaImg, bg: "bg-[hsl(45,45%,90%)]" },
  { title: "Operador para Apoio", desc: "Equipe de apoio dedicada ao piloto, oferecendo suporte completo antes, durante e após cada operação.", imgAlt: "Operador", img: operadorImg, bg: "bg-[hsl(30,25%,90%)]" },
  { title: "App Multifunção", desc: "Aplicativo para gestão e comunicação, centralizando todas as informações e serviços do aeródromo.", imgAlt: "App", bg: "bg-[hsl(40,30%,93%)]" },
  { title: "Pátio para Aeronaves", desc: "Pátio amplo para estacionamento de aeronaves com manobra confortável e organizada.", imgAlt: "Pátio", img: patioImg, bg: "bg-[hsl(38,38%,89%)]" },
  { title: "Hangaragem", desc: "Hangaragem coberta para sua aeronave, protegendo contra intempéries e prolongando a vida útil do equipamento.", imgAlt: "Hangaragem", img: hangaragemImg, bg: "bg-[hsl(42,32%,91%)]" },
  { title: "Espaço para Hangares", desc: "Lotes disponíveis para construção de hangares próprios, com infraestrutura completa e localização privilegiada.", imgAlt: "Hangares", img: hangaresImg, bg: "bg-[hsl(36,28%,87%)]" },
];

const ConhecaSection = () => (
  <section id="conheca" className="py-24 px-[6%] bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-20">
        <SectionLabel>Estrutura</SectionLabel>
        <SectionTitle>CONHEÇA O DIPLOMATA</SectionTitle>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {DIFERENCIAIS.map((d, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div className={reverse ? "md:pl-2" : "md:pr-2"}>
                <h3 className="font-sans font-light text-3xl md:text-5xl leading-[1.1] tracking-[-0.01em] text-foreground mb-6">
                  {d.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-[1.7] max-w-[480px]">
                  {d.desc}
                </p>
              </div>

              {/* Visual card */}
              <div className={`${d.bg} rounded-3xl aspect-[4/3] overflow-hidden flex items-center justify-center w-[70%] ${reverse ? "mr-0" : "ml-0"}`}>
                {d.img ? (
                  <img
                    src={d.img}
                    alt={d.imgAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 opacity-40">
                    <span className="text-5xl">🖼</span>
                    <span className="text-xs text-muted-foreground tracking-[0.08em] uppercase">
                      {d.imgAlt}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ConhecaSection;
