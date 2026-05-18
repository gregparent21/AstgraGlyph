const PDF_PATH = "/artist-statement.pdf";

export default function ArtistStatement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Artist statement</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40 shadow-lg">
        <object
          data={PDF_PATH}
          type="application/pdf"
          className="h-[min(70vh,720px)] w-full bg-slate-900"
          aria-label="Artist statement PDF"
        >
          <div className="space-y-4 p-6 text-sm text-slate-300">
            <p>
              PDF preview is not available in this browser. Open or download the
              file using the links below.
            </p>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-500/20"
            >
              Open artist statement (PDF)
            </a>
          </div>
        </object>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={PDF_PATH}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-2 text-sm text-slate-200 hover:border-cyan-500/40 hover:bg-slate-900/40"
        >
          Open in new tab
        </a>
        <a
          href={PDF_PATH}
          download
          className="rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-2 text-sm text-slate-200 hover:border-violet-500/40 hover:bg-slate-900/40"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
