"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export function AnimatedIcon({ icon: Icon, className, size = 20 }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.1, 
        rotate: [0, -10, 10, 0],
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={cn(
        "flex items-center justify-center p-2 rounded-lg bg-primary/5 text-primary border border-primary/10",
        className
      )}
    >
      <Icon size={size} />
    </motion.div>
  );
}
