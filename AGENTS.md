<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from
your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing
any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-structure -->
# Project Structure

Landing page comercial de uma softhouse. Stack: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Vitest.

## Estrutura de Pastas

```
src/
├── app/                    # App Router — sem lógica, sem dados hardcoded
│   ├── globals.css         # Apenas reset e variáveis CSS globais
│   ├── layout.tsx          # Root layout: fonte, metadata, providers
│   └── page.tsx            # Apenas importa e compõe seções
├── components/
│   ├── ui/                 # shadcn/ui — NUNCA editar manualmente, usar CLI
│   ├── sections/           # Uma pasta por seção (ex: hero/hero.tsx)
│   └── layout/             # header.tsx, footer.tsx, section-wrapper.tsx
├── lib/
│   ├── utils.ts            # cn() e utilitários gerais
│   └── constants.ts        # Nome da empresa, email, links — nunca hardcodar nos componentes
├── types/
│   └── index.ts            # Tipos e interfaces globais
├── hooks/                  # Custom hooks React
└── data/                   # Dados estáticos tipados — sem fetch, sem async
    ├── services.ts
    ├── cases.ts
    └── testimonials.ts
```

## Regras

- `page.tsx` só importa seções, nada mais.
- Cada seção tem sua pasta: `sections/hero/hero.tsx`. Subcomponentes internos ficam na mesma pasta.
- Seções não importam de outras seções.
- `ui/` é gerenciado exclusivamente pelo CLI: `npx shadcn@latest add <component>`.
- Dados hardcoded → `src/data/`. Strings globais → `src/lib/constants.ts`.
- Imagens em `public/images/`, sempre via `<Image>` do Next.js, nunca `<img>`.
- Testes ficam junto ao componente com sufixo `.test.tsx`.
- Sempre usar alias `@/` — nunca caminhos relativos longos.
<!-- END:project-structure -->

<!-- BEGIN:brand-voice -->
# Brand Voice — DeployWise

Softhouse brasileira que entrega desenvolvimento web, sistemas/plataformas, design UI/UX e social media.
Público: empresas B2B, empreendedores, startups e pequenos negócios locais.
Idioma da LP: Português (BR).

## Tom de Voz

**Confiável e profissional** — sem ser frio ou distante.
A DeployWise fala como um parceiro técnico experiente: direto, claro, sem jargão desnecessário.
Transmite segurança sem arrogância. Resolve problemas reais sem exagerar nas promessas.

## Princípios de Escrita

- **Direto ao ponto.** Frases curtas. Sem enrolação.
- **Foco no resultado do cliente**, não na tecnologia. Ex: "seu negócio no ar em semanas" > "usamos Next.js e CI/CD".
- **Português BR natural.** Sem traduções literais do inglês. Sem "alavancar", "sinergia" ou "entregar valor".
- **Voz ativa sempre.** Ex: "desenvolvemos" > "é desenvolvido por nós".
- **Nunca usar** superlativo vazio: "melhor", "líder", "número 1", "revolucionário".

## Públicos e Como Falar com Cada Um

- **Empresas B2B:** foco em confiabilidade, prazo e suporte. Linguagem formal mas acessível.
- **Empreendedores/Startups:** foco em velocidade, custo-benefício e escalabilidade. Tom mais dinâmico.
- **Pequenos negócios locais:** foco em presença digital e simplicidade. Evitar termos técnicos.

## Serviços e Como Descrever

- **Desenvolvimento Web:** sites e aplicações rápidas, modernas e que convertem.
- **Sistemas/Plataformas:** soluções sob medida para automatizar e escalar operações.
- **Design UI/UX:** interfaces que o usuário entende e gosta de usar.
- **Social Media:** presença digital consistente que gera autoridade e atrai clientes.

## Exemplos de Tom

| ❌ Evitar | ✅ Preferir |
|---|---|
| "Somos especialistas em soluções inovadoras" | "Construímos o que o seu negócio precisa para crescer online" |
| "Utilizamos tecnologias de ponta" | "Código limpo, entrega rápida, sem surpresas" |
| "Alavanque seus resultados" | "Mais clientes, mais vendas, mais presença digital" |
| "Nosso time altamente capacitado" | "Um time que entrega o que promete" |

## CTA (Chamadas para Ação)

Sempre específico e com baixo atrito. Exemplos:
- "Fale com a gente" (não "Entre em contato conosco")
- "Solicite um orçamento" (não "Clique aqui")
- "Veja nossos projetos" (não "Conheça nosso portfólio completo")
<!-- END:brand-voice -->

<!-- BEGIN:component-pattern -->
# Component Pattern — DeployWise

## Regras Gerais

- **Server Component por padrão.** Só adicionar `"use client"` quando houver hooks, event handlers ou APIs do browser.
- **Props tipadas com `interface`**, nunca `type` para props de componente.
- **Estilização via `cn()`** (`@/lib/utils`). Sem `style={{}}` inline.
- **Named export sempre.** Nunca `export default` em componentes.

## Estrutura Base

```tsx
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative w-full py-24", className)}>
      {/* conteúdo */}
    </section>
  );
}
```

## Variantes com cn()

```tsx
// ✅ Correto
<div className={cn("rounded-lg border p-4", isActive && "border-primary bg-primary/10", className)} />

// ❌ Errado
<div className={`rounded-lg border p-4 ${isActive ? "border-primary" : ""}`} />
```

## Nomenclatura

- Arquivo: `kebab-case.tsx` → `hero-badge.tsx`
- Componente: `PascalCase` → `HeroBadge`
- Interface: nome do componente + `Props` → `HeroBadgeProps`

## Proibido

- `export default` em componentes.
- `style={{}}` inline — sempre Tailwind via `cn()`.
- `"use client"` por precaução — só quando necessário.
- Componente com mais de uma responsabilidade — dividir em subcomponentes.
<!-- END:component-pattern -->