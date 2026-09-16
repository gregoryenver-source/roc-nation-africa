import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clapperboard,
  Disc3,
  Globe2,
  Mic2,
  Music4,
  Smartphone,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import entTalent from "@/assets/ent-talent.jpg";
import vstarzPoster from "@/assets/vstarz-poster.jpg";
import vstarzLogo from "@/assets/vstarz-logo.png";
import entMobile from "@/assets/ent-mobile.jpg";
import networksLogo from "@/assets/networks-logo.png";
import entRecords from "@/assets/ent-records.jpg";

const title = "ROC Nation Africa | Africa's Next Entertainment Powerhouse";
const description =
  "Creating, developing and commercialising world-class talent, music, digital entertainment and cultural experiences across Africa and beyond. Home of vStarz, ROC Nation Networks and ROC Nation Africa Records.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    to: "/vstarz",
    label: "vStarz powered by ROC Nation Networks & Ignition",
    icon: Mic2,
    logo: vstarzLogo,
    image: vstarzPoster,
    blurb:
      "The world's next generation talent platform — discovering, showcasing and launching the stars of tomorrow from Africa and around the world.",
  },
  {
    to: "/networks",
    label: "ROC Nation Networks",
    icon: Smartphone,
    logo: networksLogo,
    image: entMobile,
    blurb:
      "Our own mobile network offering — data, voice and entertainment bundles built around fans and creators.",
  },
  {
    to: "/records",
    label: "ROC Nation Africa Records",
    icon: Music4,
    logo: null,
    image: entRecords,
    blurb:
      "Recording, publishing, distribution, licensing and content monetisation for the artists we discover and sign.",
  },
] as const;

const operations = [
  {
    icon: Users,
    t: "Artist Development",
    c: "Professional mentoring, branding, career management and commercial growth strategies.",
  },
  {
    icon: Disc3,
    t: "Music & Audio",
    c: "Recording, publishing, distribution, licensing and content monetisation.",
  },
  {
    icon: Clapperboard,
    t: "Digital Entertainment",
    c: "Mobile platforms, streaming experiences and audience engagement solutions.",
  },
  {
    icon: Ticket,
    t: "Live Events",
    c: "Concerts, showcases, festivals, conferences and entertainment experiences.",
  },
  {
    icon: Sparkles,
    t: "Talent Discovery",
    c: "Finding exceptional voices, performers and creators through vStarz and strategic partnerships.",
  },
  {
    icon: Globe2,
    t: "Brand Partnerships",
    c: "Connecting brands with talent, culture and engaged audiences across Africa.",
  },
];

const partnerships = [
  "Sponsorships",
  "Brand Integrations",
  "Product Placement",
  "Digital Campaigns",
  "Talent Collaborations",
  "Event Partnerships",
  "Content Production",
  "Influencer Campaigns",
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={entTalent}
          alt="Performer on stage under crimson lights"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 to-background" />
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28">
          <p className="eyebrow">ROC Nation Africa</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Africa's Next Entertainment Powerhouse
          </h1>
          <div className="rule-brand mt-5" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Creating, developing and commercialising world-class talent, music, digital
            entertainment and cultural experiences across Africa and beyond. We connect
            exceptional talent with global audiences through innovative platforms, strategic
            partnerships and cutting-edge digital solutions.
          </p>
          <p className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand">
            Discover Talent. Create Culture. Build Legacy.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/vstarz"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-deep"
            >
              Explore vStarz <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brand"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
        <p className="eyebrow">About ROC Nation Africa</p>
        <h2 className="mt-3 text-3xl font-light text-foreground">
          Building Africa's Entertainment Future
        </h2>
        <div className="rule-brand mt-5" />
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          At ROC Nation Africa, we believe extraordinary talent exists everywhere. Our mission
          is to discover, develop and elevate artists, creators and performers through
          world-class entertainment experiences and innovative digital platforms.
        </p>
        <p className="mt-8 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          We operate across
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operations.map((o) => (
            <div key={o.t} className="surface-panel rounded-sm p-7">
              <o.icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 text-lg font-medium text-foreground">{o.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-3 text-3xl font-light text-foreground">Three Ventures, One Stage</h2>
          <div className="rule-brand mt-5" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group surface-panel overflow-hidden rounded-sm transition-colors hover:border-brand"
              >
                <img
                  src={p.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-44 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <div className="p-7">
                  {p.logo ? (
                    <span className="inline-flex">
                      <img
                        src={p.logo}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-14 w-14 object-contain"
                      />
                    </span>
                  ) : (
                    <p.icon className="h-6 w-6 text-brand" />
                  )}
                  <h3 className="mt-4 text-lg font-medium text-foreground">{p.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
        <p className="eyebrow">Our Vision</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-light text-foreground">
          Creating Africa's Largest Entertainment Ecosystem
        </h2>
        <div className="rule-brand mt-5" />
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          We envision a future where talent is no longer limited by geography, access or
          opportunity. vStarz and ROC Nation Africa are building a platform where creators can
          be discovered, developed and connected to global opportunities from anywhere in
          Africa. Our goal is to become the continent's leading destination for entertainment,
          talent discovery and digital creativity.
        </p>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
          <p className="eyebrow">For Brands &amp; Partners</p>
          <h2 className="mt-3 text-3xl font-light text-foreground">Connect With Culture</h2>
          <div className="rule-brand mt-5" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Partner with ROC Nation Africa and vStarz to engage highly active audiences through
            authentic entertainment experiences.
          </p>
          <p className="mt-8 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Partnership Opportunities
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerships.map((p) => (
              <li
                key={p}
                className="rounded-sm border border-border px-4 py-3 text-sm text-muted-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-deep"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Ready To Become A Star?</p>
          <h2 className="mt-3 text-3xl font-light text-foreground">
            Where Talent Meets Opportunity
          </h2>
          <div className="rule-brand mt-5" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Join thousands of talented performers and creators who are shaping the future of
            entertainment. Whether you're an aspiring artist, content creator, sponsor or
            industry partner, your journey starts here.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/vstarz"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-deep"
            >
              Join The Competition <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brand"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
