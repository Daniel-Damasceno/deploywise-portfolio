import type { ElementType } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Smartphone, Monitor } from "lucide-react";

export type LighthouseScores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

export type CaseResult =
  | { kind: "coming-soon"; label: string; title: string }
  | {
      kind: "lighthouse";
      title: string;
      measuredAt: string;
      sourceUrl: string;
      mobile: LighthouseScores;
      desktop: LighthouseScores;
    };

interface LighthouseResultCardProps {
  data: Extract<CaseResult, { kind: "lighthouse" }>;
  className?: string;
}

function getScoreColor(score: number) {
  if (score >= 90) return "text-green-500";
  if (score >= 50) return "text-orange-500";
  return "text-red-500";
}

function getScoreBorder(score: number) {
  if (score >= 90) return "border-green-500/40";
  if (score >= 50) return "border-orange-500/40";
  return "border-red-500/40";
}

function ScoreCircle({ score, label }: { score: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "w-16 h-16 rounded-full border-4 flex items-center justify-center font-display font-bold text-xl shrink-0",
          getScoreColor(score),
          getScoreBorder(score)
        )}
        aria-hidden="true"
      >
        {score}
      </div>
      <span className="text-[11px] text-muted-foreground text-center font-medium leading-tight max-w-[80px]">
        {label}
      </span>
    </div>
  );
}

function DeviceScores({
  device,
  scores,
  icon: Icon,
}: {
  device: "Mobile" | "Desktop";
  scores: LighthouseScores;
  icon: ElementType;
}) {
  return (
    <div className="flex-1 flex flex-col p-5 md:p-6 bg-background/50 rounded-xl border border-border/50">
      {/* Device header */}
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
        <h4 className="font-semibold text-sm text-foreground">{device}</h4>
      </div>

      {/* Screen-reader accessible data */}
      <dl className="sr-only">
        <dt>{device} Desempenho</dt>
        <dd>{scores.performance} de 100</dd>
        <dt>{device} Acessibilidade</dt>
        <dd>{scores.accessibility} de 100</dd>
        <dt>{device} Práticas Recomendadas</dt>
        <dd>{scores.bestPractices} de 100</dd>
        <dt>{device} SEO</dt>
        <dd>{scores.seo} de 100</dd>
      </dl>

      {/*
       * Score grid:
       * - 2 cols on mobile (<480px)
       * - 4 cols from xs+ (panels are full-width on mobile/tablet, so 4-in-a-row is safe)
       * - When lg: panels go side-by-side (each ~50%), still 4 cols but lg:gap-4 for breathing room
       */}
      <div
        aria-hidden="true"
        className="grid grid-cols-2 xs:grid-cols-4 gap-4 lg:gap-6 justify-items-center"
      >
        <ScoreCircle score={scores.performance} label="Desempenho" />
        <ScoreCircle score={scores.accessibility} label="Acessibilidade" />
        <ScoreCircle score={scores.bestPractices} label="Práticas Rec." />
        <ScoreCircle score={scores.seo} label="SEO" />
      </div>
    </div>
  );
}

export function LighthouseResultCard({
  data,
  className,
}: LighthouseResultCardProps) {
  const measuredDate = new Date(data.measuredAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden",
        className
      )}
    >
      {/* Card header */}
      <div className="p-5 md:p-7 pb-4">
        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
          {data.title}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          Medido em {measuredDate}
        </p>
      </div>

      {/*
       * Device panels:
       * - Stacked vertically on mobile + tablet (full card width per panel → plenty of space)
       * - Side-by-side only on lg+ (1024px), where each panel still has ~50% of a wide card
       */}
      <div className="flex flex-col lg:flex-row gap-4 px-5 md:px-7 pb-5 md:pb-7">
        <DeviceScores device="Mobile" scores={data.mobile} icon={Smartphone} />
        <DeviceScores device="Desktop" scores={data.desktop} icon={Monitor} />
      </div>

      {/* Footer link */}
      <div className="mt-auto border-t border-border/50 bg-background/50 px-5 py-3">
        <a
          href={data.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          aria-label="Ver relatório completo no PageSpeed Insights (abre em nova aba)"
        >
          Ver relatório completo no PageSpeed Insights
          <ExternalLink className="w-3 h-3 shrink-0" />
        </a>
      </div>
    </div>
  );
}
