import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import mapaLocalizacao from "@/assets/localizacao-mapa.png";

const LocalizacaoSection = () => (
  <section id="localizacao" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1200px] mx-auto">
      <SectionLabel>Localização Privilegiada</SectionLabel>
      <SectionTitle mb={16}>LOCALIZAÇÃO ESTRATÉGICA</SectionTitle>

      <p className="font-display text-lg md:text-2xl text-foreground/80 italic max-w-3xl mb-10 leading-snug">
        Localizado ao lado da <span className="text-primary not-italic font-semibold">Vinícola Arpuro</span> e do futuro <span className="text-primary not-italic font-semibold">Condomínio Casa de Campo</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        {/* Coluna esquerda: Imagem aérea com vizinhos */}
        <div className="rounded-sm overflow-hidden border border-border shadow-sm">
          <img
            src={mapaLocalizacao}
            alt="Vista aérea mostrando a localização do Aeródromo Diplomata 8X, Vinícola Arpuro e Condomínio Casa de Campo"
            className="w-full h-full object-cover min-h-[400px]"
            loading="lazy"
          />
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
