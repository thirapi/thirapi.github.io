import { Header } from "./components/header";
import { Footer } from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-4xl flex flex-col">
      <Header />
      <main className="px-4 py-10 flex-1">
        <h1 className="text-2xl font-bold">
          Hi, Im <Link href={"https://x.com/faiqthirapi"}>@faiqthirafi</Link>
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">
          I am a software engineer.
        </p>
      </main>
      <Footer />
    </div>
  );
}
