import TechStackData from "@/data/tech-stack.json";
import { iconMap } from "@/lib/icon-map";
import Marquee from "react-fast-marquee";

const renderItems = () =>
  TechStackData.map(({ name, icon }) => {
    const Icon = iconMap[icon];
    return (
      <div
        key={name}
        className="flex items-center gap-2 bg-muted/20 px-3 py-1 rounded shadow-sm mx-2"
      >
        {Icon && <Icon className="text-xl" />}
        <span className="text-sm">{name}</span>
      </div>
    );
  });

export function TechStack() {
  return (
    <section className="my-4 min-w-0">
      <div className="mb-5 border-b border-border pb-3">
        <h2 className="text-xl font-semibold sm:text-2xl">What I Use</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tools I reach for most often.</p>
      </div>

      <div className="hidden grid-cols-2 gap-3 sm:grid">
        {TechStackData.map(({ name, icon }) => {
          const Icon = iconMap[icon];
          return (
            <div
              key={name}
              className="flex min-w-0 items-center gap-2 rounded-md px-2 py-2 transition-colors duration-200 hover:bg-muted/60"
            >
              {Icon && <Icon className="text-xl" />}
              <span className="truncate text-sm">{name}</span>
            </div>
          );
        })}
      </div>

      <div className="sm:hidden w-[calc(100%+2rem)] -translate-x-4 overflow-hidden py-1">
        <Marquee speed={30} gradient={false} pauseOnHover>
          {renderItems()}
        </Marquee>
        <Marquee
          className="py-4"
          speed={30}
          gradient={false}
          direction="right"
          pauseOnHover
        >
          {renderItems()}
        </Marquee>
      </div>
    </section>
  );
}
