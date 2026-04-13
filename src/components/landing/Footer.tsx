const Footer = () => (
  <footer className="bg-dark-deep py-6 px-[6%] flex items-center justify-between flex-wrap gap-3 border-t border-primary-foreground/10">
    <div className="flex items-center gap-2.5">
      <div className="w-[26px] h-[26px] rounded-full bg-primary flex items-center justify-center font-display text-[11px] text-primary-foreground">
        8X
      </div>
      <span className="font-display text-[15px] tracking-[0.12em] text-primary-foreground/30">
        AERÓDROMO DIPLOMATA
      </span>
    </div>
    <p className="text-[11px] text-primary-foreground/20 tracking-[0.06em]">
      SS8X · BR-050 Km 133 · Triângulo Mineiro
    </p>
  </footer>
);

export default Footer;
