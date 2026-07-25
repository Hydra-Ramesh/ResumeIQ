import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { FeaturesPage } from "./pages/FeaturesPage.jsx";
import { PricingPage } from "./pages/PricingPage.jsx";
import { ATSScannerPage } from "./pages/ATSScannerPage.jsx";
import { LatexTemplatesPage } from "./pages/LatexTemplate.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { Careers } from "./pages/CarrerPage.jsx";
import { Blog } from "./pages/Blog.jsx";
import { Contact } from "./pages/Contact.jsx";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/ats-scanner" element={<ATSScannerPage />} />
      <Route path="/latex-templates" element={<LatexTemplatesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}