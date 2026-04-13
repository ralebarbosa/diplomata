import SectionLabel from "./SectionLabel";
import personImage from "@/assets/person-runway.jpg";

const StatusObraSection = () => (
  <section className="bg-dark border-t border-primary-foreground/10 overflow-hidden">
    <div className="flex flex-col md:flex-row min-h-[360px]">
      <div
        className="md:w-[38%] min-h-[300px] bg-cover bg-center bg-top"
        style={{ backgroundImage: `url(${personImage})` }}
      />
      <div className="flex-1 p-14 px-[5%]">
        <SectionLabel>Obra em andamento</SectionLabel>
        <h2 className="font-display text-[42px] text-primary-foreground tracking-[0.06em] leading-none mb-7">
          STATUS DA OBRA
        </h2>
        <div className="flex justify-between items-baseline mb-3.5 flex-wrap gap-2">
          <span className="text-[13px] text-primary-foreground/35 tracking-[0.04em]">
            Aeródromo 90% concluído — estrutura em fase final
          </span>
          <span className="font-display text-[40px] text-primary tracking-[0.06em]">90%</span>
        </div>
        <div className="h-[3px] bg-primary-foreground/10 rounded-sm overflow-hidden mb-7">
          <div className="h-full w-[90%] bg-primary rounded-sm" />
        </div>
        <div className="border-l-2 border-primary pl-[18px]">
          <p className="text-[10px] text-primary tracking-[0.14em] uppercase mb-1">Em Breve</p>
          <p className="text-sm text-primary-foreground/50 leading-[1.7]">
            Condições comerciais para lotes
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatusObraSection;
