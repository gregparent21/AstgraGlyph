import { sources } from "../data/sources.js";

export default function Sources() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Sources</h2>
        <p className="mt-1 text-sm text-slate-300">
          Research and references that informed AstraGlyph. Edit{" "}
          <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs text-cyan-200">
            src/data/sources.js
          </code>{" "}
          with your descriptions and MLA citations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sources.map((source) => (
          <article
            key={source.id}
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 shadow-lg"
          >
            <h3 className="text-base font-semibold text-slate-100">
              {source.title}
            </h3>

            <div className="mt-4 space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Influence on this project
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {source.description}
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  MLA citation
                </div>
                <p className="mt-2 font-mono text-sm leading-relaxed text-slate-300">
                  {source.mla}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
