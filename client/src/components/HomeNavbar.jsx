import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function HomeNavbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-7xl bg-black/10 backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/50 rounded-full transition-all duration-300">
        <div className="px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            ResumeIQ
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Pro
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-black/20 p-1 rounded-full border border-white/5">
            <a
              href="#features"
              className="px-5 py-1 text-sm text-slate-300 hover:text-white"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="px-5 py-1 text-sm text-slate-300 hover:text-white"
            >
              How it Works
            </a>

            <a
              href="#testimonials"
              className="px-5 py-1 text-sm text-slate-300 hover:text-white"
            >
              Wall of Love
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden md:inline-flex text-white/80 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="bg-white text-black px-5 py-2.5 rounded-full font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
