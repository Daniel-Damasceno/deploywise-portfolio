import { cn } from "@/lib/utils";
import { CaseResult, LighthouseResultCard } from "./case-lighthouse-card";

interface CaseResultsGridProps {
  results: CaseResult[];
  className?: string;
}

export function CaseResultsGrid({ results, className }: CaseResultsGridProps) {
  const lighthouseResults = results.filter((r) => r.kind === "lighthouse");
  const otherResults = results.filter((r) => r.kind !== "lighthouse");

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Lighthouse card: always full width so circles have room */}
      {lighthouseResults.map((result, i) =>
        result.kind === "lighthouse" ? (
          <LighthouseResultCard key={`lh-${i}`} data={result} />
        ) : null
      )}

      {/* Coming-soon cards: 2 cols on sm+, 4 on lg+ */}
      {otherResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherResults.map((result, i) => {
            if (result.kind === "coming-soon") {
              return (
                <div
                  key={`cs-${i}`}
                  className="p-5 md:p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm flex flex-col justify-center opacity-70 grayscale-[0.5]"
                >
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Em mensuração
                  </div>
                  <div className="text-xl md:text-2xl font-display font-bold text-foreground mb-2 break-words">
                    {result.title}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground leading-tight">
                    {result.label}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}
