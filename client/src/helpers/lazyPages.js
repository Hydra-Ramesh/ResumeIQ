import { lazy } from "react";

export const RegisterPage = lazy(() =>
  import("../pages/RegisterPage.jsx")
    .then(m => ({ default: m.RegisterPage }))
);

export const LoginPage = lazy(() =>
  import("../pages/LoginPage.jsx")
    .then(m => ({ default: m.LoginPage }))
);