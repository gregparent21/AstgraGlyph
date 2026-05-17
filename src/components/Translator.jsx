import { useMemo, useState } from "react";
import GlyphOutput from "./GlyphOutput.jsx";
import { translateToAstraGlyph } from "../utils/translate.js";
import { DEFAULT_EXAMPLES } from "../data/translatorRules.js";

export default function Translator() {
  const [input, setInput] = useState(DEFAULT_EXAMPLES[0]);

  const tokens = useMemo(() => translateToAstraGlyph(input), [input]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Translator</h2>
        <p className="text-sm text-slate-300">
          Logograms for known concepts; phonetics for everything else.
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          English input
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          className="w-full resize-y rounded-2xl border border-slate-800 bg-slate-950/40 p-3 text-sm text-slate-100 shadow-sm outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-400/20"
          placeholder="Try: The ship enters the gate"
        />
        <div className="flex flex-wrap gap-2">
          {DEFAULT_EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              className="rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-200 hover:border-violet-500/40 hover:bg-slate-900/40"
              onClick={() => setInput(ex)}
            >
              {ex}
            </button>
          ))}
          <button
            type="button"
            className="rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-500/60 hover:bg-slate-900/40"
            onClick={() => setInput("")}
          >
            Clear
          </button>
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Output
            </div>
            <div className="text-sm text-slate-300">
              {tokens.length} glyph{tokens.length === 1 ? "" : "s"}
            </div>
          </div>
          <div className="text-xs text-slate-500">
            Tip: Try names like “Astra” to see phonetics.
          </div>
        </div>
        <GlyphOutput tokens={tokens} />
      </div>
    </div>
  );
}

