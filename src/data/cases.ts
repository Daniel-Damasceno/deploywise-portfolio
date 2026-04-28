export interface CaseStudy {
  id: string;
  metric: string;
  title: string;
  description: string;
}

export const cases: CaseStudy[] = [
  {
    id: "fintech-alpha",
    metric: "+340% Conversão",
    title: "Plataforma Fintech Alpha",
    description: "Reestruturação completa de interface e performance.",
  },
  {
    id: "logistica-express",
    metric: "-80% Latência",
    title: "SaaS de Logística Express",
    description: "Otimização de fluxos e integração de APIs em tempo real.",
  },
  {
    id: "healthtech-app",
    metric: "4.9 App Store Rating",
    title: "App Mobile HealthTech",
    description: "Aplicativo nativo focado em experiência de usuário impecável.",
  },
  {
    id: "core-banking",
    metric: "0 Downtime",
    title: "Backend Core Banking",
    description: "Migração de arquitetura legada para microserviços.",
  },
];
