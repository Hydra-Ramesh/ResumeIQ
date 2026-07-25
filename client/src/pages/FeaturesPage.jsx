import { GenericPageLayout } from "../layouts/GenericPageLayout.jsx";
import { Link } from "react-router-dom";
import { Bot, Mail, ShieldCheck, Sparkles, Target, WandSparkles } from "lucide-react";

export function FeaturesPage() {
  return (
    <GenericPageLayout
      title="Features"
      subtitle="Everything you need to turn a resume into a stronger application."
    >
      <div className="space-y-8">
        <section className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Built for clarity, speed, and results
          </div>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            ResumeIQ combines AI editing, ATS-friendly formatting, and fast
            feedback loops so you can improve your application without getting
            stuck rewriting the same bullets over and over.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={Bot}
            iconStyle="bg-blue-500/20 border-blue-500/30 text-blue-400"
            title="AI Bullet Rewriter"
            description="Transform weak responsibilities into outcome-focused bullets with stronger verbs, metrics, and impact."
          />
          <FeatureCard
            icon={ShieldCheck}
            iconStyle="bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
            title="ATS Optimizer"
            description="Check your resume for layout issues, keyword gaps, and structure problems that can hurt parsing."
          />
          <FeatureCard
            icon={Mail}
            iconStyle="bg-purple-500/20 border-purple-500/30 text-purple-400"
            title="1-Click Cold Emails"
            description="Generate personalized outreach that matches your background and the role you want to pursue."
          />
          <FeatureCard
            icon={Target}
            iconStyle="bg-red-500/20 border-red-500/30 text-red-400"
            title="AI Roast"
            description="Get direct, useful feedback on weak wording, missing metrics, and sections that need more clarity."
          />
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/10">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <div className="flex items-center gap-3 text-cyan-300 mb-3">
                <WandSparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Why it helps
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                More signal, less guesswork
              </h2>
              <p className="text-slate-300 leading-relaxed">
                The goal is not just to make your resume look better. It is to
                help you communicate your value more clearly, adapt faster for
                each application, and spend less time fighting the document.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MiniStat label="Faster edits" value="Minutes" />
              <MiniStat label="Cleaner structure" value="ATS-friendly" />
              <MiniStat label="Better bullets" value="Impact-first" />
              <MiniStat label="Less friction" value="More focus" />
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform"
          >
            Try All Features Free
          </Link>
        </div>
      </div>
    </GenericPageLayout>
  );
}

function FeatureCard({ icon: Icon, iconStyle, title, description }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-colors shadow-lg shadow-black/10">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${iconStyle}`}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>

      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
        {label}
      </div>
      <div className="text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
