import { useMemo, useState } from "react";
import { logograms } from "../data/logograms.js";
import { phonetics } from "../data/phonetics.js";
import GlyphCard from "./GlyphCard.jsx";

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key] || "other";
    acc[k] = acc[k] || [];
    acc[k].push(item);
    return acc;
  }, {});
}

export default function GlyphPalette() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { logograms, phonetics };

    return {
      logograms: logograms.filter((g) => {
        const hay = [
          g.id,
          g.label,
          g.gloss,
          g.category,
          ...(g.keywords || [])
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      }),
      phonetics: phonetics.filter((p) => {
        const hay = [p.id, p.sound, p.category, p.example]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
    };
  }, [query]);

  const logogramGroups = useMemo(
    () => groupBy(filtered.logograms, "category"),
    [filtered.logograms]
  );
  const phoneticGroups = useMemo(
    () => groupBy(filtered.phonetics, "category"),
    [filtered.phonetics]
  );

  const sectionOrder = [
    ["space", "Space"],
    ["technology", "Technology"],
    ["life", "Life"],
    ["abstract", "Abstract"]
  ];

  const phoneticOrder = [
    ["vowel", "Vowels"],
    ["consonant", "Consonants"],
    ["blend", "Blends"]
  ];

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Glyph palette</h2>
        <p className="text-sm text-slate-300">
          Browse logograms and phonetics (click-to-build is optional and not yet
          enabled).
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Search
        </label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-400/20"
          placeholder="Try: ship, void, th, vowel..."
        />
      </div>

      <div className="space-y-4">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Logograms
          </div>
          <div className="space-y-3">
            {sectionOrder.map(([key, label]) => {
              const items = logogramGroups[key] || [];
              if (!items.length) return null;
              return (
                <div key={key}>
                  <div className="mb-2 text-sm font-semibold text-slate-200">
                    {label}
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {items.map((g) => (
                      <GlyphCard key={g.id} glyph={g} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Phonetics
          </div>
          <div className="space-y-3">
            {phoneticOrder.map(([key, label]) => {
              const items = phoneticGroups[key] || [];
              if (!items.length) return null;
              return (
                <div key={key}>
                  <div className="mb-2 text-sm font-semibold text-slate-200">
                    {label}
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {items.map((p) => (
                      <GlyphCard key={p.id} glyph={p} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

