"use client";

import { cn } from "@/lib/utils";
import { processSteps } from "@/data/process";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RadialGlow } from "@/components/visuals/background-elements";

interface ProcessProps {
  className?: string;
}

export function Process({ className }: ProcessProps) {
  return (
    <SectionWrapper 
      id="process" 
      className={cn("bg-background", className)}
      withGrid
    >
      <RadialGlow 
        color="emerald" 
        size="lg" 
        className="top-[20%] -right-[10%] opacity-20" 
      />

      <div className="mb-16">
        <p className="text-xs font-mono text-primary mb-4 uppercase tracking-[0.2em] font-bold">
          METODOLOGIA
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold">
          Como <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">trabalhamos.</span>
        </h2>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" />
        
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
          className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] group-hover:-translate-y-1">
                <div className="text-xs font-mono font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  0{index + 1}
                </div>
                
                {/* Active Indicator Pulse */}
                <div className="absolute -inset-1 bg-primary/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h4 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                {step.description}
              </p>
              
              {/* Step connector for mobile */}
              {index !== processSteps.length - 1 && (
                <div className="absolute left-6 top-10 -bottom-10 w-px bg-gradient-to-b from-border via-border/50 to-transparent md:hidden" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

