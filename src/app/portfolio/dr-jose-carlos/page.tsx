import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseSection } from "@/components/case-study/case-section";
import { CaseStatsGrid } from "@/components/case-study/case-stats-grid";
import { CaseResultsGrid } from "@/components/case-study/case-results-grid";
import { CaseTechStack } from "@/components/case-study/case-tech-stack";
import { CaseTestimonial } from "@/components/case-study/case-testimonial";
import { CaseGallery } from "@/components/case-study/case-gallery";
import { CaseCTA } from "@/components/case-study/case-cta";

export const metadata: Metadata = {
  title: "Dr. José Carlos Paes Leme — Case | DeployWise",
  description: "Como a DeployWise estruturou a presença digital completa de um cirurgião vascular de referência em Manaus: site Next.js, Google Meu Negócio, domínio próprio e gestão de conteúdo no Instagram.",
  openGraph: {
    title: "Dr. José Carlos Paes Leme — Case DeployWise",
    description: "Presença digital construída do zero para um cirurgião vascular com 40+ anos de mercado em Manaus.",
    type: "article",
  },
};

export default function CaseStudyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case DeployWise — Presença digital para Dr. José Carlos Paes Leme",
    "datePublished": "2025-10-01",
    "author": { "@type": "Organization", "name": "DeployWise" },
    "about": {
      "@type": "MedicalBusiness",
      "name": "Clínica Dr. José Carlos Paes Leme",
      "url": "https://www.drjosecarlospaesleme.com.br/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Millennium Shopping, Torre Medical, 4º andar, sala 406",
        "addressLocality": "Manaus",
        "addressRegion": "AM",
        "addressCountry": "BR"
      }
    }
  };

  return (
    <main className="w-full overflow-hidden selection:bg-primary selection:text-white pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <article>
        <CaseHero 
          tags={["SAÚDE", "LANDING PAGE", "SEO LOCAL", "GESTÃO DE CONTEÚDO"]}
          title="Presença digital construída do zero para um cirurgião vascular com 40+ anos de mercado em Manaus."
          subtitle="Do domínio ao Google Meu Negócio, do site institucional à edição de vídeos para o Instagram — a DeployWise assumiu toda a operação digital da clínica do Dr. José Carlos Paes Leme e transformou autoridade clínica em descoberta online."
          primaryCta={{
            label: "Visitar o site",
            href: "https://www.drjosecarlospaesleme.com.br/",
            external: true
          }}
          secondaryCta={{
            label: "Quero um trabalho assim",
            href: "/#contact"
          }}
        />

        <div className="max-w-[1000px] mx-auto px-6 py-12">
          <CaseStatsGrid 
            stats={[
              { label: "anos de experiência clínica posicionados online", value: "40+" },
              { label: "pacientes atendidos como prova social", value: "5.000+" },
              { label: "presença digital construída do zero", value: "0 → 1" },
              { label: "deploy em produção", value: "Out/2025" },
            ]}
          />
        </div>

        <CaseSection number="01" title="Visão Geral">
          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">O cliente.</h3>
          <p>
            O Dr. José Carlos Paes Leme é cirurgião vascular e angiologista em Manaus, com mais de quatro décadas de atuação e referência regional em tratamento de varizes e procedimentos a laser. Atende em consultório particular no Millennium Shopping, Torre Medical, e oferece cinco linhas de tratamento: cirurgias ambulatoriais, escleroterapia com glicose, laser transdérmico XLASE, escleroterapia com espuma e macroescleroterapia com espuma.
          </p>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">O cenário inicial.</h3>
          <p>
            Apesar da reputação consolidada no boca a boca clínico de Manaus, o Dr. José Carlos não tinha presença digital ativa: nenhum site, sem cadastro no Google Meu Negócio, sem domínio próprio. Pacientes que buscavam por &quot;cirurgião vascular Manaus&quot; ou &quot;tratamento de varizes Manaus&quot; não o encontravam — a autoridade existia offline, mas era invisível para quem pesquisa antes de marcar uma consulta.
          </p>
        </CaseSection>

        <CaseSection number="02" title="O Desafio">
          <p className="text-lg text-foreground font-medium mb-6">
            Construir, em zero base digital, uma presença online à altura de um especialista com 40+ anos de carreira. Três frentes interligadas:
          </p>
          
          <ol className="list-decimal pl-5 space-y-4 mb-6">
            <li><strong className="text-foreground">Descoberta.</strong> Garantir que pacientes em Manaus encontrem a clínica em pesquisas locais e no Google Maps.</li>
            <li><strong className="text-foreground">Autoridade.</strong> Traduzir credenciais clínicas (CRM/AM 2152, RQE 668, formação UFAM, membro SBACV) em uma narrativa visual confiável e profissional.</li>
            <li><strong className="text-foreground">Conversão.</strong> Tirar o paciente do clique para o agendamento via WhatsApp com o menor atrito possível.</li>
          </ol>
          
          <p>
            E tudo isso com um cliente que, por perfil, prefere se concentrar 100% na clínica — ou seja, a operação digital precisava ser entregue chave na mão, do registro do domínio à publicação do conteúdo no Instagram.
          </p>
        </CaseSection>

        <CaseSection number="03" title="A Solução">
          <p className="text-lg text-foreground font-medium mb-8">
            A DeployWise assumiu o ciclo completo, do branding técnico à gestão de conteúdo recorrente.
          </p>
          
          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">3.1 — Infraestrutura de presença</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Registro de domínio próprio (<code className="text-primary font-mono text-sm bg-primary/10 px-1 rounded">drjosecarlospaesleme.com.br</code>) — credibilidade institucional e aderência ao nome de marca do médico.</li>
            <li>Configuração de e-mail profissional vinculado ao domínio.</li>
            <li>Cadastro no Google Meu Negócio com endereço, horários, especialidades e fotos da clínica, vinculado ao site para boost de SEO local em Manaus.</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">3.2 — Site institucional</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Landing page institucional com arquitetura clara: Início, Sobre, Serviços, Resultados, Clínica, Contato.</li>
            <li>Hierarquia de autoridade no topo: 40+ anos de experiência, 5.000+ procedimentos, registros profissionais (CRM/AM, RQE).</li>
            <li>Catálogo de tratamentos com explicação técnica e acessível das cinco modalidades, alinhada ao vocabulário que o paciente real busca.</li>
            <li>Galeria de resultados (&quot;Casos Clínicos&quot;) respeitando ética médica.</li>
            <li>Tour visual da clínica (recepção, consultório, sala de procedimentos) para reduzir ansiedade pré-consulta.</li>
            <li>FAQ estratégico atacando dúvidas que o paciente digita no Google (&quot;os procedimentos doem?&quot;, &quot;quanto tempo leva a recuperação?&quot;, &quot;o tratamento é definitivo?&quot;) — também serve como reforço de SEO long-tail.</li>
            <li>CTA dominante para WhatsApp (Agendar Consulta), reduzindo o atrito do agendamento ao mínimo.</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">3.3 — Conteúdo recorrente (Instagram)</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gestão completa do perfil: planejamento editorial, criação de conteúdo, edição de vídeos e publicação.</li>
            <li>Foco em educar o público sobre saúde vascular e reforçar a autoridade clínica do Dr. José Carlos no feed e em reels.</li>
          </ul>
        </CaseSection>

        <CaseSection number="04" title="Decisões Técnicas">
          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">Por que Next.js + Tailwind + TypeScript</h3>
          <p className="mb-6">
            A stack foi escolhida pelo melhor custo-benefício entre performance (renderização otimizada e Lighthouse alto, fundamental para SEO local de saúde, onde o Google penaliza páginas lentas), velocidade de entrega (componentização e tipagem forte reduzem retrabalho) e operação enxuta via Vercel — o pipeline de deploy contínuo deixa atualizações de conteúdo (novos procedimentos, fotos, horários) no ar em minutos, sem dor de operação.
          </p>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">Por que landing page e não CMS pesado</h3>
          <p className="mb-6">
            O site é institucional, com baixa frequência de mudança estrutural. Um CMS introduziria complexidade desnecessária e custo recorrente. As atualizações pontuais entram via deploy controlado pela DeployWise como parte do suporte contínuo.
          </p>

          <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-4">SEO local first</h3>
          <p>
            Toda a estrutura de metadados, schema e copy foi pensada para os termos que o paciente de Manaus realmente pesquisa: &quot;cirurgião vascular Manaus&quot;, &quot;tratamento de varizes Manaus&quot;, &quot;escleroterapia Manaus&quot;, combinada à integração com Google Meu Negócio para aparecer nos resultados de mapa.
          </p>
        </CaseSection>

        <CaseSection number="05" title="Stack & Infra">
          <CaseTechStack 
            stack={[
              { layer: "Framework", technology: "Next.js" },
              { layer: "Linguagem", technology: "TypeScript" },
              { layer: "Estilo", technology: "Tailwind CSS" },
              { layer: "Hospedagem & CI/CD", technology: "Vercel" },
              { layer: "Domínio & DNS", technology: "Registro.br + Vercel DNS" },
              { layer: "Presença local", technology: "Google Meu Negócio integrado" },
              { layer: "Comunicação", technology: "E-mail profissional vinculado ao domínio" },
            ]}
          />
        </CaseSection>

        <CaseSection number="06" title="Operação Contínua">
          <p className="text-lg text-foreground font-medium mb-6">
            A entrega não terminou no deploy. A DeployWise mantém:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Suporte técnico ao site (correções, ajustes, atualizações de conteúdo).</li>
            <li>Gestão do Google Meu Negócio (horários, fotos, respostas).</li>
            <li>Gestão do Instagram da clínica: pauta de conteúdo, criação de posts, edição de vídeos e publicação.</li>
          </ul>
          
          <p className="font-medium text-foreground">
            O modelo é o de parceiro digital end-to-end: o Dr. José Carlos foca na medicina; a operação digital roda em segundo plano.
          </p>
        </CaseSection>

        <CaseSection number="07" title="Resultados">
          <CaseResultsGrid 
            results={[
              {
                kind: "lighthouse",
                title: "Lighthouse / PageSpeed Insights",
                measuredAt: "2026-05-06",
                sourceUrl: "https://pagespeed.web.dev/report?url=https%3A%2F%2Fwww.drjosecarlospaesleme.com.br%2F",
                mobile: {
                  performance: 98,
                  accessibility: 100,
                  bestPractices: 100,
                  seo: 100,
                },
                desktop: {
                  performance: 100,
                  accessibility: 96,
                  bestPractices: 100,
                  seo: 100,
                },
              },
              { kind: "coming-soon", title: "--", label: "Tempo até indexação no Google" },
              { kind: "coming-soon", title: "--", label: "Posicionamento para 'cirurgião vascular Manaus'" },
              { kind: "coming-soon", title: "--", label: "Tráfego e contatos via Google Meu Negócio" },
              { kind: "coming-soon", title: "--", label: "Crescimento do Instagram desde a gestão DeployWise" },
            ]}
          />
        </CaseSection>

        {/* Depoimento omitido por enquanto pois não existe depoimento real, a instrução diz "renderizar nada (não placeholder, simplesmente omitir a seção)" */}
        <CaseTestimonial />

        {/* Galeria omitida por enquanto pois não há imagens reais, a instrução diz "Enquanto não houver imagens, esconder a seção (não renderizar empty state)" */}
        <CaseGallery 
          /* 
          Imagens esperadas no futuro:
          1. Mockup hero do site (desktop)
          2. Mockup mobile lado a lado com desktop
          3. Print do Google Meu Negócio na busca
          4. Print do feed do Instagram
          5. Print do Lighthouse
          6. Foto da clínica
          */
        />

        <CaseCTA 
          text="Quer um resultado parecido? A DeployWise constrói presença digital completa para clínicas, consultórios e profissionais que querem traduzir autoridade offline em descoberta e agendamento online."
          primaryAction={{ label: "Agendar uma conversa", href: "/#contact" }}
          secondaryAction={{ label: "Ver outros cases", href: "/#portfolio" }}
        />
      </article>

      <Footer />
    </main>
  );
}
