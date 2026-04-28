import Translator from "../components/Translator.jsx";
import GlyphPalette from "../components/GlyphPalette.jsx";
import ExplanationPanel from "../components/ExplanationPanel.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl p-4 md:p-6">
        <header className="mb-4 md:mb-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                AstraGlyph
              </h1>
              <p className="text-sm text-slate-300">
                English → hybrid logogram/phonetic sci‑fi script
              </p>
            </div>
            <div className="text-xs text-slate-400">
              ARKEO 2812 • Hieroglyphs to HTML
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_1fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 shadow-lg backdrop-blur">
            <Translator />
          </section>

          <aside className="grid gap-4">
            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 shadow-lg backdrop-blur">
              <GlyphPalette />
            </section>
            <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 shadow-lg backdrop-blur">
              <ExplanationPanel />
            </section>
          </aside>
        </main>

        <footer className="mt-6 text-xs text-slate-500">
          Built as a presentation-friendly demonstration: meaning (logograms) +
          sound (phonetics).
        </footer>
      </div>
    </div>
  );
}

