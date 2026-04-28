"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SocialProofProps {
  className?: string;
}

export function SocialProof({ className }: SocialProofProps) {
  return (
    <section id="social-proof" aria-labelledby="social-proof-heading" className={cn("py-12 border-y border-border bg-card overflow-hidden flex items-center", className)}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center"
      >
        <p id="social-proof-heading" className="text-xs font-mono text-muted-foreground mb-8 uppercase tracking-widest">
          Empresas que confiam na nossa engenharia
        </p>
        <div className="flex flex-wrap justify-center md:justify-between w-full gap-8 sm:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="font-display font-bold text-lg sm:text-xl md:text-2xl">TechAlpha</div>
          <div className="font-display font-bold text-lg sm:text-xl md:text-2xl">LogExpress</div>
          <div className="font-display font-bold text-lg sm:text-xl md:text-2xl">HealthSync</div>
          <div className="font-display font-bold text-lg sm:text-xl md:text-2xl hidden xs:block">FinCore</div>
          <div className="font-display font-bold text-lg sm:text-xl md:text-2xl hidden sm:block">NovaTech</div>
        </div>
      </motion.div>
    </section>
  );
}
