"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY_EMAIL } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions/send-email";

const contactFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres."),
  email: z.string().email("E-mail corporativo inválido."),
  company: z.string().min(2, "O nome da empresa é obrigatório."),
  project: z.string().min(10, "Por favor, detalhe um pouco mais o seu projeto."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface CtaProps {
  className?: string;
}

export function Cta({ className }: CtaProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    setIsSuccess(false);

    const result = await sendEmail(data);

    if (result?.success) {
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setSubmitError(result?.error || "Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section id="contact" className={cn("py-[120px] px-6 bg-card border-y border-border", className)}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-muted-foreground mb-12 text-sm md:text-base leading-relaxed max-w-md">
            Agende uma conversa técnica com nossos especialistas e receba um diagnóstico gratuito da sua infraestrutura atual.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-sm text-foreground tracking-wide">
                {COMPANY_EMAIL || "contato@lineardevs.com"}
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-sm text-foreground tracking-wide">
                (92) 99420-9172
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Right Column (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Input 
                  {...register("name")}
                  type="text" 
                  placeholder="Nome completo" 
                  className={cn("h-12 bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/70 rounded-md px-4 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all", errors.name && "border-red-500 focus-visible:ring-red-500")} 
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-1">
                <Input 
                  {...register("email")}
                  type="email" 
                  placeholder="E-mail corporativo" 
                  className={cn("h-12 bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/70 rounded-md px-4 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all", errors.email && "border-red-500 focus-visible:ring-red-500")} 
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>
            
            <div className="space-y-1">
              <Input 
                {...register("company")}
                type="text" 
                placeholder="Empresa" 
                className={cn("h-12 bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/70 rounded-md px-4 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all", errors.company && "border-red-500 focus-visible:ring-red-500")} 
              />
              {errors.company && <p className="text-xs text-red-500">{errors.company.message}</p>}
            </div>
            
            <div className="space-y-1">
              <Textarea 
                {...register("project")}
                placeholder="Fale sobre seu projeto" 
                className={cn("min-h-[150px] bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/70 rounded-md p-4 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary resize-none transition-all", errors.project && "border-red-500 focus-visible:ring-red-500")} 
              />
              {errors.project && <p className="text-xs text-red-500">{errors.project.message}</p>}
            </div>

            {submitError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md">
                <p className="text-sm text-red-500">{submitError}</p>
              </div>
            )}
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-12 rounded-sm bg-primary text-white font-medium hover:bg-primary/90 transition-colors mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : isSuccess ? (
                "Orçamento Enviado!"
              ) : (
                "Enviar Orçamento"
              )}
            </Button>
            {isSuccess && (
              <p className="text-sm text-green-500 text-center mt-2">
                Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!
              </p>
            )}
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
