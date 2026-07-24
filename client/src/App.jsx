import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes.jsx";
import {LoadingFallback} from "./components/LoadingFallback.jsx";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;