import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RadialGlow } from "@/components/visuals/background-elements";

interface CaseHeroProps {
  tags: string[];
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CaseHero({
  tags,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: CaseHeroProps) {
  return (
    <section className={cn("relative pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden border-b border-border/50", className)}>
      <RadialGlow color="primary" size="lg" className="-top-[10%] -left-[10%] opacity-20" />
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 md:mb-8">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-0.5 md:px-3 md:py-1 text-[9px] sm:text-[10px] md:text-xs font-mono font-medium tracking-widest text-primary uppercase border border-primary/20 bg-primary/5 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight text-foreground balance-text leading-[1.1]">
          {title}
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 max-w-[600px] leading-relaxed balance-text">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-white hover:bg-primary/90 font-bold group">
            <Link 
              href={primaryCta.href} 
              target={primaryCta.external ? "_blank" : undefined}
              rel={primaryCta.external ? "noopener noreferrer" : undefined}
            >
              {primaryCta.label}
              {primaryCta.external && (
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full border-border hover:bg-card hover:text-foreground font-medium">
            <Link href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
