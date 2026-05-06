"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SocialProofProps {
  className?: string;
}

export function SocialProof({ className }: SocialProofProps) {
  return (
    <section id="social-proof" aria-labelledby="social-proof-heading" className={cn("py-12 border-y border-border bg-card overflow-hidden flex items-center justify-center", className)}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 w-full text-center"
      >
        <p id="social-proof-heading" className="text-sm font-mono text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
          Atendendo clientes desde 2025
          <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
        </p>
      </motion.div>
    </section>
  );
}
