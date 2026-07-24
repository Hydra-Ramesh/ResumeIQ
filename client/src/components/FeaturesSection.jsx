import { useEffect, useRef } from "react";
import { Bot, ShieldCheck, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Bot,
    title: "AI Bullet Rewriter",
    description:
      "Instantly transform weak tasks into powerful, metric-driven achievements.",
    iconStyle: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "ATS Optimizer",
    description:
      "Analyze your resume against real job descriptions to ensure you pass the robot filters.",
    iconStyle: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  },
  {
    icon: Zap,
    title: "Quality Engine",
    description:
      "Scans for overused buzzwords and repetitious verbs, enforcing strict MNC standards.",
    iconStyle: "bg-pink-500/20 border-pink-500/30 text-pink-400",
  },
];

export function FeaturesSection() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.children,
        {
          y: 100,
          opacity: 0,
          rotationX: -15,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        },
      );
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="py-32 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Enterprise-Grade Intelligence
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our AI doesn't just check grammar; it completely re-architects your
            bullets to highlight impact, metrics, and leadership.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, iconStyle }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-colors group">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform ${iconStyle}`}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>

      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
