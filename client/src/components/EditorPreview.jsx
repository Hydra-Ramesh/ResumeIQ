import { Bot, Sparkles } from "lucide-react";

export function EditorPreview() {
  return (
    <div className="relative rounded-t-2xl border border-white/10 border-b-0 bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/10 transform rotate-x-[15deg] hover:rotate-x-[5deg] transition-transform duration-1000 ease-out flex flex-col h-[400px]">
      {/* Header */}

      <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />

        <div className="mx-auto px-3 py-1 rounded bg-white/5 text-xs text-slate-400 font-mono">
          resumeiq-editor.tex
        </div>
      </div>

      {/* Body */}

      <div className="flex-1 flex text-left">
        <EditorSidebar />

        <div className="flex-1 p-8 flex flex-col gap-6 relative">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-purple-400" />

            <span className="text-sm font-bold text-purple-400 tracking-widest">
              AI BULLET OPTIMIZATION ENGINE
            </span>
          </div>

          <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10 relative">
            <span className="absolute -top-3 left-4 px-2 bg-[#0a0a0a] text-[10px] font-bold text-red-400 tracking-wider">
              ORIGINAL (WEAK)
            </span>

            <p className="text-slate-400 text-sm md:text-base font-mono">
              Made the database faster and fixed bugs in the API.
            </p>
          </div>

          <div className="flex justify-center -my-3 relative z-10">
            <div className="bg-[#0a0a0a] p-2 rounded-full border border-white/10 shadow-lg">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative">
            <span className="absolute -top-3 left-4 px-2 bg-[#0a0a0a] text-[10px] font-bold text-blue-400 tracking-wider">
              APPLYIQ OPTIMIZED (STRONG)
            </span>

            <p className="text-slate-200 text-sm md:text-base font-mono leading-relaxed">
              Architected database indexing strategy resulting in 40% query
              latency reduction; resolved 15+ critical API bottlenecks ahead of
              Q3 launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorSidebar() {
  return (
    <div className="w-64 border-r border-white/10 p-4 hidden md:block">
      <div className="h-4 w-24 bg-white/10 rounded mb-6" />

      <div className="space-y-3">
        <div className="h-3 w-full bg-blue-500/20 rounded" />
        <div className="h-3 w-3/4 bg-white/5 rounded" />
        <div className="h-3 w-5/6 bg-white/5 rounded" />
        <div className="h-3 w-4/5 bg-white/5 rounded" />
        <div className="h-3 w-11/12 bg-white/5 rounded" />
      </div>

      <div className="h-4 w-20 bg-white/10 rounded mt-8 mb-4" />

      <div className="space-y-3">
        <div className="h-3 w-4/5 bg-white/5 rounded" />
        <div className="h-3 w-full bg-white/5 rounded" />
      </div>
    </div>
  );
}
