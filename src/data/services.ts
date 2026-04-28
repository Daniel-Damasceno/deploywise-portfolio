import { Monitor, Cpu, Megaphone, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  isPopular?: boolean;
}

export const services: Service[] = [
  {
    id: "sites-institucionais",
    tag: "#WEB_DEVELOPMENT",
    title: "Sites Institucionais",
    description: "Landing pages de alta conversão e portais corporativos com SEO agressivo e design premium.",
    features: ["UI/UX Exclusivo", "Performance Grade A"],
    icon: Monitor,
  },
  {
    id: "sistemas-customizados",
    tag: "#SOFTWARE_ENGINEERING",
    title: "Sistemas Customizados",
    description: "Dashboards, CRMs e plataformas SaaS escaláveis, integradas com suas APIs e fluxos de negócio.",
    features: ["Infraestrutura Cloud", "Segurança de Dados"],
    icon: Cpu,
    isPopular: true,
  },
  {
    id: "social-media-ads",
    tag: "#DIGITAL_STRATEGY",
    title: "Social Media & Ads",
    description: "Gestão de presença digital focada em transformar seguidores em clientes através de dados.",
    features: ["Copywriting Persuasivo", "Campanhas de Tráfego"],
    icon: Megaphone,
  },
];
