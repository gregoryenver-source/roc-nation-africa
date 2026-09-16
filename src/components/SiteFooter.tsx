import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { Wordmark } from "./Wordmark";
import { siteNav } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.1fr_1.1fr]">
        <div>
          <Wordmark size="sm" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Africa's next entertainment powerhouse — home of vStarz powered by ROC Nation
            Networks &amp; Ignition, ROC Nation Networks and ROC Nation Africa Records.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-brand-foreground"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">
            Explore
          </h3>
          <ul className="mt-5 space-y-2.5">
            {siteNav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <a href="mailto:info@rocnationafrica.com" className="hover:text-brand">
                info@rocnationafrica.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              www.rocnationafrica.com
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <a href="tel:+27794999885" className="hover:text-brand">
                +27 79 499 9885
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              Durban | Johannesburg | Cape Town
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">
            Newsletter
          </h3>
          <p className="mt-5 text-sm text-muted-foreground">
            Stay updated with our latest talent, events and releases.
          </p>
          <form
            className="mt-4 flex overflow-hidden rounded-sm border border-border bg-background"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="w-full bg-transparent px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex items-center justify-center bg-brand px-3 text-brand-foreground transition-colors hover:bg-brand-deep"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} ROC Nation Africa. All Rights Reserved.</p>
          <p className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
