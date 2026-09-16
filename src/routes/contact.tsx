import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";

const title = "Contact ROC Nation Africa";
const description =
  "Get in touch with ROC Nation Africa about vStarz, ROC Nation Networks, ROC Nation Africa Records, bookings or partnerships.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="ROC Nation Africa"
        title="Partner With Us"
        intro="Artist enquiries, vStarz questions, sponsorships, brand partnerships, bookings and media requests — send them here and the team will come back to you."
      />
      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-5 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <a href="mailto:info@rocnationafrica.com" className="hover:text-brand">
              info@rocnationafrica.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <a href="tel:+27794999885" className="hover:text-brand">
              +27 79 499 9885
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            www.rocnationafrica.com
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            Durban | Johannesburg | Cape Town
          </li>
        </ul>

        <EnquiryForm
          fields={[
            { id: "name", label: "Full name" },
            { id: "organisation", label: "Artist / organisation", optional: true },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Phone", type: "tel", optional: true },
          ]}
          messageLabel="How can we help?"
          submitLabel="Send Enquiry"
        />
      </section>
    </>
  );
}
