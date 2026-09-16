import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import rocLogo from "@/assets/roc-logo.png.asset.json";
import { siteNav } from "@/lib/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={rocLogo.url}
            alt="ROC Nation Africa"
            width={1536}
            height={1024}
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-brand" }}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-brand px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-deep sm:inline-flex"
          >
            Enquire Now
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-surface px-4 py-4 lg:hidden">
          <ul className="flex flex-col">
            {siteNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-brand" }}
                  className="block border-b border-border/40 py-3 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-sm bg-brand px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground"
          >
            Enquire Now
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
