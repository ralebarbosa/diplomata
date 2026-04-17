import heroImage from "@/assets/hero-aerodrome.jpg";

const HeroSection = () => (
  <section className="min-h-screen relative overflow-hidden flex flex-col justify-end px-[6%] pb-[72px]">
    <div
      className="absolute inset-0 bg-cover"
      style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 40%' }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.88] via-black/45 to-black/20" />
    <div className="absolute left-[6%] top-0 bottom-0 w-[2px] bg-primary/20" />



    <div className="relative max-w-[820px]">
      <h1 className="text-[60px] md:text-[100px] leading-[0.9] text-primary-foreground tracking-[0.03em] mb-7 font-sans font-extrabold">
        DIPLOMATA
        <br />
        <span className="text-primary">SS8X</span>
      </h1>
      <p className="text-base text-primary-foreground/50 leading-[1.75] max-w-[480px] mb-11 font-light">
        O seu aeródromo alternativo do Triângulo Mineiro, com hangaragem, pátio e arrendamento
        de lotes
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
    </div>
  </section>
);

export default HeroSection;
