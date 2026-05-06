"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cases } from "@/data/cases";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RadialGlow } from "@/components/visuals/background-elements";
import { ArrowUpRight } from "lucide-react";

interface PortfolioProps {
  className?: string;
}

/** Fake code lines shown in the "coming soon" terminal animation */
const CODE_LINES = [
  "$ git clone repo/automacao-fiscal",
  "$ npm install",
  "✓ Dependências instaladas",
  "$ npx prisma migrate dev",
  "✓ Schema sincronizado",
  "$ npm run build",
  "▲ Next.js 16.2 (Turbopack)",
  "✓ Build concluído em 4.2s",
  "$ npm run start",
  "> Servidor em http://localhost:3000",
];

/** Animated terminal for coming-soon cards */
function TerminalPreview() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#0a0a0f]">
      {/* Scanlines overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
        }}
      />

      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* Grid dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-primary/20 blur-2xl" />

      {/* Code lines */}
      <div className="relative z-20 flex flex-col gap-1.5 p-5 pt-6 font-mono text-[11px]">
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.3 }}
            className={cn(
              "leading-relaxed",
              line.startsWith("✓")
                ? "text-green-400/80"
                : line.startsWith("$")
                  ? "text-primary/70"
                  : line.startsWith("▲") || line.startsWith(">")
                    ? "text-purple-400/70"
                    : "text-muted-foreground/50"
            )}
          >
            {line}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.5, 1] }}
          className="inline-block w-2 h-3.5 bg-primary/60 mt-0.5"
        />
      </div>
    </div>
  );
}

/** Browser chrome + screenshot preview for real case cards */
function BrowserPreview({
  src,
  alt,
  hovered,
}: {
  src: string;
  alt: string;
  hovered: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#111118]">
      {/* Browser chrome bar */}
      <div className="relative z-20 flex items-center gap-2 px-4 py-2.5 bg-[#1a1a24] border-b border-white/[0.06] shrink-0">
        {/* Traffic lights */}
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />

        {/* URL bar */}
        <div className="flex-1 mx-3 px-3 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-muted-foreground/50 truncate">
          drjosecarlospaesleme.com.br
        </div>

        {/* Reload icon */}
        <svg
          className="w-3 h-3 text-muted-foreground/30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M1 4v6h6M23 20v-6h-6" />
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
        </svg>
      </div>

      {/* Website screenshot */}
      <div className="relative flex-1 overflow-hidden">
        <motion.div
          animate={{ y: hovered ? "-8%" : "0%" }}
          transition={{ duration: 8, ease: "linear", repeat: hovered ? Infinity : 0 }}
          className="absolute inset-x-0 top-0 h-[200%]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );
}

export function Portfolio({ className }: PortfolioProps) {
  return (
    <SectionWrapper
      id="portfolio"
      ariaLabelledBy="portfolio-heading"
      className={cn("bg-card/20 border-y border-border/50", className)}
      withGrid
    >
      <RadialGlow
        color="secondary"
        size="lg"
        className="-top-[10%] -left-[10%] opacity-20"
      />

      <div className="mb-16">
        <p className="text-xs font-mono text-primary mb-4 uppercase tracking-[0.2em] font-bold">
          CASES DE SUCESSO
        </p>
        <h2
          id="portfolio-heading"
          className="text-3xl md:text-5xl font-display font-bold"
        >
          Resultados que{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            falam.
          </span>
        </h2>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {cases.map((caseStudy) => (
          <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

/** Individual portfolio card — handles hover state internally */
function CaseCard({ caseStudy }: { caseStudy: (typeof cases)[number] }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      style={{ perspective: 800 }}
      onMouseMove={caseStudy.comingSoon ? undefined : handleMouseMove}
      onMouseEnter={caseStudy.comingSoon ? undefined : () => setIsHovered(true)}
      onMouseLeave={caseStudy.comingSoon ? undefined : (e) => { handleMouseLeave(); setIsHovered(false); void e; }}
    >
      <motion.div
        style={
          caseStudy.comingSoon
            ? {}
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className={cn(
          "group relative overflow-hidden rounded-2xl border bg-black/20 backdrop-blur-sm shadow-xl transition-all duration-500 flex flex-col",
          caseStudy.comingSoon
            ? "border-border/30 opacity-80"
            : "border-primary/10 cursor-pointer hover:border-primary/30 hover:shadow-primary/10 hover:shadow-2xl"
        )}
      >
        {/* ── Preview area ── */}
        <div className="relative h-52 sm:h-60 overflow-hidden">
          {caseStudy.preview ? (
            <BrowserPreview
              src={caseStudy.preview}
              alt={`Preview do site ${caseStudy.title}`}
              hovered={isHovered}
            />
          ) : (
            <TerminalPreview />
          )}

          {/* Bottom fade into card body */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/90 to-transparent z-30" />
        </div>

        {/* ── Card body ── */}
        <div className="relative flex flex-col flex-1 p-6 sm:p-8 bg-gradient-to-b from-black/60 to-black/40">
          {/* Metric badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono mb-4 uppercase tracking-wider backdrop-blur-md self-start",
              caseStudy.comingSoon
                ? "bg-muted/50 border-border text-muted-foreground"
                : "bg-primary/10 border-primary/20 text-primary"
            )}
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                caseStudy.comingSoon
                  ? "bg-muted-foreground"
                  : "bg-primary animate-pulse"
              )}
            />
            {caseStudy.metric}
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {caseStudy.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
            {caseStudy.description}
          </p>

          {/* Footer */}
          {!caseStudy.comingSoon && caseStudy.href ? (
            <Link
              href={caseStudy.href}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors group/link"
              aria-label={`Ver case completo: ${caseStudy.title}`}
            >
              Ver case completo
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          ) : (
            <span className="text-xs font-mono text-muted-foreground/50">
              Em breve
            </span>
          )}
        </div>

        {/* Glow on hover */}
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </motion.div>
    </motion.div>
  );
}
