const companies = ["Google", "Meta", "Amazon", "NETFLIX", "APPLE"];

export function CompanyStats() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 lg:p-16 text-center shadow-2xl shadow-blue-900/10">
          <h2 className="text-2xl lg:text-4xl font-bold mb-12 text-slate-300">
            Resumes built with ResumeIQ land interviews at
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {companies.map((company) => (
              <span key={company} className="text-3xl font-bold tracking-tight">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
