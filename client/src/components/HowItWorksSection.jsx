const steps = [
  {
    number: 1,
    title: "Import Your History",
    description:
      "Connect your LinkedIn or paste your old resume. We extract the raw data instantly.",
    color: "blue",
  },
  {
    number: 2,
    title: "AI Optimization",
    description:
      "Our engine rewrites your bullets to emphasize metrics, impact, and keywords.",
    color: "purple",
  },
  {
    number: 3,
    title: "Export LaTeX PDF",
    description:
      "Download a perfectly typeset, ATS-compliant PDF that recruiters love.",
    color: "pink",
  },
];

const styles = {
  blue: "border-blue-500/30 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.1)]",
  purple:
    "border-purple-500/30 text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.1)]",
  pink: "border-pink-500/30 text-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.1)]",
};

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white/5 border-y border-white/10 relative z-10"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            From Blank Page to FAANG in 3 Steps
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Our streamlined process takes the pain out of resume writing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0" />

          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, title, description, color }) {
  return (
    <div className="relative text-center z-10 group">
      <div
        className={`w-24 h-24 mx-auto bg-[#050505] border-2 rounded-full flex items-center justify-center text-3xl font-bold mb-6 transition-shadow duration-500 ${styles[color]}`}
      >
        {number}
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
