import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";

const ContatoSection = () => (
  <section id="contato" className="py-20 px-[6%] bg-dark-surface">
    <div className="max-w-[520px]">
      <SectionLabel>Fale com a gente</SectionLabel>
      <SectionTitle light size={48} mb={40}>
        CONTATO
      </SectionTitle>
      <div className="flex flex-col gap-3.5">
        <a
          href="tel:+5534996840966"
          className="flex items-center gap-4 p-5 px-6 border border-primary-foreground/15 rounded-sm no-underline transition-colors hover:border-primary w-full max-w-[400px]"
        >
          <span className="text-lg">📞</span>
          <div>
            <p className="text-[10px] text-primary-foreground/30 tracking-[0.1em] uppercase mb-[3px]">
              Telefone / WhatsApp
            </p>
            <p className="text-base font-medium text-primary-foreground">(34) 99684-0966</p>
          </div>
        </a>
        <a
          href="mailto:contato@avionika.com.br"
          className="flex items-center gap-4 p-5 px-6 border border-primary-foreground/15 rounded-sm no-underline transition-colors hover:border-primary w-full max-w-[400px]"
        >
          <span className="text-lg">✉️</span>
          <div>
            <p className="text-[10px] text-primary-foreground/30 tracking-[0.1em] uppercase mb-[3px]">
              E-mail
            </p>
            <p className="text-base font-medium text-primary-foreground">contato@avionika.com.br</p>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default ContatoSection;
