import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LegalSection } from "@/components/sections/legal/legal-section";
import { termsOfUse } from "@/data/legal";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso dos serviços e site da DeployWise.",
  openGraph: {
    title: "Termos de Uso | DeployWise",
    description: "Termos de Uso dos serviços e site da DeployWise.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="w-full overflow-hidden selection:bg-primary selection:text-white">
      <Header />
      <div className="pt-20">
        <LegalSection data={termsOfUse} />
      </div>
      <Footer />
    </main>
  );
}

