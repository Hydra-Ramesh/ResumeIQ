import { useEffect, useState } from "react";
import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { CalendarDays, BookOpen, Sparkles, ArrowRight } from "lucide-react";

const FALLBACK_BLOGS = [
  {
    _id: "fallback-blog-1",
    title: "How to Write Bullets That Show Impact",
    snippet:
      "A short guide for turning task-based descriptions into stronger, outcome-focused resume bullets.",
    category: "Resume Writing",
    date: "July 2026",
  },
  {
    _id: "fallback-blog-2",
    title: "What ATS Systems Actually Look For",
    snippet:
      "Learn which formatting choices matter most when your resume is being parsed automatically.",
    category: "ATS Tips",
    date: "July 2026",
  },
  {
    _id: "fallback-blog-3",
    title: "Using AI Without Losing Your Voice",
    snippet:
      "How to let AI help with speed and structure while keeping your experience authentic.",
    category: "AI Workflow",
    date: "July 2026",
  },
];

export function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      setBlogs(FALLBACK_BLOGS);
      setIsLoading(false);
      return;
    }

    fetch(`${apiUrl}/public/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : FALLBACK_BLOGS);
      })
      .catch((error) => {
        console.error("Failed to fetch blogs:", error);
        setBlogs(FALLBACK_BLOGS);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GenericPageLayout
      title="ResumeIQ Blog"
      subtitle="Insights, guides, and updates from the team."
    >
      <div className="space-y-8">
        <section className="max-w-3xl mx-auto text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Writing tips, product notes, and practical career guidance
          </div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Short, useful articles that help you write better resumes, use AI
            more thoughtfully, and understand how hiring systems work.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={BookOpen}
            title="Practical guides"
            description="Short articles that focus on the parts of resume writing that matter most."
          />
          <InfoCard
            icon={CalendarDays}
            title="Fresh updates"
            description="Product notes and new ideas are shared alongside career advice."
          />
          <InfoCard
            icon={Sparkles}
            title="Focused content"
            description="Everything is written to be quick to read and easy to apply."
          />
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/10">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Latest Articles
              </h2>
              <p className="text-slate-400">
                Read recent posts from ResumeIQ.
              </p>
            </div>
            <div className="text-sm text-slate-500">
              {isLoading ? "Loading posts..." : `${blogs.length} post(s) available`}
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-56 bg-white/5 rounded-3xl border border-white/10 animate-pulse" />
              <div className="h-56 bg-white/5 rounded-3xl border border-white/10 animate-pulse" />
            </div>
          ) : blogs.length === 0 ? (
            <p className="text-slate-400">No blog posts available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => {
                const isExpanded = expandedBlogId === blog._id;

                return (
                <article
                  key={blog._id}
                  className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors shadow-lg shadow-black/10 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between gap-3 mb-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                    <span>{blog.category || "Blog"}</span>
                    <span>{blog.date || "Latest"}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                    {blog.snippet || blog.content}
                  </p>

                  {isExpanded && blog.content && (
                    <div className="mb-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300 leading-relaxed">
                      {blog.content}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedBlogId(isExpanded ? null : blog._id)
                    }
                    className="inline-flex items-center gap-2 text-blue-400 font-medium w-fit hover:text-blue-300 transition-colors"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </article>
                );
              })}
            </div>
          )}
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