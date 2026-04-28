export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "briefing",
    title: "Briefing",
    description: "Entendemos seu negócio e metas reais.",
  },
  {
    id: "prototipo",
    title: "Protótipo",
    description: "Arquitetura visual e funcional detalhada.",
  },
  {
    id: "dev-qa",
    title: "Dev & QA",
    description: "Engenharia robusta com testes rigorosos.",
  },
  {
    id: "lancamento",
    title: "Lançamento",
    description: "Deploy otimizado e acompanhamento pós.",
  },
];
