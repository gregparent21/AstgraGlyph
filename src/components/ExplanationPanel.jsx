export default function ExplanationPanel() {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">How it works</h2>
        <p className="text-sm text-slate-300">
          AstraGlyph is a hybrid science-fiction writing system.
        </p>
      </div>

      <div className="space-y-2 text-sm leading-relaxed text-slate-200">
        <p>
          <span className="font-semibold text-cyan-200">Logograms</span> encode
          meaning directly: concepts like <span className="italic">planet</span>
          , <span className="italic">ship</span>, <span className="italic">AI</span>,{" "}
          <span className="italic">signal</span>, <span className="italic">colony</span>,{" "}
          and <span className="italic">time</span>.
        </p>
        <p>
          <span className="font-semibold text-violet-200">Phonetic glyphs</span>{" "}
          encode sound as a fallback for names and unfamiliar words.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Shape motifs (visual logic)
        </div>
        <ul className="mt-2 space-y-1 text-sm text-slate-200">
          <li>
            <span className="font-semibold">circles</span> = worlds, systems,
            cycles
          </li>
          <li>
            <span className="font-semibold">ellipses</span> = orbits, gates,
            transmission
          </li>
          <li>
            <span className="font-semibold">squares</span> = machines, code,
            storage
          </li>
          <li>
            <span className="font-semibold">triangles</span> = ships, direction,
            action, warning
          </li>
          <li>
            <span className="font-semibold">dots</span> = stars, nodes,
            settlements, individuals
          </li>
          <li>
            <span className="font-semibold">lines</span> = motion, relation,
            connection, signal
          </li>
        </ul>
      </div>

      
    </div>
  );
}

