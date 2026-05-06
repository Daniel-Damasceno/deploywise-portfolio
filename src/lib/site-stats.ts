export interface HeroStat {
  id: string;
  value: number | [number, number];
  suffix?: string;
  label: string;
  caption?: string;
  separator?: string;
}

const OPERATION_START = new Date("2025-10-01");

function monthsSince(start: Date, now = new Date()): number {
  return (
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  );
}

export const HERO_STATS: HeroStat[] = [
  {
    id: "lighthouse",
    value: [100, 98],
    separator: "/",
    label: "Lighthouse (Desktop/Mobile)",
    caption: "drjosecarlospaesleme.com.br",
  },
  {
    id: "uptime",
    value: Math.floor(monthsSince(OPERATION_START)),
    suffix: "+",
    label: "Meses de Operação",
    caption: "desde Out/2025",
  },
];
