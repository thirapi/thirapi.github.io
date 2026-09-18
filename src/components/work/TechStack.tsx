import TechStackData from "@/data/tech-stack.json";
import { iconMap } from "@/lib/icon-map";

export function TechStack() {
  return (
    <section className="w-full min-w-0">
      <div className="mb-4 border-b border-border pb-3 sm:mb-5">
        <h2 className="font-noto text-xl font-semibold sm:text-2xl">What I Use</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {TechStackData.map(({ name, icon }) => {
          const Icon = iconMap[icon];
          return (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 rounded bg-muted px-2.5 py-1 font-noto text-xs transition-colors hover:bg-muted/60"
            >
              {Icon && <Icon className="shrink-0 text-sm" />}
              {name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
