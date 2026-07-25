import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { FeaturesPage } from "./pages/FeaturesPage.jsx";
import { PricingPage } from "./pages/PricingPage.jsx";
import { ATSScannerPage } from "./pages/ATSScannerPage.jsx";
import { LatexTemplatesPage } from "./pages/LatexTemplate.jsx";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/ats-scanner" element={<ATSScannerPage />} />
      <Route path="/latex-templates" element={<LatexTemplatesPage />} />
    </Routes>
  );
}