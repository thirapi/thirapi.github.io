import projects from '@/data/projects.json'
import { ExternalLink, Lock } from "lucide-react";

export function Project() {
  return (
    <section className="my-4 w-full max-w-3xl min-w-0">
      <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h2 className="text-xl font-semibold sm:text-2xl">Selected Projects</h2>
        <span className="font-doto text-xs text-muted-foreground">01—01</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {projects
        .filter((projects) => (!projects.disabled))
        .map((project) => (
          <article key={project.title} className="group flex min-w-0 flex-col rounded-lg border bg-white p-4 shadow-sm transition-colors hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900/75 sm:p-5">
            <h3 className="break-words text-xl font-bold">{project.title}</h3>
            <p className="mt-2 break-words text-sm leading-6 text-muted-foreground sm:text-base">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-sm mt-2">
              {project.stack.map((tech) => (
                <span key={tech} className="bg-muted px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-primary"
                >
                  <ExternalLink size={16} /> Visit
                </a>
              ) : (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Lock size={16} /> Visit (Private)
                </span>
              )}

              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-primary"
                >
                  <ExternalLink size={16} /> Code
                </a>
              ) : (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Lock size={16} /> Code (Private)
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
