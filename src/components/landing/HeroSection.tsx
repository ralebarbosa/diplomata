import heroImage from "@/assets/hero-aerodrome.jpg";
import logoDiplomata from "@/assets/logo-diplomata-v3.png";

const HeroSection = () => (
  <section className="min-h-screen relative overflow-hidden flex items-center px-[6%] py-24">
    <div
      className="absolute inset-0 bg-cover bg-[center_15%] md:bg-[center_40%]"
      style={{ backgroundImage: `url(${heroImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.88] via-black/45 to-black/20 mx-0" />
    <div className="absolute left-[6%] top-0 bottom-0 w-[2px] bg-primary/20" />

    <div className="relative z-20 w-full max-w-[1400px] mx-auto items-center">
      <div className="max-w-[640px] flex flex-col text-left">
        <img
          src={logoDiplomata}
          alt="Aeródromo Diplomata"
          className="h-[90px] md:h-28 w-auto mb-8 object-contain object-left self-start order-1"
        />
        <p className="leading-[1.2] md:leading-[1.75] max-w-[640px] mb-8 md:mb-[34px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground order-2 text-3xl text-left">
          Aeródromo inteligente para aviação geral
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 order-4">
          <a
            href="#conheca"
            className="bg-primary text-primary-foreground rounded-sm px-7 py-3 text-[11px] font-bold tracking-[0.12em] uppercase no-underline hover:opacity-90 transition-opacity inline-block"
          >
            Conheça o Aeródromo
          </a>
          <a
            href="#contato"
            className="border border-primary-foreground/25 text-primary-foreground/65 rounded-sm px-[26px] py-[11px] text-[11px] font-semibold tracking-[0.12em] uppercase no-underline hover:text-primary-foreground hover:border-primary-foreground/60 transition-all inline-block"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
