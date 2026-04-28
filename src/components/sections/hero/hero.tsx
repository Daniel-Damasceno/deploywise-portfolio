"use client";

import { useState, useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { ChevronRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GridBackground, RadialGlow } from "@/components/visuals/background-elements";

interface HeroProps {
  className?: string;
}

const AnimatedCounter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.floor(v)),
      });
      return controls.stop;
    }
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <GridBackground />
      <RadialGlow 
        color="primary" 
        size="lg" 
        className="-top-[20%] -left-[10%] opacity-50 dark:opacity-30" 
      />
      <RadialGlow 
        color="secondary" 
        size="md" 
        className="top-[40%] -right-[5%] opacity-30 dark:opacity-20" 
      />

      <div className="pt-32 sm:pt-40 pb-[80px] sm:pb-[120px] px-6 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] sm:text-xs font-mono text-primary mb-6 sm:mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            Softhouse Premium - desde 2025
          </div>
          
          <h1 className="text-4xl xs:text-5xl lg:text-[64px] font-display font-bold leading-[1.1] tracking-tight mb-6">
            Presença digital que <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">vende.</span><br />
            Sistemas que <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">escalam.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
            Transformamos visão técnica em vantagem competitiva. Desenvolvimento de alta performance para empresas que não aceitam o básico.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-16 sm:mb-20">
            <Button 
              asChild
              className="h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              <a href="#contact">Quero um orçamento</a>
            </Button>
            <Button 
              asChild
              variant="ghost" 
              className="h-12 px-8 rounded-full bg-card/50 backdrop-blur-md text-foreground font-medium hover:bg-muted transition-all border border-border/50 hover:scale-105 active:scale-95"
            >
              <a href="#portfolio">Ver portfólio</a>
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start gap-8 sm:gap-12 border-t border-border/20 pt-10 mt-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold mb-1 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                <AnimatedCounter value={150} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Projetos</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold mb-1 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                <AnimatedCounter value={98} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Retenção</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-4 sm:px-0"
        >
          {/* Main Glow for the element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl group transition-all duration-500 hover:border-primary/30">
            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
              </div>
              <div className="ml-4 text-[10px] font-mono text-muted-foreground flex items-center gap-2 uppercase tracking-widest opacity-60">
                <Terminal className="w-3 h-3" /> deploywise_core.ts
              </div>
            </div>
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <div className="flex gap-4">
                <span className="text-muted-foreground/40 select-none">01</span>
                <span><span className="text-purple-400">const</span> <span className="text-blue-400">project</span> = {"{"}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-muted-foreground/40 select-none">02</span>
                <span>&nbsp;&nbsp;name: <span className="text-emerald-400">"ScaleUp"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-muted-foreground/40 select-none">03</span>
                <span>&nbsp;&nbsp;perf: <span className="text-emerald-400">"99/100"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-muted-foreground/40 select-none">04</span>
                <span>&nbsp;&nbsp;uptime: <span className="text-emerald-400">"99.9%"</span>,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-muted-foreground/40 select-none">05</span>
                <span>&nbsp;&nbsp;deploy: () <span className="text-purple-400">=&gt;</span> <span className="text-emerald-400">"Ok"</span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-muted-foreground/40 select-none">06</span>
                <span>{"}"};</span>
              </div>
              <div className="mt-4 flex gap-4">
                <span className="text-muted-foreground/40 select-none">07</span>
                <span className="text-muted-foreground italic text-[10px] sm:text-xs">// Initiating protocols...</span>
              </div>
              <div className="flex gap-4">
                <span className="text-muted-foreground/40 select-none">08</span>
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary align-middle"
                />
              </div>
            </div>
          </div>

          {/* Floating badge - hidden on very small screens to avoid overflow */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 p-3 sm:p-4 rounded-lg border border-white/10 bg-black/60 backdrop-blur-lg shadow-xl z-20 hidden xs:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm bg-primary rotate-45" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Status</div>
                <div className="text-xs sm:text-sm font-bold text-white">Live & Scaling</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


