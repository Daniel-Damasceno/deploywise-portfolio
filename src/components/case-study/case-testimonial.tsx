import { cn } from "@/lib/utils";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  credentials?: string;
}

interface CaseTestimonialProps {
  testimonial?: Testimonial;
  className?: string;
}

export function CaseTestimonial({ testimonial, className }: CaseTestimonialProps) {
  if (!testimonial) {
    return null;
  }

  return (
    <div className={cn("py-16 md:py-24 border-y border-border/30 bg-card/30", className)}>
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <blockquote className="text-xl md:text-3xl font-display font-medium text-foreground leading-snug mb-8">
          &quot;{testimonial.quote}&quot;
        </blockquote>
        <div>
          <div className="font-bold text-lg">{testimonial.author}</div>
          <div className="text-muted-foreground text-sm">{testimonial.role}</div>
          {testimonial.credentials && (
            <div className="text-primary text-xs font-mono mt-1 uppercase tracking-wider">
              {testimonial.credentials}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
