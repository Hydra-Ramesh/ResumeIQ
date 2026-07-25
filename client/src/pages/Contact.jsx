import { useState } from "react";
import { toast } from "sonner";
import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { Mail, MessageSquare, Sparkles, Send } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        toast.success("Thanks for reaching out. The contact form is ready for backend wiring.");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      const res = await fetch(`${apiUrl}/public/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(
          "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        "An error occurred. Please check your connection."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GenericPageLayout
      title="Contact Us"
      subtitle="We'd love to hear from you. Send a message and we'll get back soon."
    >
      <div className="space-y-8 mt-8">
        <section className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <InfoCard
            icon={Mail}
            title="General support"
            description="Ask about product issues, account access, or anything else you need help with."
          />
          <InfoCard
            icon={MessageSquare}
            title="Product feedback"
            description="Tell us what would make ResumeIQ more useful in your workflow."
          />
          <InfoCard
            icon={Sparkles}
            title="Partnerships"
            description="We are open to thoughtful collaborations and feature ideas."
          />
        </section>

        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1fr_0.85fr] items-start">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl shadow-black/10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
              <h3 className="text-xl font-bold text-white mb-3">
                What to expect
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We read every message and try to respond as quickly as possible.
                If you are reporting a bug, include as much detail as you can so
                we can reproduce the issue faster.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 p-6 shadow-xl shadow-blue-950/20">
              <h3 className="text-xl font-bold text-white mb-3">
                Small note
              </h3>
              <p className="text-slate-200 leading-relaxed">
                If the backend is not connected, the form still gives a friendly
                response so the page remains usable during development.
              </p>
            </div>
          </div>
        </div>
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