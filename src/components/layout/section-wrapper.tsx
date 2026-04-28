"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/visuals/background-elements";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
  withGrid?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

export function SectionWrapper({ 
  children, 
  className, 
  id, 
  ariaLabelledBy,
  withGrid = false,
  containerSize = "lg"
}: SectionWrapperProps) {
  const containerSizes = {
    sm: "max-w-[800px]",
    md: "max-w-[1000px]",
    lg: "max-w-[1200px]",
    xl: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <section 
      id={id} 
      aria-labelledby={ariaLabelledBy}
      className={cn("relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden", className)}
    >
      {withGrid && <GridBackground className="opacity-[0.02] dark:opacity-[0.05]" />}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={cn("mx-auto relative z-10", containerSizes[containerSize])}
      >
        {children}
      </motion.div>
    </section>
  );
}
