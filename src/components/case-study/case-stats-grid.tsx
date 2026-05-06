import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  value: string;
  comingSoon?: boolean;
}

interface CaseStatsGridProps {
  stats: StatItem[];
  className?: string;
}

export function CaseStatsGrid({ stats, className }: CaseStatsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className={cn(
            "p-5 md:p-6 rounded-xl border bg-card/50 backdrop-blur-sm flex flex-col justify-center",
            stat.comingSoon ? "opacity-70 grayscale-[0.5]" : "border-primary/20"
          )}
        >
          {stat.comingSoon ? (
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Em mensuração
            </div>
          ) : (
            <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2 break-words">
              {stat.value}
            </div>
          )}
          <div className="text-xs md:text-sm text-muted-foreground leading-tight">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
