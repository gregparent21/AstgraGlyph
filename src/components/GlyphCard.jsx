import { useMemo, useState } from "react";

export default function GlyphCard({ glyph, variant = "palette", onClick }) {
  const [imgOk, setImgOk] = useState(true);

  const subtitle = useMemo(() => {
    if (!glyph) return "";
    if (glyph.type === "logogram") return glyph.gloss;
    return glyph.sound || glyph.gloss || glyph.label;
  }, [glyph]);

  const title = glyph?.label || glyph?.sound || glyph?.id || "Glyph";

  const clickable = typeof onClick === "function";

  return (
    <button
      type="button"
      onClick={() => onClick?.(glyph)}
      className={[
        "group w-full rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-left shadow-sm transition",
        clickable
          ? "hover:border-cyan-500/50 hover:bg-slate-900/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          : "cursor-default",
        variant === "output" ? "p-2" : ""
      ].join(" ")}
      disabled={!clickable}
      title={glyph?.description || ""}
    >
      <div className="flex items-start gap-3">
        <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
          {glyph?.image && imgOk ? (
            <img
              src={glyph.image}
              alt={title}
              className="h-10 w-10 opacity-95 invert hue-rotate-180 brightness-110"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="px-2 text-center text-[10px] font-medium tracking-wide text-slate-300">
              {subtitle || title}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold">{title}</div>
          {subtitle ? (
            <div className="mt-0.5 truncate text-xs text-slate-300">
              {subtitle}
            </div>
          ) : null}
          {glyph?.description && variant === "palette" ? (
            <div className="mt-1 line-clamp-2 text-xs text-slate-400">
              {glyph.description}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  );
}

