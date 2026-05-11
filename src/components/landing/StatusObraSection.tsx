import { CheckCircle2, Clock, Activity } from "lucide-react";

const ETAPAS = [
  { status: "done", icon: CheckCircle2, title: "PISTA OPERACIONAL", desc: "Pista registrada e 100% operacional" },
  { status: "done", icon: CheckCircle2, title: "PÁTIO", desc: "Pátio compactado e recebendo aeronaves" },
  { status: "done", icon: CheckCircle2, title: "SEGURANÇA", desc: "Câmeras e sistema de segurança ativos" },
  { status: "done", icon: CheckCircle2, title: "COMBUSTÍVEL", desc: "Tanque disponível e padronizado" },
  { status: "done", icon: CheckCircle2, title: "HANGAR 01", desc: "Fase de concretagem do piso" },
];

const PROGRESSO = 100;

const StatusObraSection = () => (
  <section id="status-obra" className="py-20 px-[6%] bg-background">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl tracking-[0.02em] text-foreground font-bold text-center mb-3">
        Status do Aeródromo
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
        Acompanhe em tempo real o avanço da construção do Aeródromo Diplomata
      </p>

      <div className="grid grid-cols-1 gap-6">
        {/* Card de progresso geral */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12">
          <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
            <Activity className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground leading-[1.6] font-bold text-xl">
              Progresso geral da obra — fase final de execução.
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-xs text-muted-foreground tracking-[0.05em] uppercase mb-1 font-semibold">
                Fase atual
              </p>
              <p className="text-lg md:text-xl text-foreground font-bold">
                Concluído 1 ª fase
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[80px] md:text-[96px] text-primary leading-none font-bold">
                {PROGRESSO}
              </span>
              <span className="font-display text-[32px] text-muted-foreground/60 font-bold">%</span>
            </div>
          </div>
          <div className="relative h-[8px] bg-muted rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full"
              style={{ width: `${PROGRESSO}%` }}
            />
          </div>
        </div>

        {/* Card de etapas */}
        <div className="rounded-2xl border border-border bg-card p-10 lg:p-12">
          <div className="flex gap-3 items-start pb-6 mb-8 border-b border-border">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground leading-[1.6] font-bold text-xl">
              Etapas da obra
            </span>
          </div>

          <ul className="flex flex-col gap-5">
            {ETAPAS.map((etapa) => {
              const Icon = etapa.icon;
              const isDone = etapa.status === "done";
              return (
                <li key={etapa.title} className="flex gap-4 items-start">
                  <Icon
                    className={`w-6 h-6 shrink-0 mt-0.5 ${
                      isDone ? "text-green-600" : "text-foreground/60"
                    }`}
                  />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <div>
                      <span className="text-lg md:text-xl text-foreground leading-[1.4] font-bold block">
                        {etapa.title}
                      </span>
                      <span className="text-sm text-muted-foreground leading-[1.5]">
                        {etapa.desc}
                      </span>
                    </div>
                    <span
                      className={`text-xs tracking-[0.05em] uppercase font-semibold shrink-0 ${
                        isDone ? "text-primary" : "text-foreground/70"
                      }`}
                    >
                      {isDone ? "Concluído" : "Em andamento"}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default StatusObraSection;
