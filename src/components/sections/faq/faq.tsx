"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqItems } from "@/data/faq";

interface FaqProps {
  className?: string;
}

export function Faq({ className }: FaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className={cn("py-[120px] px-6 max-w-[800px] mx-auto border-t border-border", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-display font-bold mb-12 text-center"
        id="faq-heading"
      >
        Perguntas Frequentes
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
        className="space-y-2"
      >
        {faqItems.map((faq, i) => (
          <motion.div 
            key={faq.id} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="border border-border rounded-sm bg-card overflow-hidden"
          >
            <button 
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
              aria-controls={`faq-answer-${faq.id}`}
              className="w-full flex items-center justify-between text-left font-bold p-6 hover:bg-muted transition-colors"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openFaq === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div id={`faq-answer-${faq.id}`} role="region" aria-labelledby={`faq-question-${faq.id}`} className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
