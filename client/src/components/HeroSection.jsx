import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

import { HeroMockup } from "./HeroMockup.jsx";

export function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.2,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-20 z-10"
    >
      {/* Background glows */}

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center z-10 w-full flex-1">
        <div className="flex flex-col items-center gap-6 max-w-3xl mb-16">
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400" />

            <span className="text-sm font-medium text-slate-300">
              The Future of Resume Building
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight overflow-hidden">
              <span className="hero-reveal block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                ResumeIQ
              </span>

              <span className="hero-reveal block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Unfair Advantage.
              </span>
            </h1>

            <p className="hero-reveal text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Build an ATS-beating, beautifully typeset resume in seconds.
              Powered by elite AI logic to perfect every bullet point.
            </p>
          </div>

          <div className="hero-reveal flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link
              to="/register"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden text-center transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Building Free
                <ArrowRight className="w-4 h-4" />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-center backdrop-blur-md"
            >
              Sign In
            </Link>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
