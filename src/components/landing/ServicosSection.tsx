import SectionLabel from "./SectionLabel";
import hangarImage from "@/assets/hangar.jpg";

const SERVICOS_HANGAR = [
  "Hangaragem coberta com portões automatizados",
  "Pátio de estacionamento para aeronaves",
  "Área de manutenção preventiva",
  "Sala de pilotos climatizada",
  "Banheiros e vestiários exclusivos",
];

const SERVICOS_EXTRAS = [
  "Transporte terrestre até Uberlândia ou Uberaba",
  "Coordenação de abastecimento e voo",
  "Apoio logístico para eventos no aeródromo",
];

const ServicosSection = () => (
  <section id="servicos" className="bg-dark-surface overflow-hidden">
    <div className="flex flex-col md:flex-row min-h-[500px]">
      <div
        className="flex-1 min-h-[360px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hangarImage})` }}
      />
      <div className="flex-1 p-16 px-[5%]">
        <SectionLabel>O que oferecemos</SectionLabel>
        <h2 className="font-display text-[42px] tracking-[0.06em] text-primary-foreground leading-none mb-8">
          SERVIÇOS
          <br />
          DE HANGAR
        </h2>
        <ul className="flex flex-col gap-[13px] mb-8 list-none">
          {SERVICOS_HANGAR.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="text-primary shrink-0 leading-[1.5]">—</span>
              <span className="text-sm text-primary-foreground/60 leading-[1.6]">{item}</span>
            </li>
          ))}
        </ul>
        <hr className="border-primary-foreground/10 mb-6" />
        <div>
          <p className="text-[10px] text-primary-foreground/30 tracking-[0.12em] uppercase mb-3.5">
            Serviços Extras
          </p>
          <ul className="flex flex-col gap-[11px] list-none">
            {SERVICOS_EXTRAS.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="text-primary shrink-0 leading-[1.5]">—</span>
                <span className="text-sm text-primary-foreground/45 leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ServicosSection;
