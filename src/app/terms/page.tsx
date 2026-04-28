import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LegalSection } from "@/components/sections/legal/legal-section";
import { termsOfUse } from "@/data/legal";

export const metadata = {
  title: "Termos de Uso | DeployWise",
  description: "Termos de Uso dos serviços e site da DeployWise.",
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

