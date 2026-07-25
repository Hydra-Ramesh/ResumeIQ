import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { Brain, Sparkles, Target, WandSparkles } from "lucide-react";

export function AboutPage() {
  return (
    <GenericPageLayout
      title="About Us"
      subtitle="Building the unfair advantage for ambitious professionals."
    >
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={Sparkles}
            title="Designed for momentum"
            description="ResumeIQ helps you move from a rough draft to a polished application faster."
          />
          <InfoCard
            icon={Brain}
            title="AI with direction"
            description="We use AI to sharpen your story, not replace your judgment or your experience."
          />
          <InfoCard
            icon={Target}
            title="Built for results"
            description="Every feature is focused on helping your resume read better to both humans and ATS tools."
          />
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/10">
          <div className="flex items-center gap-3 text-blue-300 mb-4">
            <WandSparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Our Mission
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            ResumeIQ exists to make career growth feel less like guesswork. We
            believe your resume should reflect your real value, not your ability
            to wrestle with formatting, keyword stuffing, or outdated templates.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Too many strong candidates are filtered out before a recruiter
              ever sees them. Weak structure, hard-to-read PDFs, and missing
              keywords can quietly block opportunities.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The result is frustrating: great people, invisible resumes, and a
              hiring process that rewards optimization more than potential.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              ResumeIQ combines AI-assisted rewriting, ATS-focused structure,
              and elegant templates to help you present your experience with
              clarity and confidence.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The goal is simple: help more people tell a stronger story and
              get closer to the roles they actually want.
            </p>
          </section>
        </div>

        <section className="rounded-3xl border border-blue-500/20 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 p-6 md:p-8 shadow-2xl shadow-blue-950/20">
          <h2 className="text-2xl font-bold text-white mb-3">What we care about</h2>
          <p className="text-slate-200 leading-relaxed">
            Clean design. Honest feedback. Better outcomes. We build ResumeIQ
            for people who want their work to speak louder than their formatting
            skills.
          </p>
        </section>
      </div>
    </GenericPageLayout>
  );
}

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-lg shadow-black/20">
      <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-blue-300" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
