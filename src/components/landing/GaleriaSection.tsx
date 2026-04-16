import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import galeria01 from "@/assets/galeria-01.png";
import galeria02 from "@/assets/galeria-02.png";
import galeria03 from "@/assets/galeria-03.jpeg";
import galeria04 from "@/assets/galeria-04.png";
import galeria05 from "@/assets/galeria-05.png";
import galeria06 from "@/assets/galeria-06.png";
import galeria07 from "@/assets/galeria-07.png";
import galeria08 from "@/assets/galeria-08.jpeg";

const fotos = [
  { src: galeria01, alt: "Aeronaves estacionadas na pista do Aeródromo Diplomata" },
  { src: galeria02, alt: "Aeronave monomotor na pista de terra do Aeródromo Diplomata" },
  { src: galeria03, alt: "Aeronave Cessna Caravan no Aeródromo Diplomata" },
  { src: galeria04, alt: "Beechcraft Bonanza na pista do Aeródromo Diplomata" },
  { src: galeria05, alt: "Piper PT-NHP na pista do Aeródromo Diplomata" },
  { src: galeria06, alt: "Aeronave PU-NLR na pista do Aeródromo Diplomata" },
  { src: galeria07, alt: "Piper Cherokee na pista do Aeródromo Diplomata" },
  { src: galeria08, alt: "Cessna Caravan estacionada na pista do Aeródromo Diplomata" },
];

const GaleriaSection = () => (
  <section id="galeria" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1200px] mx-auto">
      <SectionLabel>Registros</SectionLabel>
      <SectionTitle>GALERIA DE FOTOS</SectionTitle>

      <p className="text-base md:text-lg text-muted-foreground leading-[1.7] max-w-3xl mb-12">
        Confira momentos e aeronaves que já passaram pelo Aeródromo Diplomata.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {fotos.map((foto, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-sm bg-muted border border-border aspect-square shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={foto.src}
              alt={foto.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaSection;
