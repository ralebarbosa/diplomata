import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import SectionLabel from "./SectionLabel";

const ETAPAS = [
  { status: "done", icon: CheckCircle2, title: "PISTA OPERACIONAL", desc: "Pista registrada e 100% operacional" },
  { status: "done", icon: CheckCircle2, title: "PÁTIO", desc: "Pátio compactado e recebendo aeronaves" },
  { status: "done", icon: CheckCircle2, title: "SEGURANÇA", desc: "Câmeras e sistema de segurança ativos" },
  { status: "done", icon: CheckCircle2, title: "COMBUSTÍVEL", desc: "Tanque disponível e padronizado" },
  { status: "progress", icon: Clock, title: "HANGAR 01", desc: "Fase de concretagem do piso" },
];

const PROGRESSO = 90;

const StatusObraSection = () => (
  <section className="bg-background py-24 px-[6%] border-t border-border">
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center mb-14">
        <SectionLabel>Obra em andamento</SectionLabel>
        <h2 className="font-display text-[42px] md:text-[52px] text-foreground tracking-[0.06em] leading-none mb-4">
          STATUS DO AERÓDROMO
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-[1.7]">
          Acompanhe em tempo real o avanço da construção do Aeródromo Diplomata.
        </p>
      </div>

      {/* Progress display */}
      <div className="bg-card border border-border rounded-sm p-10 md:p-14 mb-14 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <p className="text-[10px] text-primary tracking-[0.18em] uppercase mb-2 font-semibold">
              Progresso geral
            </p>
            <p className="text-sm text-muted-foreground max-w-md leading-[1.6]">
              FASE FINAL
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[80px] md:text-[96px] text-primary leading-none tracking-[0.04em]">
              {PROGRESSO}
            </span>
            <span className="font-display text-[32px] text-muted-foreground/60">%</span>
          </div>
        </div>
        <div className="relative h-[6px] bg-muted rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full"
            style={{ width: `${PROGRESSO}%` }}
          />
        </div>
      </div>

      {/* Timeline of stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
        {ETAPAS.map((etapa) => {
          const Icon = etapa.icon;
          const isDone = etapa.status === "done";
          const isProgress = etapa.status === "progress";
          return (
            <div
              key={etapa.title}
              className="bg-card p-7 flex flex-col gap-3 relative"
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`w-5 h-5 shrink-0 ${
                    isDone
                      ? "text-green-600"
                      : isProgress
                      ? "text-foreground/80"
                      : "text-muted-foreground/50"
                  }`}
                />
                <span
                  className={`text-[9px] tracking-[0.18em] uppercase font-semibold ${
                    isDone
                      ? "text-green-600"
                      : isProgress
                      ? "text-foreground/70"
                      : "text-muted-foreground/60"
                  }`}
                >
                  {isDone ? "Concluído" : isProgress ? "Em andamento" : "Próximo"}
                </span>
              </div>
              <h3
                className={`text-[15px] font-semibold leading-tight ${
                  isDone || isProgress ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {etapa.title}
              </h3>
              <p className="text-[12px] text-muted-foreground leading-[1.6]">
                {etapa.desc}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  </section>
);

export default StatusObraSection;
