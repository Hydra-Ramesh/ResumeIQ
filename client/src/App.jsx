import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingFallback } from "./components/LoadingFallback.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loading-preview" element={<LoadingFallback />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center p-8 text-center">
              <div>
                <h1 className="text-2xl font-semibold">ResumeIQ</h1>
                <p className="mt-2 text-sm opacity-70">
                  Open /loading-preview to check the loading fallback.
                </p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;