import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RadialGlow } from "@/components/visuals/background-elements";

interface CaseCTAProps {
  text: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CaseCTA({ text, primaryAction, secondaryAction, className }: CaseCTAProps) {
  return (
    <section className={cn("py-24 relative overflow-hidden", className)}>
      <RadialGlow color="primary" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-10 leading-snug">
          {text}
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-white hover:bg-primary/90 font-bold">
            <Link href={primaryAction.href}>
              {primaryAction.label}
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full border-border hover:bg-card hover:text-foreground font-medium">
            <Link href={secondaryAction.href}>
              {secondaryAction.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
