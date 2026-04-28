import { cn } from "@/lib/utils";

interface LegalSectionProps {
  className?: string;
  data: {
    title: string;
    lastUpdated: string;
    content: {
      heading: string;
      text: string;
    }[];
  };
}

export function LegalSection({ className, data }: LegalSectionProps) {
  return (
    <section className={cn("relative w-full py-24 md:py-32", className)}>
      <div className="max-w-[800px] mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {data.title}
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {data.lastUpdated}
          </p>
        </div>

        <div className="space-y-8">
          {data.content.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
