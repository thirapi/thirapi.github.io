// components/Navbar.tsx
import { useEffect, useState } from "react";
import { Home, Mail, Briefcase, FileText } from "lucide-react";

const links = [
  { name: "Home", href: "/", Icon: Home },
  { name: "Contact", href: "/contact", Icon: Mail },
  { name: "Work", href: "/work", Icon: Briefcase },
  { name: "Resume", href: "/resume", Icon: FileText },
];

export default function Navbar() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    sync();
    document.addEventListener("astro:after-swap", sync);
    return () => document.removeEventListener("astro:after-swap", sync);
  }, []);

  return (
    <header className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 bg-background/80 backdrop-blur-md rounded-xl shadow-md px-4 py-2.5 w-fit flex items-center gap-4 border border-border sm:px-6">
      <nav className="flex items-center gap-4 text-sm font-semibold font-mono tracking-wide sm:gap-6">
        {links.map(({ name, href, Icon }) =>
          href ? (
            <a
              key={name}
              href={href}
              aria-current={path === href ? "page" : undefined}
              className={`flex items-center gap-1.5 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                path === href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{name}</span>
            </a>
          ) : (
            <span
              key={name}
              title="Coming soon"
              className="flex items-center gap-1.5 text-muted-foreground opacity-50 cursor-not-allowed"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{name}</span>
            </span>
          )
        )}
      </nav>
    </header>
  );
}
