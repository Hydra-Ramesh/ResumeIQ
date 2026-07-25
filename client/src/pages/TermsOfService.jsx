import { GenericPageLayout } from "../layouts/GenericPageLayout";
import { AlertTriangle, BadgeCheck, FileText, Sparkles, Zap } from "lucide-react";

export function TermsOfService() {
  return (
    <GenericPageLayout
      title="Terms of Service"
      subtitle="Last updated: July 2026"
    >
      <div className="not-prose space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={BadgeCheck}
            title="Simple agreement"
            description="These terms explain how you can use ResumeIQ and what we expect in return."
          />
          <InfoCard
            icon={Sparkles}
            title="AI-powered features"
            description="ResumeIQ uses Groq-backed AI to generate edits, suggestions, and analysis."
          />
          <InfoCard
            icon={FileText}
            title="Plan-based access"
            description="Some features are free, while advanced tools may require a paid subscription."
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-linear-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6 md:p-8 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-3 text-emerald-300 mb-3">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Quick Take
            </span>
          </div>
          <p className="text-slate-200 leading-relaxed">
            By using ResumeIQ, you agree to use the service responsibly, avoid
            abuse, and respect the limits of your plan. We provide career tools
            to help you move faster, but we do not guarantee interviews,
            employment, or any specific outcome.
          </p>
        </div>

        <PolicySection title="1. Acceptance of Terms">
          <p>
            By accessing or using ResumeIQ, you agree to be bound by these
            Terms of Service. If you do not agree, you should not use the
            service.
          </p>
          <p>
            These terms apply to all visitors, users, and others who access or
            use the platform, including any AI-assisted tools, templates, ATS
            features, and account services.
          </p>
        </PolicySection>

        <PolicySection title="2. Accounts and Authentication">
          <p>
            You may need to create an account or sign in using an OAuth-based
            authentication provider to access certain features. You are
            responsible for keeping your account secure and for all activity
            that happens under your account.
          </p>
          <p>
            If you believe someone has accessed your account without permission,
            you should notify us as soon as possible.
          </p>
        </PolicySection>

        <PolicySection title="3. AI Features and Groq Usage">
          <p>
            ResumeIQ uses third-party AI infrastructure, including Groq API, to
            power features such as resume rewriting, ATS recommendations, and
            generated suggestions.
          </p>
          <p>
            When you use these features, your prompts or resume content may be
            processed by those providers so the requested output can be
            generated. You agree not to submit content that you do not have the
            right to share.
          </p>
          <p>
            AI-generated results are provided for convenience and may contain
            errors. You are responsible for reviewing and verifying the final
            content before using it in applications or public materials.
          </p>
        </PolicySection>

        <PolicySection title="4. Subscriptions and Billing">
          <p>
            Some ResumeIQ features may be offered through free or paid plans.
            If you purchase a subscription, you authorize us or our payment
            processor to charge your selected payment method on a recurring
            basis according to the plan you choose.
          </p>
          <p>
            Fees are billed in advance unless stated otherwise. Subscription
            changes, renewals, cancellations, or refunds may be subject to the
            rules shown at checkout or in your account settings.
          </p>
        </PolicySection>

        <div className="grid gap-4 md:grid-cols-2">
          <PolicySection title="5. Acceptable Use">
            <ul className="list-disc pl-5 space-y-2">
              <li>Do not attempt to overload, attack, or reverse engineer the service.</li>
              <li>Do not use automated scripts to abuse rate limits or generate spam.</li>
              <li>Do not submit unlawful, harmful, or infringing content.</li>
              <li>Do not impersonate others or misrepresent your identity.</li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Service Availability and Limits">
            <p>
              We may modify, suspend, or discontinue features at any time to
              maintain the product, improve performance, or address security and
              legal requirements.
            </p>
            <p>
              We may also set usage limits, fair-use thresholds, or feature caps
              to keep the service stable for all users.
            </p>
          </PolicySection>
        </div>

        <PolicySection title="7. Intellectual Property">
          <p>
            ResumeIQ, including its branding, software, interface, and content
            created by us, remains our property or the property of our licensors
            unless otherwise stated.
          </p>
          <p>
            You retain ownership of the materials you submit, but you grant us
            the limited rights needed to operate the service and produce the
            outputs you request.
          </p>
        </PolicySection>

        <PolicySection title="8. Disclaimers and Limitation of Liability">
          <p>
            ResumeIQ is provided on an "as is" and "as available" basis. We do
            not guarantee that the service will be error-free, uninterrupted, or
            suitable for any specific employment outcome.
          </p>
          <p>
            To the maximum extent permitted by law, ResumeIQ will not be liable
            for indirect, incidental, special, consequential, or punitive
            damages arising from your use of the service.
          </p>
        </PolicySection>

        <PolicySection title="9. Termination">
          <p>
            We may suspend or terminate access to the service if we believe you
            have violated these terms, abused the platform, or used the service
            in a way that creates risk for us or other users.
          </p>
        </PolicySection>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Please read before you ship your resume
            </h3>
            <p className="text-slate-300 leading-relaxed">
              AI can speed up the work, but it does not replace your judgment.
              Always review the final resume, verify facts, and make sure the
              content reflects your actual experience.
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
      <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-emerald-300" />
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
