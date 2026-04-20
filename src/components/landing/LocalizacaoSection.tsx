import { MapPin } from "lucide-react";
import mapaLocalizacao from "@/assets/localizacao-mapa.png";

const LocalizacaoSection = () => (
  <section id="localizacao" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mb-3">
        Localização Estratégica
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
        Ao lado da Vinícola Arpuro e do futuro Condomínio Casa de Campo
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card de contexto */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground leading-[1.6] font-bold text-xl">
              Vista aérea da região e dos empreendimentos vizinhos.
            </span>
          </div>
          <div className="rounded-xl overflow-hidden flex-1 min-h-[320px]">
            <img
              src={mapaLocalizacao}
              alt="Vista aérea mostrando a localização do Aeródromo Diplomata 8X, Vinícola Arpuro e Condomínio Casa de Campo"
              className="w-full h-full object-cover min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Google Maps */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground leading-[1.6] font-bold text-xl">
              Veja a localização no Google Maps.
            </span>
          </div>
          <div className="rounded-xl overflow-hidden flex-1 min-h-[320px] bg-dark">
            <iframe
              title="Localização do Aeródromo - BR-050 Km 133"
              src="https://www.google.com/maps?q=-19.416115,-48.071437&z=13&t=k&output=embed"
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocalizacaoSection;
