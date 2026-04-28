import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero/hero";
import { SocialProof } from "@/components/sections/social-proof/social-proof";
import { ProblemStatement } from "@/components/sections/problem-statement/problem-statement";
import { Services } from "@/components/sections/services/services";
import { Process } from "@/components/sections/process/process";
import { Portfolio } from "@/components/sections/portfolio/portfolio";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { Faq } from "@/components/sections/faq/faq";
import { Cta } from "@/components/sections/cta/cta";

export default function Home() {
  return (
    <main className="w-full overflow-hidden selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <SocialProof />
      <ProblemStatement />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
