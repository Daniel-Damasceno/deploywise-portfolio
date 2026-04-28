# Component Pattern — DeployWise

Padrões de criação de componentes no projeto. Stack: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.

## Regras Gerais

- **Server Component por padrão.** Só adicionar `"use client"` quando houver: hooks (`useState`, `useEffect`, etc), event handlers (`onClick`, `onChange`), ou APIs exclusivas do browser.
- **Props tipadas com `interface`**, nunca `type` para props de componente.
- **Estilização via `cn()`** do shadcn (`@/lib/utils`). Sem `style={{}}` inline, sem classes condicionais manuais.
- **Named export sempre.** Nunca `export default` em componentes de seção ou layout.

## Estrutura de um Componente

```tsx
// src/components/sections/hero/hero.tsx

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

## Quando usar "use client"

```tsx
// src/components/sections/contact/contact-form.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  return (
    <form className={cn("flex flex-col gap-4", className)}>
      {/* campos */}
    </form>
  );
}
```

## Variantes de Estilo com cn()

Usar `cn()` para condicionais de classe, nunca template literals ou ternários soltos.

```tsx
// ✅ Correto
<div className={cn(
  "rounded-lg border p-4",
  isActive && "border-primary bg-primary/10",
  className
)} />

// ❌ Errado
<div className={`rounded-lg border p-4 ${isActive ? "border-primary" : ""}`} />
```

## Props: interface + className sempre opcional

Todo componente que renderiza um elemento HTML raiz deve aceitar `className?: string` para permitir customização pelo componente pai.

```tsx
// ✅ Correto
interface CardProps {
  title: string;
  description: string;
  className?: string;
}

// ❌ Errado — sem className, sem tipagem explícita
const Card = ({ title, description }) => { ... }
```

## Nomenclatura

- Arquivo: `kebab-case.tsx` → `hero-badge.tsx`
- Componente: `PascalCase` → `HeroBadge`
- Interface de props: nome do componente + `Props` → `HeroBadgeProps`
- Nunca abreviar: `ServiceCard`, não `SvcCard` ou `SC`

## O que NÃO fazer

- Não usar `export default` em componentes — dificulta refatoração e tree-shaking.
- Não criar componentes com mais de uma responsabilidade — dividir em subcomponentes.
- Não estilizar com `style={{}}` inline — sempre Tailwind via `cn()`.
- Não adicionar `"use client"` por precaução — só quando realmente necessário.
- Não importar componentes de `ui/` diretamente nas seções sem necessidade — compor via subcomponente quando precisar customizar.
