"use client";

import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className={cn("py-[120px] px-6 max-w-[1200px] mx-auto", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-display font-bold mb-16 text-center"
        id="testimonials-heading"
      >
        O que dizem nossos parceiros
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="border border-border p-8 rounded-sm bg-card hover:border-primary/30 transition-colors flex flex-col"
          >
            <p className="italic text-foreground mb-8 leading-relaxed">"{testimonial.quote}"</p>
            <div className="mt-auto">
              <p className="font-bold font-display text-lg">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground font-mono mt-1">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
