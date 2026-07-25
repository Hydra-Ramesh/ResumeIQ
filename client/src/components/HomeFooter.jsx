import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export function HomeFooter() {
  return (
    <footer className="bg-white/5 border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="font-bold text-2xl tracking-tight text-white mb-4">
              ResumeIQ
              <span className="text-blue-500"> Pro</span>
            </div>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              The unfair advantage for ambitious professionals. Build your
              legacy with perfectly optimized resumes.
            </p>

            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                Kolkata, West Bengal, India, 700001
              </span>

              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                hello@resumeiq.com
              </span>

              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                Contact Support
              </span>
            </div>
          </div>

          <FooterColumn
            title="Product"
            links={[
              ["Features", "/features"],
              ["Pricing", "/pricing"],
              ["ATS Scanner", "/ats-scanner"],
              ["LaTeX Templates", "/latex-templates"],
            ]}
          />

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  Careers
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold border border-blue-500/30">
                    WE'RE HIRING
                  </span>
                </Link>
              </li>

              <li>
                <FooterLink to="/blog">Blog</FooterLink>
              </li>

              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Social Media
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              {[
                ["X / Twitter", "https://x.com"],
                ["LinkedIn", "https://www.linkedin.com"],
                ["GitHub", "https://github.com"],
                ["Instagram", "https://www.instagram.com"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ResumeIQ. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
        {title}
      </h4>

      <ul className="space-y-3 text-sm text-slate-400">
        {links.map(([label, path]) => (
          <li key={path}>
            <FooterLink to={path}>{label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="hover:text-blue-400 transition-colors">
      {children}
    </Link>
  );
}
