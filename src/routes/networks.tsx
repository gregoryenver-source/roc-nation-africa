import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import entMobile from "@/assets/ent-mobile.jpg";
import networksLogo from "@/assets/networks-logo.png";

const title = "ROC Nation Networks | Entertainment-First Mobile Network";
const description =
  "ROC Nation Networks is ROC Nation Africa's mobile network offering — data, voice and entertainment bundles built for fans, creators and the vStarz talent contest.";

export const Route = createFileRoute("/networks")({
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
  component: Networks,
});

const benefits = [
  {
    t: "Entertainment Bundles",
    c: "Data bundles built around streaming, voting and uploading — not general browsing.",
  },
  {
    t: "Free Contest Entry",
    c: "Subscribers enter vStarz at no cost and vote without using data.",
  },
  {
    t: "Creator Data",
    c: "Uncapped upload allowances for artists and creators publishing to our platforms.",
  },
  {
    t: "Fair Pricing",
    c: "Prepaid-first pricing with no contracts and no expiry on unused entertainment data.",
  },
  {
    t: "Artist Revenue Share",
    c: "A share of bundle revenue flows back to the artists our subscribers stream.",
  },
  {
    t: "International Coverage",
    c: "Riding on established international network infrastructure for wide coverage from day one.",
  },
];

const plans = [
  {
    t: "Fan",
    c: "Everyday data and voice with streaming and voting included.",
    note: "Pricing to be confirmed",
  },
  {
    t: "Creator",
    c: "Higher upload allowance, studio partner discounts and priority support.",
    note: "Pricing to be confirmed",
  },
  {
    t: "Artist Pro",
    c: "For signed and independent artists: uncapped uploads plus distribution credits.",
    note: "Pricing to be confirmed",
  },
];

const palette = [
  { name: "Signal Crimson", hex: "#C00000", note: "Energy, passion and the ROC Nation brand" },
  { name: "Metallic Silver", hex: "#B8BDC4", note: "Technology, precision and premium quality" },
  { name: "Midnight Charcoal", hex: "#1D2126", note: "Cinematic depth and sophistication" },
];

function Networks() {
  return (
    <>
      <PageHero
        eyebrow="ROC Nation Africa"
        title="ROC Nation Networks"
        intro="Our own mobile network offering, built entertainment-first. ROC Nation Networks connects fans to the artists they support and gives creators the data they actually need."
      >
        <div className="mt-14 inline-flex">
          <img src={networksLogo} alt="ROC Nation Networks logo" className="w-52 sm:w-64" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <img
          src={entMobile}
          alt="Smartphone with glowing network signal"
          loading="lazy"
          className="w-full rounded-sm object-cover"
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6">
        <p className="eyebrow">Why ROC Nation Networks</p>
        <h2 className="mt-3 text-3xl font-light text-foreground">A Network Built Around Talent</h2>
        <div className="rule-brand mt-5" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.t} className="surface-panel rounded-sm p-7">
              <h3 className="text-lg font-medium text-foreground">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="eyebrow">Planned Packages</p>
          <h2 className="mt-3 text-3xl font-light text-foreground">Three Ways to Join</h2>
          <div className="rule-brand mt-5" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.t} className="surface-panel rounded-sm p-7">
                <h3 className="text-xl font-light tracking-[0.06em] text-foreground">{p.t}</h3>
                <div className="rule-brand mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.c}</p>
                <p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <p className="eyebrow">Visual Identity</p>
        <h2 className="mt-3 text-3xl font-light text-foreground">
          The ROC Nation Networks Brand
        </h2>
        <div className="rule-brand mt-5" />
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <div className="flex justify-center rounded-sm border border-border/40 bg-foreground/[0.03] px-8 py-12">
            <img
              src={networksLogo}
              alt="ROC Nation Networks logo"
              loading="lazy"
              className="w-full max-w-sm"
            />
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              The ROC Nation Networks mark pairs the continent's outline with a rising crimson
              signal arc: the strength of our heritage meeting the reach of a modern mobile
              network.
            </p>
            <div className="mt-8 space-y-4">
              {palette.map((c) => (
                <div key={c.name} className="flex items-center gap-4">
                  <span
                    className="h-10 w-10 shrink-0 rounded-sm border border-border"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {c.name} <span className="text-muted-foreground">· {c.hex}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <p className="eyebrow">Register Interest</p>
        <h2 className="mt-3 text-3xl font-light text-foreground">Get Your SIM First</h2>
        <div className="rule-brand mt-5" />
        <div className="mt-8 max-w-3xl">
          <EnquiryForm
            fields={[
              { id: "name", label: "Full name" },
              { id: "email", label: "Email", type: "email" },
              { id: "phone", label: "Current mobile number", type: "tel" },
              { id: "city", label: "City / town" },
            ]}
            messageLabel="Which package interests you and why?"
            submitLabel="Register Interest"
            confirmation="Thank you — we'll notify you as soon as ROC Nation Networks SIMs are available."
          />
        </div>
      </section>
    </>
  );
}
