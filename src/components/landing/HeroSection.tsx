import heroImage from "@/assets/hero-aerodrome.jpg";
import iphoneMockup from "@/assets/hero-iphone-mockup-v8.png";
import logoDiplomata from "@/assets/logo-diplomata-v3.png";

const HeroSection = () => (
  <section className="min-h-screen relative overflow-hidden flex items-center px-[6%] py-24">
    <div
      className="absolute inset-0 bg-cover"
      style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 40%' }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.88] via-black/45 to-black/20 mx-0" />
    <div className="absolute left-[6%] top-0 bottom-0 w-[2px] bg-primary/20" />

    <div className="relative z-20 w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-24 lg:gap-32 items-center md:pr-[8%] lg:pr-[15%]">
      <div className="max-w-[640px] flex flex-col">
        <img
          src={logoDiplomata}
          alt="Aeródromo Diplomata"
          className="h-[90px] md:h-28 w-auto mb-8 brightness-0 invert object-fill order-1"
        />
        <p className="leading-[1.2] md:leading-[1.75] max-w-[640px] text-left mb-8 md:mb-[34px] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground order-2">
          Aeródromo inteligente para aviação geral
        </p>
        <img
          src={iphoneMockup}
          alt="iPhone exibindo o aeródromo Diplomata SS8X"
          width={1000}
          height={1000}
          className="order-3 md:hidden self-center w-[95%] max-w-[460px] mb-8 object-contain pointer-events-none select-none"
        />
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

      <img
        src={iphoneMockup}
        alt="iPhone exibindo o aeródromo Diplomata SS8X"
        width={1000}
        height={1000}
        className="hidden md:block justify-self-end md:w-auto md:max-w-[420px] lg:max-w-[480px] object-contain pointer-events-none select-none"
      />
    </div>
  </section>
);

export default HeroSection;
