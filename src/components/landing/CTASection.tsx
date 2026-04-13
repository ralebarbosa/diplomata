const CTASection = () => (
  <section className="bg-dark py-[72px] px-[6%]">
    <div className="max-w-[640px]">
      <h2 className="font-display text-[40px] md:text-[56px] text-primary-foreground tracking-[0.04em] leading-none mb-[18px]">
        PRONTO PARA
        <br />
        <span className="text-primary">POUSAR?</span>
      </h2>
      <p className="text-[15px] text-primary-foreground/40 mb-9 leading-[1.75]">
        Entre em contato e descubra como o Aeródromo Diplomata pode ser a sua base no Triângulo
        Mineiro.
      </p>
      <a
        href="#contato"
        className="bg-primary text-primary-foreground rounded-sm px-7 py-3 text-[11px] font-bold tracking-[0.12em] uppercase no-underline hover:opacity-90 transition-opacity inline-block"
      >
        Fale Conosco
      </a>
    </div>
  </section>
);

export default CTASection;
