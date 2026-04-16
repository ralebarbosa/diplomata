import { MapPin, Navigation, Clock } from "lucide-react";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const DISTANCIAS = [
  { cidade: "Uberaba - MG", tempo: "22 min" },
  { cidade: "Uberlândia - MG", tempo: "31 min" },
  { cidade: "Araguari - MG", tempo: "55 min" },
  { cidade: "Ituverava - SP", tempo: "59 min" },
];

const LocalizacaoSection = () => (
  <section id="localizacao" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1200px] mx-auto">
      <SectionLabel>Localização Privilegiada</SectionLabel>
      <SectionTitle>LOCALIZAÇÃO</SectionTitle>

      {/* Destaque: Fácil Acesso */}
      <div className="mb-10 p-6 md:p-8 bg-primary/5 border-l-4 border-primary rounded-sm">
        <div className="flex items-start gap-4">
          <Navigation className="w-6 h-6 text-primary mt-1 shrink-0" />
          <div>
            <p className="font-display text-2xl md:text-3xl text-foreground tracking-[0.06em] mb-2">
              FÁCIL ACESSO
            </p>
            <p className="text-base text-muted-foreground leading-[1.7]">
              Rodovia BR-050, Km 133 — Entre Uberlândia-MG e Uberaba-MG
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        {/* Coluna esquerda: distâncias */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <Clock className="w-4 h-4 text-primary" />
            <p className="text-[11px] font-semibold text-muted-foreground tracking-[0.18em] uppercase">
              Tempo de Deslocamento
            </p>
          </div>

          <div className="flex-1">
            {DISTANCIAS.map((d) => (
              <div
                key={d.cidade}
                className="flex justify-between items-center py-[18px] border-b border-border last:border-b-0"
              >
                <span className="text-[15px] text-foreground/80">{d.cidade}</span>
                <span className="font-display text-2xl md:text-3xl text-primary tracking-[0.06em]">
                  {d.tempo}
                </span>
              </div>
            ))}
          </div>

          {/* Destaque: 1 km da rodovia */}
          <div className="mt-8 p-5 bg-foreground text-background rounded-sm flex items-center gap-4">
            <MapPin className="w-6 h-6 text-primary shrink-0" />
            <p className="font-display text-lg md:text-xl tracking-[0.06em] leading-tight">
              APENAS 1 KM DA BEIRA DA RODOVIA
            </p>
          </div>
        </div>

        {/* Coluna direita: Mapa */}
        <div className="rounded-sm overflow-hidden border border-border min-h-[400px] lg:min-h-full shadow-sm">
          <iframe
            title="Localização do Aeródromo - BR-050 Km 133"
            src="https://www.google.com/maps?q=-19.416115,-48.071437&z=16&t=k&output=embed"
            className="w-full h-full min-h-[400px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocalizacaoSection;
