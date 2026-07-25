import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { FeaturesPage } from "./pages/FeaturesPage.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
    </Routes>
  );
}