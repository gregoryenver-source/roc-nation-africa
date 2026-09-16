import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  DollarSign,
  Globe2,
  Smartphone,
  ThumbsUp,
  Trophy,
  Users,
} from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import vstarzLogo from "@/assets/vstarz-logo.png";
import vstarzStage from "@/assets/vstarz-stage.jpg";
import vstarzPoster from "@/assets/vstarz-poster.jpg";

const title = "vStarz powered by ROC Nation Networks & Ignition | Africa's Next Superstars";
const description =
  "vStarz powered by ROC Nation Networks & Ignition is Africa's next generation talent platform — discovering, showcasing and launching the stars of tomorrow through digital competition, community voting and global partnerships.";

export const Route = createFileRoute("/vstarz")({
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
  component: VStarz,
});

const categories = [
  "Singing",
  "Dancing",
  "Acting",
  "Comedy",
  "Spoken Word",
  "Influencers",
  "Content Creators",
  "DJs",
  "Musicians",
  "Special Talent",
];

const whyVStarz = [
  {
    icon: Globe2,
    t: "Global Visibility",
    c: "Gain exposure to audiences, brands, labels and industry professionals worldwide.",
  },
  {
    icon: ThumbsUp,
    t: "Community Voting",
    c: "Build your fanbase and engage supporters through interactive voting.",
  },
  {
    icon: Trophy,
    t: "Industry Recognition",
    c: "Be discovered by music executives, talent scouts and entertainment professionals.",
  },
  {
    icon: Users,
    t: "Career Opportunities",
    c: "Unlock access to mentorship, sponsorships, performances and commercial partnerships.",
  },
  {
    icon: DollarSign,
    t: "Monetisation Opportunities",
    c: "Turn your talent into a sustainable career through multiple revenue streams.",
  },
  {
    icon: Smartphone,
    t: "Mobile First Experience",
    c: "Compete, engage and grow your audience directly from your smartphone.",
  },
];

function VStarz() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={vstarzStage}
          alt="Performer standing beneath crimson lights on the vStarz stage"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 to-background" />
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <img
            src={vstarzLogo}
            alt="vStarz logo"
            className="w-52 sm:w-64"
          />
          <p className="eyebrow mt-8">
            Powered by ROC Nation Networks &amp; Ignition
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Discovering Africa's Next Global Superstars
          </h1>
          <div className="rule-brand mt-5" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Where dreams become global stars. vStarz is an innovative digital talent
            competition and entertainment platform designed to discover, showcase and launch
            the next generation of singers, dancers, creators, performers and entertainers
            from Africa and around the world.
          </p>
          <p className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand">
            Your Stage. Your Voice. Your Moment.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-deep"
            >
              Register Your Interest
            </a>
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
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">About vStarz</p>
            <h2 className="mt-3 text-3xl font-light text-foreground">
              More Than A Talent Competition
            </h2>
            <div className="rule-brand mt-5" />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              vStarz is a complete entertainment ecosystem built to identify and launch
              tomorrow's stars. Participants can showcase their talents through video
              submissions, live challenges, audience voting and expert judging while building
              a loyal fanbase and unlocking career opportunities. Through technology,
              community engagement and industry partnerships, vStarz gives undiscovered talent
              direct access to audiences, opportunities and career-changing exposure.
            </p>
            <p className="mt-8 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Talent Categories
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {categories.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-sm border border-border px-4 py-3 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={vstarzPoster}
            alt="vStarz digital talent competition emblem"
            loading="lazy"
            className="mx-auto w-full max-w-xs rounded-sm border border-border shadow-[var(--shadow-brand)]"
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20">
          <p className="eyebrow">Why vStarz</p>
          <h2 className="mt-3 text-3xl font-light text-foreground">
            A Platform Designed For Success
          </h2>
          <div className="rule-brand mt-5" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyVStarz.map((w) => (
              <div key={w.t} className="surface-panel rounded-sm p-7">
                <w.icon className="h-6 w-6 text-brand" />
                <h3 className="mt-4 text-lg font-medium text-foreground">{w.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.c}</p>
              </div>
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
          Africa — the continent's leading destination for entertainment, talent discovery and
          digital creativity.
        </p>
      </section>

      <section id="register" className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6">
        <p className="eyebrow">Ready To Become A Star?</p>
        <h2 className="mt-3 text-3xl font-light text-foreground">
          Be First to Know When Entries Open
        </h2>
        <div className="rule-brand mt-5" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Join thousands of talented performers and creators who are shaping the future of
          entertainment. Register your interest and your journey starts here.
        </p>
        <div className="mt-8 max-w-3xl">
          <EnquiryForm
            fields={[
              { id: "name", label: "Full name" },
              { id: "email", label: "Email", type: "email" },
              { id: "phone", label: "Mobile number", type: "tel" },
              { id: "category", label: "Talent category" },
            ]}
            messageLabel="Tell us about your talent"
            submitLabel="Join The Competition"
            confirmation="Thank you — you're on the list. We'll message you the moment entries open."
          />
        </div>
      </section>
    </>
  );
}
