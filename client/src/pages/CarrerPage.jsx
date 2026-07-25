import { useEffect, useState } from "react";
import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { Briefcase, MapPin, Sparkles, Users } from "lucide-react";

const FALLBACK_CAREERS = [
  {
    _id: "fallback-career-1",
    title: "Frontend Engineer",
    location: "Remote",
    googleFormLink: "https://forms.google.com",
    description:
      "Build polished product experiences and help shape the UI that job seekers use every day.",
  },
  {
    _id: "fallback-career-2",
    title: "AI Product Designer",
    location: "Hybrid",
    googleFormLink: "https://forms.google.com",
    description:
      "Design interfaces that make AI-powered resume editing feel fast, clear, and delightful.",
  },
  {
    _id: "fallback-career-3",
    title: "Growth Intern",
    location: "Remote",
    googleFormLink: "https://forms.google.com",
    description:
      "Support launch campaigns, content experiments, and user outreach across the product.",
  },
];

export function Careers() {
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      setCareers(FALLBACK_CAREERS);
      setIsLoading(false);
      return;
    }

    fetch(`${apiUrl}/public/careers`)
      .then((res) => res.json())
      .then((data) => {
        setCareers(Array.isArray(data) ? data : FALLBACK_CAREERS);
      })
      .catch((error) => {
        console.error("Failed to fetch careers:", error);
        setCareers(FALLBACK_CAREERS);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GenericPageLayout
      title="Careers"
      subtitle="Come build the future of hiring with us."
    >
      <div className="space-y-8">
        <section className="max-w-3xl mx-auto text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Small team, meaningful work
          </div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            We are building tools that make career growth easier, faster, and
            less frustrating. If you care about product quality and useful AI,
            we would like to meet you.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={Briefcase}
            title="Hands-on roles"
            description="Work on real product surfaces that users interact with every day."
          />
          <InfoCard
            icon={Users}
            title="Collaborative team"
            description="Move quickly with people who care about shipping thoughtful details."
          />
          <InfoCard
            icon={MapPin}
            title="Flexible setup"
            description="Opportunities may be remote, hybrid, or location-based depending on the role."
          />
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/10">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Open Positions
              </h2>
              <p className="text-slate-400">
                Explore the roles we are actively hiring for.
              </p>
            </div>
            <div className="text-sm text-slate-500">
              {isLoading ? "Loading roles..." : `${careers.length} role(s) available`}
            </div>
          </div>

          {isLoading ? (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl h-44 animate-pulse" />
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl h-44 animate-pulse" />
            </div>
          ) : careers.length === 0 ? (
            <p className="text-slate-400">
              We are not currently hiring for any positions. Please check back
              later.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {careers.map((career) => (
                <div
                  key={career._id}
                  className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors flex flex-col h-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {career.title}
                    </h3>

                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {career.description || "A role where you can help shape the product and our user experience."}
                    </p>

                    <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {career.location}
                    </p>
                  </div>

                  <a
                    href={career.googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
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