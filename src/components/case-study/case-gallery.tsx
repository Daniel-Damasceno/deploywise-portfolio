import { cn } from "@/lib/utils";
import Image from "next/image";

interface CaseGalleryProps {
  images?: { src: string; alt: string }[];
  className?: string;
}

export function CaseGallery({ images, className }: CaseGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-16", className)}>
      {images.map((image, i) => (
        <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
          <Image 
            src={image.src} 
            alt={image.alt} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
