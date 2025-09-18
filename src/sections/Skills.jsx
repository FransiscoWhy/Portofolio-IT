// src/sections/Skills.jsx
export default function Skills() {
  const groups = [
    {
      title: "Frontend Development",
      items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      items: ["Laravel", "PHP", "Python", "Flask", "REST API", "MySQL"],
    },
    {
      title: "Version Control & Collaboration",
      items: ["Git", "GitHub", "Jira"],
    },
  ];

  return (
    <section className="space-y-6" aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-2xl font-bold">Technical Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-5 rounded-[var(--radius-xl)] border dark:border-zinc-800 bg-white dark:bg-zinc-900"
          >
            <div className="text-sm font-semibold mb-3">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-2 py-1 text-xs rounded bg-brand-50 dark:bg-zinc-800"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        See the implementation in <a href="#projects" className="underline">Projects</a>.
      </p>
    </section>
  );
}
