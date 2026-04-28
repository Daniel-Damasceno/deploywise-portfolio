export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "tempo-entrega",
    question: "Qual o tempo médio de entrega?",
    answer: "Projetos institucionais levam de 4 a 6 semanas. Sistemas complexos dependem do escopo, mas trabalhamos com ciclos de entrega (sprints) quinzenais.",
  },
  {
    id: "manutencao",
    question: "Vocês trabalham com manutenção?",
    answer: "Sim, oferecemos contratos de SLA com tempos de resposta garantidos e evolução contínua do produto para acompanhar as demandas do seu negócio.",
  },
  {
    id: "suporte",
    question: "Como funciona o suporte pós-lançamento?",
    answer: "Monitoramento 24/7 de uptime, correção de bugs prioritária e relatórios mensais de performance, garantindo que o sistema cresça com estabilidade.",
  },
];
