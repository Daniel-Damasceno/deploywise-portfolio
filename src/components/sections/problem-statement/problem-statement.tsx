"use client";

import { cn } from "@/lib/utils";
import { Zap, ShieldAlert, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedIcon } from "@/components/visuals/animated-icon";

interface ProblemStatementProps {
  className?: string;
}

export function ProblemStatement({ className }: ProblemStatementProps) {
  const problems = [
    {
      title: "Lentidão Técnica",
      description: "Sua plataforma atual não aguenta o volume de acessos e perde vendas por performance.",
      icon: Zap
    },
    {
      title: "Design Genérico",
      description: "Seu site parece um template barato e não transmite a autoridade que sua marca merece.",
      icon: ShieldAlert
    },
    {
      title: "Gargalo de Gestão",
      description: "Processos manuais que poderiam ser automatizados estão drenando o tempo do seu time.",
      icon: Workflow
    }
  ];

  return (
    <SectionWrapper 
      id="problem-statement"
      ariaLabelledBy="problem-statement-heading"
      className={cn("text-center", className)}
      containerSize="md"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="problem-statement-heading"
        className="text-3xl md:text-5xl font-display font-bold mb-16 leading-tight"
      >
        O custo da dívida técnica está <br/>
        <span className="bg-gradient-to-r from-red-400 to-primary bg-clip-text text-transparent">travando seu crescimento.</span>
      </motion.h2>

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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
      >
        {problems.map((item, i) => (
          <motion.div 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="p-8 border border-border/50 rounded-xl bg-card/40 backdrop-blur-sm group hover:border-primary/30 transition-all duration-500"
          >
            <AnimatedIcon 
              icon={item.icon} 
              className="w-10 h-10 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500" 
              size={20}
            />
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
