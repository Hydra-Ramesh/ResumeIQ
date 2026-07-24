import { Link } from "react-router-dom";
import { Star } from "lucide-react";

import { useTestimonials } from "../hooks/useTestimonials.js";

export function TestimonialsSection() {
  const { testimonials, loading } = useTestimonials();

  return (
    <section
      id="testimonials"
      className="py-24 relative z-10 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Wall of Love</h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Don't just take our word for it. See what our users are saying.
          </p>

          <Link
            to="/feedback"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors border border-white/10"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Share your experience
          </Link>
        </div>

        {loading ? (
          <TestimonialsLoading />
        ) : testimonials.length > 0 ? (
          <TestimonialsMarquee testimonials={testimonials} />
        ) : (
          <div className="text-center text-slate-400 py-12">
            <p>No testimonials yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialsMarquee({ testimonials }) {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative flex overflow-x-hidden group">
      <div className="flex w-max home-marquee group-hover:[animation-play-state:paused]">
        {repeatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial._id ?? index}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  const rating = Math.min(Math.max(Number(testimonial.rating) || 5, 1), 5);

  return (
    <div className="w-80 md:w-96 mx-4 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-colors shrink-0 whitespace-normal">
      <div className="flex text-yellow-500 mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-current" />
        ))}
      </div>

      <p className="text-slate-300 mb-6 italic leading-relaxed">
        "{testimonial.message}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold uppercase shrink-0">
          {testimonial.name?.substring(0, 2) || "AI"}
        </div>

        <div>
          <h4 className="font-bold text-white leading-tight">
            {testimonial.name}
          </h4>

          <p className="text-xs text-slate-500 mt-1">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsLoading() {
  return (
    <div className="flex gap-6 overflow-hidden">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-80 md:w-96 h-64 shrink-0 bg-white/5 border border-white/10 rounded-3xl animate-pulse"
        />
      ))}
    </div>
  );
}
