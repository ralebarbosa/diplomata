import { MapPin, Clock } from "lucide-react";

const TEMPOS = [
  "22 minutos de Uberaba-MG",
  "33 minutos de Uberlândia-MG",
  "55 minutos de Araguari-MG",
  "59 minutos de Ituverava-SP",
];

const LocalizacaoAcessoSection = () => (
  <section id="localizacao-acesso" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mb-3">
        Localização e Acesso
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
        Rodovia BR 050 Km 133 - entre Uberlândia e Uberaba
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tempos de acesso */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 flex flex-col">
          <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground leading-[1.6] font-bold text-xl">
              Acesso exclusivo pela beira da rodovia. Apenas 1km de estrada de terra.
            </span>
          </div>
          <ul className="flex flex-col gap-5">
            {TEMPOS.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg md:text-xl text-foreground leading-[1.5]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Google Maps */}
        <div className="rounded-2xl overflow-hidden bg-dark min-h-[400px]">
          <iframe
            title="Localização do Aeródromo - BR-050 Km 133"
            src="https://www.google.com/maps?q=-19.416115,-48.071437&z=13&t=k&output=embed"
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

export default LocalizacaoAcessoSection;
