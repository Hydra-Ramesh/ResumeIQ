import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { Link } from "react-router-dom";
import { Check, Sparkles, WandSparkles } from "lucide-react";

export function PricingPage() {
  return (
    <GenericPageLayout
      title="Simple, Transparent Pricing"
      subtitle="Choose the plan that matches where you are in your job search."
    >
      <div className="space-y-8">
        <section className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            No hidden fees, no confusing tiers
          </div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Start free, upgrade when you need more power. ResumeIQ keeps the
            pricing simple so you can focus on improving your resume instead of
            decoding a sales page.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PriceCard
            tier="Free Starter"
            description="Perfect for testing the waters and improving a resume before you send it out."
            price="$0"
            accent="neutral"
            buttonLabel="Get Started Free"
            buttonClassName="bg-white/10 hover:bg-white/20 text-white"
            features={[
              "Basic LaTeX templates",
              "PDF exports",
              "5 AI generations total",
              "1,000 AI chat tokens",
            ]}
          />

          <PriceCard
            tier="Pro"
            description="For serious applicants who want faster iteration and stronger AI tools."
            price="$15"
            accent="featured"
            buttonLabel="Upgrade to Pro"
            buttonClassName="bg-white text-black hover:bg-slate-200 font-bold"
            featuredTag="Most Popular"
            features={[
              "Unlimited AI generations",
              "Unlimited AI chat tokens",
              "Advanced ATS optimizer",
              "1-click cold email generator",
              "Premium templates",
            ]}
          />
        </div>

        <section className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <InfoCard
            icon={WandSparkles}
            title="Fast iteration"
            description="Make changes quickly and test different versions of your resume without starting over."
          />
          <InfoCard
            icon={Check}
            title="Clear feature gates"
            description="You always know what is included in each plan and when it makes sense to upgrade."
          />
          <InfoCard
            icon={Sparkles}
            title="Focused on outcomes"
            description="Every plan is designed to help you present a cleaner, stronger application."
          />
        </section>
      </div>
    </GenericPageLayout>
  );
}

function PriceCard({
  tier,
  description,
  price,
  features,
  buttonLabel,
  buttonClassName,
  accent,
  featuredTag,
}) {
  const isFeatured = accent === "featured";

  return (
    <div
      className={`p-8 rounded-3xl relative flex flex-col border ${
        isFeatured
          ? "bg-linear-to-b from-blue-900/40 to-purple-900/20 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)]"
          : "bg-white/5 border-white/10"
      }`}
    >
      {featuredTag && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
          {featuredTag}
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
      <p className={`${isFeatured ? "text-blue-200/70" : "text-slate-400"} mb-6`}>
        {description}
      </p>

      <div className="text-4xl font-extrabold text-white mb-6">
        {price}
        <span className="text-lg text-slate-500 font-normal">/mo</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex gap-3 ${isFeatured ? "text-slate-200" : "text-slate-300"}`}
          >
            <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/register"
        className={`w-full block text-center py-4 rounded-xl transition-colors ${buttonClassName}`}
      >
        {buttonLabel}
      </Link>
    </div>
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
