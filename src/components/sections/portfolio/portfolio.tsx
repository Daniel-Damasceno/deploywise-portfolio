"use client";

import { cn } from "@/lib/utils";
import { cases } from "@/data/cases";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RadialGlow } from "@/components/visuals/background-elements";

interface PortfolioProps {
  className?: string;
}

export function Portfolio({ className }: PortfolioProps) {
  return (
    <SectionWrapper 
      id="portfolio" 
      className={cn("bg-card/20 border-y border-border/50", className)}
      withGrid
    >
      <RadialGlow 
        color="secondary" 
        size="lg" 
        className="-top-[10%] -left-[10%] opacity-20" 
      />
      
      <div className="mb-16">
        <p className="text-xs font-mono text-primary mb-4 uppercase tracking-[0.2em] font-bold">
          CASES DE SUCESSO
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Resultados que <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">falam.</span>
        </h2>
      </div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {cases.map((caseStudy) => (
          <motion.div 
            key={caseStudy.id} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="group relative overflow-hidden rounded-xl border border-white/5 bg-black/20 backdrop-blur-sm aspect-[16/10] cursor-pointer shadow-xl transition-all duration-500 hover:border-primary/30 hover:-translate-y-2"
          >
            {/* Background Gradient/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity" />
            
            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 sm:transform sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary mb-4 uppercase tracking-wider backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {caseStudy.metric}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                {caseStudy.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors text-xs sm:text-sm md:text-base max-w-sm leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Placeholder for real image in future - adding a subtle texture for now */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

