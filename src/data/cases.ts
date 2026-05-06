export interface CaseStudy {
  id: string;
  metric: string;
  title: string;
  description: string;
  /** Path relative to /public — used as a browser-mockup preview in the portfolio card */
  preview?: string;
  href?: string;
  comingSoon?: boolean;
}

export const cases: CaseStudy[] = [
  {
    id: "dr-jose-carlos",
    metric: "40+ Anos de Experiência",
    title: "Dr. José Carlos Paes Leme",
    description: "Presença digital construída do zero para um cirurgião vascular de referência.",
    preview: "/images/cases/dr-jose-carlos-preview.png",
    href: "/portfolio/dr-jose-carlos",
  },
  {
    id: "automacao-fiscal",
    metric: "Em Validação",
    title: "Projeto de Automação Fiscal",
    description: "Sistema interno para automatizar rotinas fiscais e reduzir carga operacional.",
    comingSoon: true,
  },
];
