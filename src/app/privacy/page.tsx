import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LegalSection } from "@/components/sections/legal/legal-section";
import { privacyPolicy } from "@/data/legal";

export const metadata = {
  title: "Política de Privacidade | DeployWise",
  description: "Política de Privacidade da DeployWise. Saiba como cuidamos dos seus dados.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full overflow-hidden selection:bg-primary selection:text-white">
      <Header />
      <div className="pt-20">
        <LegalSection data={privacyPolicy} />
      </div>
      <Footer />
    </main>
  );
}

