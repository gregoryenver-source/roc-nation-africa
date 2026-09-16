import { useState } from "react";

type Field = { id: string; label: string; type?: string; optional?: boolean };

export function EnquiryForm({
  fields,
  messageLabel = "Tell us more",
  submitLabel = "Send",
  confirmation = "Thank you — we've captured your details and will be in touch shortly.",
}: {
  fields: Field[];
  messageLabel?: string;
  submitLabel?: string;
  confirmation?: string;
}) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="surface-panel rounded-sm p-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.id}>
            <label
              htmlFor={f.id}
              className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground"
            >
              {f.label}
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type ?? "text"}
              required={!f.optional}
              className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand"
            />
          </div>
        ))}
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground"
        >
          {messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex rounded-sm bg-brand px-6 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-deep"
      >
        {submitLabel}
      </button>
      {sent ? <p className="mt-4 text-sm text-brand">{confirmation}</p> : null}
    </form>
  );
}
