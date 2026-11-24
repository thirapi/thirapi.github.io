import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-start justify-center">
        <Card className="max-w-[800px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://pbs.twimg.com/profile_images/1775195625120051202/MqURU8VP_400x400.jpg"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">faiqthirapi</p>
              <Link
                isExternal
                className="text-small text-default-500"
                href="https://x.com/faiqthirapi"
              >
                @faiqthirapi
              </Link>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://pbs.twimg.com/media/GhvX9sJagAA8l0w?format=jpg&name=360x360"
              width={270}
            />
          </CardBody>
        </Card>
      </div>

      <div
        aria-hidden="true"
        className="fixed dark:md:block dark:opacity-100 -bottom-[-30%] sm:-bottom-[0%] 2xl:-bottom-[30%] -left-[0%] z-0 pointer-events-none"
      >
        <img
          src="/bg-shape.svg"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs left background"
          data-loaded="true"
        />
      </div>
    </section>
  );
}
