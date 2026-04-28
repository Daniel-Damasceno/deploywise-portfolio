"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RadialGlow } from "@/components/visuals/background-elements";
import { AnimatedIcon } from "@/components/visuals/animated-icon";

interface ServicesProps {
  className?: string;
}

export function Services({ className }: ServicesProps) {
  return (
    <SectionWrapper 
      id="services" 
      ariaLabelledBy="services-heading"
      className={cn("bg-card/30 border-y border-border/50", className)}
      withGrid
    >
      <RadialGlow 
        color="primary" 
        size="lg" 
        className="-bottom-[20%] -right-[10%] opacity-20" 
      />
      
      <div className="mb-16 max-w-2xl">
        <p className="text-xs font-mono text-primary mb-4 uppercase tracking-[0.2em] font-bold">
          NOSSAS SOLUÇÕES
        </p>
        <h2 id="services-heading" className="text-3xl md:text-5xl font-display font-bold">
          Engenharia focada em <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">resultados.</span>
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
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <Card 
              className={cn(
                "group relative h-full flex flex-col cursor-pointer transition-all duration-500 overflow-hidden",
                "bg-background/40 backdrop-blur-md border-border/50",
                "hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
                service.isPopular ? "border-primary/40 shadow-lg shadow-primary/5" : ""
              )}
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {service.isPopular && (
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-colors" />
              )}
              
              {service.isPopular && (
                <div className="absolute top-4 right-4 bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full z-10 backdrop-blur-sm">
                  MAIS BUSCADO
                </div>
              )}
              
              <CardHeader className="p-6 sm:p-8 pb-4 relative z-10">
                <AnimatedIcon 
                  icon={service.icon} 
                  className="w-12 h-12 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500" 
                  size={24}
                />
                <p className="text-[10px] font-mono text-muted-foreground mb-2 font-bold tracking-[0.2em] uppercase opacity-70 group-hover:text-primary group-hover:opacity-100 transition-colors">
                  {service.tag}
                </p>
                <CardTitle className="text-xl sm:text-2xl font-bold mb-0 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 sm:p-8 pt-0 flex flex-col flex-grow relative z-10">
                <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors mb-auto text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-3 mt-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80 font-medium group-hover:text-foreground transition-colors">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}


