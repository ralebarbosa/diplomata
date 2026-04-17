import heroImage from "@/assets/hero-aerodrome.jpg";
import iphoneMockup from "@/assets/iphone-mockup.png";

const HeroSection = () => (
  <section className="min-h-screen relative overflow-hidden flex flex-col justify-end px-[6%] pb-[72px]">
    <div
      className="absolute inset-0 bg-cover"
      style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 40%' }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.88] via-black/55 to-black/25" />
    <div className="absolute left-[6%] top-0 bottom-0 w-[2px] bg-primary/20" />

    <img
      src={iphoneMockup}
      alt=""
      aria-hidden="true"
      className="hidden md:block absolute right-[-120px] bottom-[-80px] h-[120%] pointer-events-none select-none z-[1]"
    />

    <div className="relative z-10 max-w-[1100px] mx-0 my-[230px]">
      <h1 className="text-[60px] leading-[0.9] text-primary-foreground tracking-[0.03em] mb-7 font-sans font-extrabold whitespace-nowrap md:text-sm">
        Diplomata <span className="text-primary">SS8X</span>
      </h1>
      <p className="leading-[1.75] max-w-[1100px] px-0 py-0 my-0 mx-0 text-left pb-[2px] pr-[3px] mb-[34px] mr-px text-6xl font-bold text-primary-foreground">
        Aeródromo inteligente por assinatura
      </p>
      <div className="flex flex-col sm:flex-row gap-3.5">
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
      <img
        src={iphoneMockup}
        alt=""
        aria-hidden="true"
        className="block md:hidden mx-auto mt-8 w-[240px] relative z-[1]"
      />
    </div>
  </section>
);

export default HeroSection;
