// E:\Portofolio\my-portfolio\src\components\ProjectCard.jsx
export default function ProjectCard({ p }) {
  const isValid = (url) => url && url !== "#" && url.trim() !== "";
  const pills = p.tags?.length ? p.tags : (p.stack || []);

  return (
    <article className="overflow-hidden rounded-[var(--radius-xl)] border bg-white dark:bg-zinc-900 dark:border-zinc-800 hover:shadow transition group">
      {/* Project profile (gambar di ATAS) */}
      {p.image && (
        <div className="relative overflow-hidden">
          <img
            src={p.image}
            alt={`${p.title} preview`}
            className="w-full h-52 md:h-60 object-cover group-hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        </div>
      )}

      {/* Body */}
      <div className="p-5">
        <h3 className="font-semibold text-lg">{p.title}</h3>

        {(p.longDesc || p.desc) && (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {p.longDesc || p.desc}
          </p>
        )}

        {(p.role || p.period) && (
          <div className="mt-2 text-xs text-zinc-500">
            {p.role && <span className="mr-2">{p.role}</span>}
            {p.period && <span>• {p.period}</span>}
          </div>
        )}

        {pills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {pills.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded bg-brand-50 dark:bg-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {isValid(p.demo) && (
            <a
              href={p.demo}
              // target="_blank"
              // rel="noopener noreferrer"
              // className="inline-flex items-center gap-2 px-3 py-2 rounded-[var(--radius-xl)] border dark:border-zinc-700 hover:bg-brand-50 dark:hover:bg-zinc-800"
              // title="Visit Website"
            >
              {/* external-link icon */}
              {/* <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h7v2H7v10h10v-5h2v7H5V5z"></path>
              </svg> */}
              {/* <span>Visit Website</span> */}
            </a>
          )}

          {isValid(p.code) && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-[var(--radius-xl)] bg-brand-500 hover:bg-brand-700 text-white"
              title="View code on GitHub"
            >
              {/* GitHub icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.43c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.93.43.37.83 1.09.83 2.22v3.29c0 .32.2.69.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
