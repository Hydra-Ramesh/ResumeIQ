import { Activity, CheckCircle2, Flame, Mail, Target } from "lucide-react";

export function FloatingWidgets() {
  return (
    <>
      {/* Resume Roast */}

      <div className="floating-widget absolute -top-4 lg:top-4 -left-4 lg:-left-24 z-30 border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.2)] w-56 hidden sm:flex gentle-float">
        <div className="flex items-center gap-3">
          <div className="bg-red-500/20 p-2.5 rounded-xl border border-red-500/30">
            <Flame className="text-red-400 w-6 h-6" />
          </div>

          <div className="text-left">
            <div className="text-white font-bold">AI Resume Roast</div>

            <div className="text-red-400 text-xs font-bold">Score: 42/100</div>
          </div>
        </div>

        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
          <div className="w-[42%] h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full" />
        </div>

        <div className="text-[10px] text-slate-400 text-left leading-tight">
          Identified 3 weak action verbs and poor metric formatting.
        </div>
      </div>

      {/* Auto Tailor */}

      <div className="floating-widget absolute top-24 lg:top-36 -right-4 lg:-right-32 z-30 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] w-64 hidden sm:flex gentle-float-delayed">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/20 p-2.5 rounded-xl border border-blue-500/30">
            <Target className="text-blue-400 w-6 h-6" />
          </div>

          <div className="text-left">
            <div className="text-white font-bold">Job Auto-Tailor</div>

            <div className="text-blue-400 text-xs font-bold">
              +14 Keywords Match
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["TypeScript", "AWS", "React"].map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-[10px] rounded border border-blue-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Cold Email */}

      <div className="floating-widget absolute bottom-32 lg:bottom-40 -left-4 lg:-left-20 z-30 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)] w-56 hidden sm:flex gentle-float">
        <div className="flex items-center gap-3">
          <div className="bg-purple-500/20 p-2.5 rounded-xl border border-purple-500/30">
            <Mail className="text-purple-400 w-6 h-6" />
          </div>

          <div className="text-left">
            <div className="text-white font-bold">Cold Email AI</div>

            <div className="text-purple-400 text-xs font-bold">
              Draft Generated
            </div>
          </div>
        </div>

        <div className="space-y-1.5 opacity-70">
          <div className="h-2 w-full bg-purple-500/20 rounded" />
          <div className="h-2 w-5/6 bg-purple-500/20 rounded" />
          <div className="h-2 w-4/6 bg-purple-500/20 rounded" />
        </div>
      </div>

      {/* ATS */}

      <div className="floating-widget absolute bottom-12 lg:bottom-16 -right-4 lg:-right-24 z-30 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)] w-64 hidden sm:flex gentle-float-delayed">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30">
            <Activity className="text-emerald-400 w-6 h-6" />
          </div>

          <div className="text-left flex-1">
            <div className="text-white font-bold">ATS Optimizer</div>

            <div className="text-emerald-400 text-xs font-bold">
              Parse Success: 100%
            </div>
          </div>

          <div className="w-10 h-10 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

        <div className="text-[10px] text-slate-400 text-left leading-tight mt-1">
          Structure, margins, and fonts are machine-readable.
        </div>
      </div>
    </>
  );
}
