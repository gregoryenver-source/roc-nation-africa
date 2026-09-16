import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import entRecords from "@/assets/ent-records.jpg";

const title = "ROC Nation Africa Records | Recording, Distribution & Artist Management";
const description =
  "ROC Nation Africa Records is the label arm of ROC Nation Africa — recording, production, distribution, publishing and artist management for African talent.";

export const Route = createFileRoute("/records")({
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
  component: Records,
});

const services = [
  {
    t: "Recording & Production",
    c: "Studio recording, production and mixing with experienced producers and engineers.",
  },
  {
    t: "Digital Distribution",
    c: "Release to every major streaming and download platform, with royalty reporting.",
  },
  {
    t: "Publishing",
    c: "Rights registration, sync licensing and royalty collection so writers get paid.",
  },
  {
    t: "Artist Management",
    c: "Career strategy, bookings, brand partnerships and day-to-day management.",
  },
  {
    t: "Visual Content",
    c: "Music videos, cover art, press shots and social content produced in-house.",
  },
  { t: "Live & Touring", c: "Show routing, festival placement and live production support." },
];

function Records() {
  return (
    <>
      <PageHero
        eyebrow="ROC Nation Africa"
        title="ROC Nation Africa Records"
        intro="The label arm of ROC Nation Africa. We record, release, promote and manage the artists we discover — from first demo to international release."
      />

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <img
          src={entRecords}
          alt="Studio microphone and mixing desk"
          loading="lazy"
          className="w-full rounded-sm object-cover"
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl font-light text-foreground">Everything an Artist Needs</h2>
        <div className="rule-brand mt-5" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="surface-panel rounded-sm p-7">
              <h3 className="text-lg font-medium text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="eyebrow">Roster</p>
          <h2 className="mt-3 text-3xl font-light text-foreground">Our Artists</h2>
          <div className="rule-brand mt-5" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Our first signings come out of vStarz. Send us the artist names, photos and links
            you'd like listed here and we'll build the roster page around them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <p className="eyebrow">Demo Submission</p>
        <h2 className="mt-3 text-3xl font-light text-foreground">Send Us Your Music</h2>
        <div className="rule-brand mt-5" />
        <div className="mt-8 max-w-3xl">
          <EnquiryForm
            fields={[
              { id: "name", label: "Artist / band name" },
              { id: "contact", label: "Contact person" },
              { id: "email", label: "Email", type: "email" },
              { id: "link", label: "Link to your music", type: "url" },
            ]}
            messageLabel="Tell us about your sound and where you are in your career"
            submitLabel="Submit Demo"
            confirmation="Thank you — your demo is in. Our A&R team listens to every submission."
          />
        </div>
      </section>
    </>
  );
}
