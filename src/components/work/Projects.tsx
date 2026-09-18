import projects from '@/data/projects.json'
import { ExternalLink, Star } from "lucide-react";

const languageColor: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Go: "bg-cyan-500",
};

export function Project() {
  const visible = projects.filter(
    (p) => !(p as { disabled?: boolean }).disabled,
  );

  return (
    <section className="w-full min-w-0">
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h2 className="font-noto text-xl font-semibold sm:text-2xl">Selected Projects</h2>
        <span className="font-mono text-xs text-muted-foreground">
          {String(visible.length).padStart(2, "0")} pinned
        </span>
      </div>

      <div className="divide-y divide-border border-b border-border">
        {visible.map((project) => {
          const stars = (project as { stars?: number }).stars ?? 0;
          const language = (project as { language?: string }).language;
          const stack = project.stack.filter((tech) => tech !== language);

          return (
            <article key={project.title} className="group min-w-0 py-5 sm:py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 break-words font-noto text-lg font-bold sm:text-xl">
                  {project.title}
                  {stars >= 2 ? (
                    <span className="flex shrink-0 items-center gap-1 font-mono text-xs font-normal text-muted-foreground">
                      <Star size={14} /> {stars}
                    </span>
                  ) : null}
                </h3>
                <div className="flex shrink-0 items-center gap-x-4 gap-y-2 text-sm">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline text-primary"
                    >
                      <ExternalLink size={16} /> Visit
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline text-primary"
                    >
                      <ExternalLink size={16} /> Code
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-1 max-w-prose break-words font-noto text-sm leading-6 text-muted-foreground sm:text-base">
                {project.description}
              </p>

              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                {language ? (
                  <span className="flex items-center gap-1.5 font-noto text-xs text-muted-foreground">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${languageColor[language] ?? "bg-muted-foreground"}`}
                    />
                    {language}
                  </span>
                ) : null}
                {stack.map((tech) => (
                  <span key={tech} className="bg-muted px-2 py-0.5 rounded font-noto text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
