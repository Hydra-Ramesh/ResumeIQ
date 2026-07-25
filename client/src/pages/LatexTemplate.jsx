import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Sparkles, WandSparkles } from "lucide-react";

import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { resumeTemplates as hardcodedTemplates } from "../data/resumeTemplates.js";

export function LatexTemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        if (!apiUrl) {
          setTemplates(hardcodedTemplates);
          return;
        }

        const res = await fetch(`${apiUrl}/templates`);

        if (res.ok) {
          const data = await res.json();

          const formatted = data.map((template) => ({
            id: template._id,
            name: template.name,
            description: template.description,
          }));

          setTemplates(
            formatted.length > 0
              ? formatted
              : hardcodedTemplates
          );
        } else {
          setTemplates(hardcodedTemplates);
        }
      } catch (error) {
        console.error("Failed to fetch templates:", error);

        setTemplates(hardcodedTemplates);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  if (isLoading) {
    return (
      <GenericPageLayout
        title="LaTeX Templates"
        subtitle="Pixel-perfect resumes that look sharp and stay ATS-friendly."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse mt-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-48 rounded-3xl bg-white/5 border border-white/10"
            />
          ))}
        </div>
      </GenericPageLayout>
    );
  }

  return (
    <GenericPageLayout
      title="LaTeX Templates"
      subtitle="Pixel-perfect typography that recruiters love and ATS systems can read cleanly."
    >
      <div className="space-y-8">
        <section className="max-w-3xl mx-auto text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Carefully crafted layouts for modern applications
          </div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            ResumeIQ templates are designed to balance elegance, readability,
            and ATS safety so you can present your work with confidence.
          </p>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          <TemplateStat label="Readable" value="Clean structure" />
          <TemplateStat label="Refined" value="Modern typography" />
          <TemplateStat label="Practical" value="ATS friendly" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all flex flex-col h-full group shadow-lg shadow-black/10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-400/20">
                    <FileText className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-0">
                    {template.name}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {template.description}
                </p>
              </div>

              <Link
                to="/register"
                className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform w-fit"
              >
                Use this template free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3 text-cyan-300 mb-3">
                <WandSparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Why it works
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Templates that look polished and stay practical
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Each layout is built to make your experience easy to scan,
                visually balanced, and safe for common ATS systems.
              </p>
            </div>

            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              Browse All Templates
            </Link>
          </div>
        </section>

        {/* CTA */}
        <Link
          to="/register"
          className="hidden"
        >
          Browse All Templates inside ResumeIQ
        </Link>
      </div>
    </GenericPageLayout>
  );
}

function TemplateStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
        {label}
      </div>
      <div className="text-lg font-semibold text-white">{value}</div>
    </div>
  );
}