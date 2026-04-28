"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY_NAME, NAVIGATION_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  className?: string;
}

const AnimatedLogoText = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 20000); // Repete a cada 20 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <span key={animationKey} className="flex items-center">
      {COMPANY_NAME.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
      <motion.span 
        className="text-primary ml-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          delay: COMPANY_NAME.length * 0.1, 
          duration: 1, 
          repeat: Infinity,
          ease: "linear"
        }}
      >
        .
      </motion.span>
    </span>
  );
};

export function Header({ className }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    NAVIGATION_LINKS.forEach((link) => {
      const hash = link.href.split("#")[1];
      if (hash) {
        const section = document.getElementById(hash);
        if (section) observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {NAVIGATION_LINKS.map((link) => {
        const hash = link.href.split("#")[1];
        const isActive = activeSection === `#${hash}`;
        return (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={() => mobile && setIsMobileMenuOpen(false)}
            className={cn(
              "relative py-2 hover:text-foreground transition-colors",
              isActive ? "text-foreground" : "text-muted-foreground",
              mobile ? "text-lg font-semibold py-4 border-b border-border/50" : "text-sm font-medium"
            )}
          >
            {link.name}
            {!mobile && isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
            )}
          </Link>
        );
      })}
    </>
  );

  return (
    <nav aria-label="Menu principal" className={cn("fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md", className)}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="relative w-12 h-12 sm:w-[70px] sm:h-[70px] flex-shrink-0">
            <Image 
              src="/images/logo-deploywise.png" 
              alt="Logo da DeployWise" 
              fill 
              sizes="(max-width: 640px) 48px, 70px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg sm:text-xl font-display font-bold">
            <AnimatedLogoText />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        <div className="flex items-center gap-4">
          <Button 
            asChild
            className="hidden sm:flex h-10 px-6 rounded-full bg-primary text-white hover:bg-primary/90 font-medium"
          >
            <Link href="/#contact">Trabalhe conosco</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu de navegação">
                <Menu className="w-6 h-6" />
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l-border/50 p-0">
              <SheetHeader className="text-left px-6 py-8 border-b border-border/50 mb-4">
                <SheetTitle className="text-2xl font-display font-bold">
                  <AnimatedLogoText />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col px-6">
                <NavLinks mobile />
                <Button 
                  asChild
                  className="mt-8 h-12 rounded-full bg-primary text-white hover:bg-primary/90 font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/#contact">Solicitar Orçamento</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

