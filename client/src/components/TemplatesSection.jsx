import { CheckCircle2, FileText } from "lucide-react";

const benefits = [
  {
    title: 'The "Harvard" Standard',
    description:
      "Our default template uses professional spacing, margins, and typography designed for technical resumes.",
    iconClass: "text-blue-400",
  },
  {
    title: "100% ATS Machine Readable",
    description:
      "No complex tables or weird columns that confuse bots. Just clean semantic text that parsers digest flawlessly.",
    iconClass: "text-purple-400",
  },
  {
    title: "Automated Typesetting",
    description:
      "Never fight with Word margins again. The AI balances your line lengths and prevents visual orphans automatically.",
    iconClass: "text-pink-400",
  },
];

export function TemplatesSection() {
  return (
    <section className="py-24 bg-white/5 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Pixel-Perfect LaTeX Templates
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Stand out with beautiful typography designed for professional
            technical resumes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <CheckCircle2
                  className={`w-8 h-8 shrink-0 mt-1 ${benefit.iconClass}`}
                />

                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h4>

                  <p className="text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ResumePreview />
        </div>
      </div>
    </section>
  );
}

function ResumePreview() {
  return (
    <div className="relative group perspective-[1000px] flex justify-center mt-10 md:mt-0">
      <div className="relative w-full max-w-md aspect-[1/1.4] bg-[#f8f9fa] rounded-md shadow-[0_0_50px_rgba(59,130,246,0.15)] p-8 transform md:rotate-y-[-15deg] md:rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out border-2 border-white/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none rounded-md" />

        <ResumeSkeleton />
      </div>

      <div className="absolute -bottom-6 -right-6 md:right-0 bg-[#050505] p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 animate-bounce shadow-blue-500/20">
        <FileText className="text-blue-400 w-6 h-6" />

        <div>
          <div className="text-white font-bold text-sm">Ramesh-Resume.pdf</div>

          <div className="text-green-400 text-xs font-bold uppercase tracking-wider">
            100% ATS Match
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-4 opacity-80 mix-blend-multiply grayscale">
      <div className="flex flex-col items-center border-b-2 border-slate-800 pb-4 mb-2">
        <div className="w-1/2 h-8 bg-slate-800 mb-3" />
        <div className="w-3/4 h-2 bg-slate-500" />
      </div>

      <div className="space-y-3 mb-2">
        <div className="w-1/4 h-4 bg-slate-800 mb-2" />

        <div className="flex justify-between items-end">
          <div className="w-1/3 h-3 bg-slate-700" />
          <div className="w-1/6 h-2 bg-slate-400" />
        </div>

        <div className="w-full h-2 bg-slate-300" />
        <div className="w-11/12 h-2 bg-slate-300" />
        <div className="w-full h-2 bg-slate-300" />
      </div>

      <div className="space-y-3 mb-2">
        <div className="flex justify-between items-end mt-4">
          <div className="w-1/3 h-3 bg-slate-700" />
          <div className="w-1/6 h-2 bg-slate-400" />
        </div>

        <div className="w-full h-2 bg-slate-300" />
        <div className="w-10/12 h-2 bg-slate-300" />
      </div>

      <div className="space-y-3">
        <div className="w-1/4 h-4 bg-slate-800 mt-4 mb-2" />

        <div className="flex gap-2 mb-2">
          <div className="w-16 h-2 bg-slate-600" />
          <div className="w-full h-2 bg-slate-300" />
        </div>

        <div className="flex gap-2">
          <div className="w-16 h-2 bg-slate-600" />
          <div className="w-10/12 h-2 bg-slate-300" />
        </div>
      </div>
    </div>
  );
}
