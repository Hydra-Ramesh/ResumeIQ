import { FeaturesSection } from "../components/FeaturesSection.jsx";
import { GridBackground } from "../components/GridBackground.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { HowItWorksSection } from "../components/HowItWorksSection.jsx";
import { CompanyStats } from "../components/CompanyStats.jsx";
import { TestimonialsSection } from "../components/TestimonialsSection.jsx";
import { HomeNavbar } from "../components/HomeNavbar.jsx";
import { TemplatesSection } from "../components/TemplatesSection.jsx";
import { HomeFooter } from "../components/HomeFooter.jsx";
export function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <HomeNavbar />
      <GridBackground />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CompanyStats />
        <TestimonialsSection />
        <TemplatesSection />
      </main>
      <HomeFooter/>
    </div>
  );
}