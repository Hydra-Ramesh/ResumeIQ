import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { Bot, KeyRound, Lock, ShieldCheck, Sparkles } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <GenericPageLayout
      title="Privacy Policy"
      subtitle="Last updated: July 2026"
    >
      <div className="not-prose space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={ShieldCheck}
            title="Privacy first"
            description="We only collect the data needed to run ResumeIQ and keep your experience secure."
          />
          <InfoCard
            icon={Bot}
            title="Groq powered AI"
            description="Your prompts and resume content may be sent to Groq to generate AI responses inside the product."
          />
          <InfoCard
            icon={KeyRound}
            title="OAuth sign-in"
            description="If you choose a third-party sign-in flow, we may receive basic profile details from that provider."
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 p-6 md:p-8 shadow-2xl shadow-blue-950/20">
          <div className="flex items-center gap-3 text-blue-300 mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Quick Summary
            </span>
          </div>
          <p className="text-slate-200 leading-relaxed">
            ResumeIQ collects the information you submit, account details from
            sign-in providers, and limited usage data so we can deliver resume
            writing, ATS feedback, and AI assistance. We do not sell personal
            data, and we do not use your content to train our own models.
          </p>
        </div>

        <PolicySection title="1. Information We Collect">
          <p>
            When you use ResumeIQ, we may collect the information you provide
            directly, including your name, email address, resume content, job
            descriptions, cover letter text, and any other files or messages you
            choose to upload or submit.
          </p>
          <p>
            If you sign in using an OAuth-based authentication flow, we may
            receive basic profile details from that provider, such as your
            display name, email address, and profile picture, depending on the
            permissions you approve.
          </p>
          <p>
            We may also collect device, browser, and usage information such as
            pages viewed, interactions, and performance diagnostics to help us
            keep the app stable and improve the experience.
          </p>
        </PolicySection>

        <PolicySection title="2. How We Use Your Information">
          <p>
            We use your information to create and improve ResumeIQ features,
            including resume editing, ATS analysis, template rendering,
            feedback generation, account management, and customer support.
          </p>
          <p>
            We may send resume text, prompts, or other content you submit to
            Groq API in order to power AI-generated suggestions and responses
            inside the product. Groq may process that information to deliver
            the requested output, and we aim to minimize the data shared to
            only what is necessary for the feature to work.
          </p>
          <p>
            We do not sell your personal information. We also do not use your
            content to train our own AI models.
          </p>
        </PolicySection>

        <PolicySection title="3. Data Sharing and Third Parties">
          <p>
            We may share information with service providers that help us run
            the product, such as authentication providers, hosting services,
            analytics tools, and AI infrastructure providers like Groq.
          </p>
          <p>
            These providers are only given the information necessary to perform
            their services. Where applicable, they are expected to handle data
            according to their own privacy and security commitments.
          </p>
        </PolicySection>

        <PolicySection title="4. Data Retention and Security">
          <p>
            We retain personal information only for as long as needed to
            provide the service, comply with legal obligations, resolve
            disputes, and enforce our agreements.
          </p>
          <p>
            We use reasonable administrative, technical, and organizational
            safeguards to protect your data. This may include access controls,
            encrypted transport, and secure storage practices, but no method of
            transmission or storage is completely risk-free.
          </p>
        </PolicySection>

        <div className="grid gap-4 md:grid-cols-2">
          <PolicySection title="5. Your Choices">
            <ul className="list-disc pl-5 space-y-2">
              <li>You can update or delete your account where supported.</li>
              <li>You can choose not to upload sensitive resume content.</li>
              <li>You can disable cookies or tracking in your browser settings.</li>
              <li>You can contact us to ask about your data rights.</li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how we handle
              data, contact us at <span className="text-white">hello@resumeiq.com</span>.
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
              ResumeIQ may update this policy from time to time. When we do, we
              will revise the date at the top of the page.
            </div>
          </PolicySection>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
            <Lock className="w-6 h-6 text-blue-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Built to keep your work private
            </h3>
            <p className="text-slate-300 leading-relaxed">
              We designed ResumeIQ to help you move fast without losing control
              of your information. If you ever want a stricter policy version
              for production, this page can be expanded with region-specific
              rights and cookie disclosures.
            </p>
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

function PolicySection({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-4 text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}
