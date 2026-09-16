import rocLogo from "@/assets/roc-logo.png.asset.json";

export function Wordmark({
  size = "md",
  showTagline = true,
}: {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}) {
  const mark = size === "lg" ? "h-40" : size === "md" ? "h-24" : "h-16";

  return (
    <div className="flex flex-col items-start">
      <img
        src={rocLogo.url}
        alt="ROC Nation Africa — neon red map of Africa with a diamond above the ROC NATION AFRICA wordmark"
        width={1536}
        height={1024}
        className={`${mark} w-auto object-contain`}
      />
      {showTagline ? (
        <span className="mt-3 text-[0.6rem] font-medium tracking-[0.28em] text-muted-foreground">
          MUSIC <span className="text-brand">|</span> PEOPLE{" "}
          <span className="text-brand">|</span> CULTURE{" "}
          <span className="text-brand">|</span> OPPORTUNITY
        </span>
      ) : null}
    </div>
  );
}
