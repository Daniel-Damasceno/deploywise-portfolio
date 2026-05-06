import { cn } from "@/lib/utils";

interface TechItem {
  layer: string;
  technology: string;
}

interface CaseTechStackProps {
  stack: TechItem[];
  className?: string;
}

export function CaseTechStack({ stack, className }: CaseTechStackProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <table className="w-full text-sm text-left">
        <thead className="bg-muted/50 text-xs uppercase font-mono text-muted-foreground">
          <tr>
            <th className="px-6 py-4 font-semibold border-b border-border w-1/3">Camada</th>
            <th className="px-6 py-4 font-semibold border-b border-border">Tecnologia</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {stack.map((item, i) => (
            <tr key={i} className="hover:bg-muted/30 transition-colors">
              <td className="px-6 py-4 font-medium text-foreground">{item.layer}</td>
              <td className="px-6 py-4 text-muted-foreground">{item.technology}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
