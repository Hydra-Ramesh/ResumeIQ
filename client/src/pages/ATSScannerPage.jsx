import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { Link } from "react-router-dom";
import { Activity, BadgeCheck, FileSearch, Sparkles, Target } from "lucide-react";

export function ATSScannerPage() {
  return (
    <GenericPageLayout
      title="ATS Scanner"
      subtitle="Spot the problems that keep strong resumes from getting seen."
    >
      <div className="space-y-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            ATS-aware resume analysis
          </div>

          <Activity className="w-16 h-16 md:w-20 md:h-20 text-emerald-400 mx-auto mb-6" />

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            ResumeIQ scans your resume for structure issues, missing keywords,
            weak formatting, and other signals that can cause automated systems
            to filter it out before a recruiter ever opens it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={FileSearch}
            title="Structure check"
            description="Detects layout problems that make resumes harder for parsers to read."
          />
          <FeatureCard
            icon={Target}
            title="Keyword review"
            description="Highlights missing role-specific terms and important matching signals."
          />
          <FeatureCard
            icon={BadgeCheck}
            title="Readability score"
            description="Shows how cleanly your content is likely to travel through ATS tools."
          />
          <FeatureCard
            icon={Sparkles}
            title="Fast fixes"
            description="Gives you practical improvements you can apply before submitting."
          />
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/10">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Make the first filter work for you
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                The goal is not to game the system. It is to make sure your
                resume is formatted clearly, uses the right language, and gives
                your experience a fair shot in automated screening.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-colors"
              >
                Scan Your Resume Now
              </Link>
            </div>

            <div className="rounded-3xl border border-emerald-400/20 bg-linear-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-300 mb-3">
                What it looks for
              </div>
              <ul className="space-y-3 text-slate-200">
                <li>• Section order and formatting consistency</li>
                <li>• Missing keywords from target roles</li>
                <li>• Hard-to-parse tables, icons, or text blocks</li>
                <li>• Content density and clarity of impact statements</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </GenericPageLayout>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-lg shadow-black/20 hover:bg-white/10 transition-colors">
      <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-emerald-300" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
