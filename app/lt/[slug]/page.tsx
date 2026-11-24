import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

import { data } from "@/data/links";
import { notFound } from "next/navigation";

interface Link {
  href: string;
  title: string;
  icon: string;
}

interface UserData {
  username: string;
  name: string;
  avatar: string;
  links: Link[];
}

interface Props {
  params: { slug: string };
}

const iconMap: Record<string, JSX.Element> = {
  FaXTwitter: <FaXTwitter />,
  FaInstagram: <FaInstagram />,
  FaFacebook: <FaFacebook />,
  FaLinkedin: <FaLinkedin />,
  FaGithub: <FaGithub />,
};

export async function generateStaticParams() {
  return data.map((user) => ({
    slug: user.slug,
  }));
}

const ProfilePage = ({ params }: Props) => {
  const user = data.find((user) => user.slug === params.slug);

  if (!user) {
    notFound();
  }

  const { username, name, avatar, links } = user!;
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4">
      <Card className="max-w-[400px] w-full">
        <CardHeader className="flex items-center gap-3">
          <Image
            alt={`${name}'s avatar`}
            height={40}
            radius="sm"
            src={avatar}
            width={40}
          />
          <div>
            <p className="text-md font-semibold">{name}</p>
            <p className="text-sm text-default-500">{username}</p>
          </div>
        </CardHeader>
      </Card>
      <Divider className="max-w-[600px]" />
      {links.map((link) => (
        <Card
          className="max-w-[400px] w-full hover:shadow-lg transition"
          key={link.href}
        >
          <Link href={link.href}>
            <CardBody className="flex items-center">
              <div className="flex justify-between items-center gap-4">
                {iconMap[link.icon]}
                <p className="font-medium">{link.title}</p>
              </div>
            </CardBody>
          </Link>
        </Card>
      ))}
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
    </div>
  );
};

export default ProfilePage;
