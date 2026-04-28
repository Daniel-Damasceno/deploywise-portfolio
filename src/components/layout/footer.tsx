import { cn } from "@/lib/utils";
import { COMPANY_NAME, SOCIAL_LINKS, LEGAL_LINKS } from "@/lib/constants";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("bg-background py-16 px-4 sm:px-6 border-t border-border/50", className)}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
          
          {/* Copyright & Legal */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} {COMPANY_NAME}. <br className="sm:hidden" /> Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-muted-foreground/60">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
}
