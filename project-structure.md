# Skill: Project Structure
 
## Visão Geral
 
Este é um projeto de Landing Page comercial de uma softhouse, construído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** e **Vitest**.
 
---
 
## Estrutura de Pastas
 
```
deploywise-portfolio/
├── public/                        # Assets estáticos servidos diretamente
│   └── images/                    # Imagens (logos, cases, fotos de equipe)
│
├── src/
│   ├── app/                       # App Router do Next.js — NÃO coloque lógica aqui
│   │   ├── favicon.ico
│   │   ├── globals.css            # Reset e variáveis CSS globais (não adicionar estilos de componente aqui)
│   │   ├── layout.tsx             # Root layout: fonte, metadata global, providers
│   │   └── page.tsx               # Página principal da LP — apenas importa e compõe seções
│   │
│   ├── components/
│   │   ├── ui/                    # Componentes primitivos do shadcn/ui (gerados via CLI, não editar manualmente)
│   │   ├── sections/              # Seções da landing page (uma pasta por seção)
│   │   │   ├── hero/
│   │   │   ├── services/
│   │   │   ├── cases/
│   │   │   ├── about/
│   │   │   ├── testimonials/
│   │   │   └── contact/
│   │   └── layout/                # Componentes estruturais reutilizáveis
│   │       ├── header.tsx
│   │       ├── footer.tsx
│   │       └── section-wrapper.tsx
│   │
│   ├── lib/                       # Utilitários e helpers
│   │   ├── utils.ts               # Utilitários gerais (inclui o `cn()` do shadcn)
│   │   └── constants.ts           # Constantes globais (nome da empresa, links, contatos)
│   │
│   ├── types/                     # Tipos e interfaces TypeScript globais
│   │   └── index.ts
│   │
│   ├── hooks/                     # Custom hooks React
│   │
│   └── data/                      # Dados estáticos da LP (sem chamadas de API)
│       ├── services.ts            # Lista de serviços oferecidos
│       ├── cases.ts               # Cases e projetos do portfólio
│       └── testimonials.ts        # Depoimentos de clientes
│
├── AGENTS.md                      # Instruções para agentes de IA (Antigravity)
├── CLAUDE.md                      # Instruções específicas para Claude
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── next-env.d.ts
├── tsconfig.json
└── package.json
```
 
---
 
## Regras de Localização de Arquivos
 
### `src/app/page.tsx`
- **Apenas** importa e compõe seções. Sem lógica, sem estilos inline, sem dados hardcoded.
- Exemplo correto:
  ```tsx
  import { Hero } from "@/components/sections/hero/hero";
  import { Services } from "@/components/sections/services/services";
  export default function Home() {
    return (
      <main>
        <Hero />
        <Services />
      </main>
    );
  }
  ```
 
### `src/components/sections/`
- Cada seção tem sua própria pasta com o mesmo nome.
- O arquivo principal da seção se chama igual à pasta: `hero/hero.tsx`.
- Subcomponentes internos da seção ficam na mesma pasta: `hero/hero-badge.tsx`, `hero/hero-cta.tsx`.
- Seções **não** importam de outras seções.
### `src/components/ui/`
- Gerado e gerenciado exclusivamente pelo CLI do shadcn: `npx shadcn@latest add <component>`.
- **Nunca editar** arquivos dentro de `ui/` diretamente. Criar um wrapper em `layout/` ou na seção se precisar customizar.
### `src/data/`
- Dados estáticos tipados em TypeScript. Sem `fetch`, sem `async`.
- Cada arquivo exporta um array ou objeto com os dados daquela entidade.
- Tipos dos dados ficam em `src/types/index.ts`.
### `src/lib/constants.ts`
- Centraliza strings reutilizáveis: nome da empresa, email de contato, links de redes sociais, telefone.
- **Nunca** hardcodar essas informações dentro de componentes.
### `public/images/`
- Todas as imagens usadas nos componentes ficam aqui.
- Usar sempre o componente `<Image>` do Next.js (`next/image`), nunca `<img>`.
---
 
## Aliases de Importação
 
O `tsconfig.json` configura `@/` apontando para `src/`. Usar sempre o alias, nunca caminhos relativos longos.
 
```ts
// ✅ Correto
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
 
// ❌ Errado
import { cn } from "../../../lib/utils";
```
 
---
 
## O que NÃO fazer
 
- Não criar pastas fora de `src/` (exceto `public/`).
- Não colocar componentes diretamente em `src/components/` sem subpasta.
- Não misturar dados hardcoded dentro de componentes — dados vão em `src/data/`.
- Não criar arquivos de teste dentro de `src/app/` — testes ficam junto ao componente testado com sufixo `.test.tsx`.
- Não instalar componentes shadcn manualmente — sempre usar o CLI.
