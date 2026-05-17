import { useState } from "react";
import Translator from "../components/Translator.jsx";
import GlyphPalette from "../components/GlyphPalette.jsx";
import ExplanationPanel from "../components/ExplanationPanel.jsx";
import Sources from "../components/Sources.jsx";
import ArtistStatement from "../components/ArtistStatement.jsx";

const TABS = [
  { id: "translator", label: "Translator" },
  { id: "sources", label: "Sources" },
  { id: "artist", label: "Artist Statement" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("translator");

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

          <nav
            className="mt-4 flex flex-wrap gap-2 border-b border-slate-800 pb-3"
            aria-label="Main sections"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-medium transition",
                  activeTab === tab.id
                    ? "border border-cyan-500/40 bg-cyan-500/10 text-cyan-100"
                    : "border border-transparent text-slate-300 hover:border-slate-700 hover:bg-slate-900/40 hover:text-slate-100"
                ].join(" ")}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </header>

        {activeTab === "translator" ? (
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
        ) : null}

        {activeTab === "sources" ? (
          <main className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 shadow-lg backdrop-blur md:p-6">
            <Sources />
          </main>
        ) : null}

        {activeTab === "artist" ? (
          <main className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 shadow-lg backdrop-blur md:p-6">
            <ArtistStatement />
          </main>
        ) : null}

        <footer className="mt-6 text-xs text-slate-500">
          Built as a presentation-friendly demonstration: meaning (logograms) +
          sound (phonetics).
        </footer>
      </div>
    </div>
  );
}
