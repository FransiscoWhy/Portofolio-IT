import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>

      {/* <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Lihat implementasinya di <a href="#projects" className="underline">LinkedIn</a>.
      </p> */}
    </div>

    
  );
}
