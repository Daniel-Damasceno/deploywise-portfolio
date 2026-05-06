"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


export function GridBackground({ className }: { className?: string }) {
  return (
    <div 
      className={cn(
        "absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]",
        "bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]",
        "bg-[size:44px_44px]",
        "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]",
        className
      )}
    />
  );
}

export function RadialGlow({ 
  className, 
  color = "primary",
  size = "md" 
}: { 
  className?: string; 
  color?: "primary" | "secondary" | "accent" | "emerald";
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "w-[300px] h-[300px]",
    md: "w-[500px] h-[500px]",
    lg: "w-[800px] h-[800px]",
    xl: "w-[1200px] h-[1200px]",
  };

  const colors = {
    primary: "bg-primary/20",
    secondary: "bg-purple-500/10",
    accent: "bg-blue-500/10",
    emerald: "bg-emerald-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "absolute -z-10 blur-[120px] rounded-full pointer-events-none",
        sizes[size],
        colors[color],
        className
      )}
    />
  );
}

export function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      <RadialGlow 
        color="primary" 
        size="lg" 
        className="-top-[10%] -left-[10%] opacity-40 animate-pulse" 
      />
      <RadialGlow 
        color="secondary" 
        size="lg" 
        className="top-[20%] -right-[10%] opacity-30" 
      />
      <RadialGlow 
        color="emerald" 
        size="md" 
        className="bottom-[10%] left-[20%] opacity-20" 
      />
    </div>
  );
}
