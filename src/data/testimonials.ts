export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "ricardo-santos",
    quote: "A DeployWise não é apenas uma softhouse, eles são consultores de negócio que sabem codar. O impacto no nosso faturamento foi imediato.",
    author: "Ricardo Santos",
    role: "CEO na TechAlpha",
  },
  {
    id: "mariana-lima",
    quote: "Entregaram em 3 meses o que outras agências não entregaram em um ano. A qualidade do código é impecável.",
    author: "Mariana Lima",
    role: "Diretora de Produto na LogExpress",
  },
  {
    id: "andre-costa",
    quote: "Raramente vejo um time tão comprometido com a performance. Nosso site agora carrega em menos de um segundo.",
    author: "André Costa",
    role: "CTO na HealthSync",
  },
];
