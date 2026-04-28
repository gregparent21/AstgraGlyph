import { useMemo } from "react";

function groupTokens(tokens) {
  const groups = [];
  for (const t of tokens) {
    const last = groups[groups.length - 1];
    const sameWord =
      last &&
      t.type === "phonetic" &&
      last.type === "phonetic" &&
      t.sourceWord &&
      t.sourceWord === last.sourceWord;

    if (sameWord) {
      last.tokens.push(t);
    } else {
      groups.push({
        type: t.type,
        sourceWord: t.sourceWord,
        tokens: [t]
      });
    }
  }
  return groups;
}

function GlyphTile({ token }) {
  return (
    <div className="grid place-items-center rounded-xl border border-slate-800 bg-slate-950/50 p-3 shadow-sm">
      <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
        {token.image ? (
          <img
            src={token.image}
            alt={token.label}
            className="h-10 w-10 opacity-95"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="px-2 text-center text-[10px] font-medium tracking-wide text-slate-300">
            {token.gloss}
          </div>
        )}
      </div>
      <div className="mt-2 text-center text-[11px] font-semibold tracking-wide text-slate-200">
        {token.gloss}
      </div>
    </div>
  );
}

export default function GlyphOutput({ tokens }) {
  const groups = useMemo(() => groupTokens(tokens || []), [tokens]);

  if (!tokens?.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/30 p-6 text-sm text-slate-400">
        Type an English phrase to see AstraGlyph output.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tokens.map((t, idx) => (
          <GlyphTile key={`${t.type}:${t.id}:${idx}`} token={t} />
        ))}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Gloss
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {groups.map((g, idx) => (
            <span
              key={`${g.type}:${g.sourceWord || idx}`}
              className={[
                "rounded-lg border px-2 py-1 text-xs",
                g.type === "logogram"
                  ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-100"
                  : "border-violet-500/30 bg-violet-500/10 text-violet-100"
              ].join(" ")}
              title={g.sourceWord ? `from “${g.sourceWord}”` : ""}
            >
              {g.tokens.map((t) => t.gloss).join("-")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

