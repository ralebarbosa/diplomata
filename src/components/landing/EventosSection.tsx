import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import gateImage from "@/assets/gate.jpg";

const EVENTOS = [
  { icon: "🛩", title: "Voos Particulares", desc: "Base para operações pessoais e corporativas." },
  { icon: "🎪", title: "Eventos Corporativos", desc: "Área exclusiva para recepções e demonstrações." },
  { icon: "🏎", title: "Track Days", desc: "Pista para experiências automotivas e de aviação." },
  { icon: "📸", title: "Produções Audiovisuais", desc: "Cenário premium para filmagens e ensaios." },
];

const EventosSection = () => (
  <section className="py-20 px-[6%] bg-dark">
    <div className="max-w-[1100px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <SectionLabel>Usos do aeródromo</SectionLabel>
          <SectionTitle light size={48} mb={36}>
            EVENTOS &amp;
            <br />
            ATIVIDADES
          </SectionTitle>
          {EVENTOS.map((e) => (
            <div
              key={e.title}
              className="flex gap-5 items-start py-[22px] border-b border-primary-foreground/10 last:border-b-0"
            >
              <span className="text-[22px] shrink-0 opacity-70">{e.icon}</span>
              <div>
                <h3 className="text-[15px] font-semibold text-primary-foreground mb-1">{e.title}</h3>
                <p className="text-[13px] text-primary-foreground/40 leading-[1.65]">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-sm overflow-hidden aspect-[3/4]">
          <img
            src={gateImage}
            alt="Entrada do aeródromo"
            className="w-full h-full object-cover block"
            loading="lazy"
            width={960}
            height={1280}
          />
        </div>
      </div>
    </div>
  </section>
);

export default EventosSection;
