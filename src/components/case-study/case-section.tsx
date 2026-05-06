import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CaseSectionProps {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function CaseSection({
  number,
  title,
  children,
  className,
}: CaseSectionProps) {
  const id = `section-${number}`;
  
  return (
    <section 
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("py-16 md:py-24 border-b border-border/30", className)}
    >
      <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 md:gap-16">
        <div className="hidden md:flex flex-col items-start pt-2">
          <div className="text-sm font-mono text-primary font-bold">{number}</div>
          <div className="w-px h-24 bg-gradient-to-b from-primary/30 to-transparent mt-4" />
        </div>
        
        <div>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="md:hidden text-sm font-mono text-primary font-bold">{number}</span>
            <h2 id={`${id}-heading`} className="text-2xl md:text-4xl font-display font-bold">
              {title}
            </h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
