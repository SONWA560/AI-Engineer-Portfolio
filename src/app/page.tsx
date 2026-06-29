import {
  RevealFx,
  Column,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MinimalistHero
        mainText="I'm Sonwabise, a BCom Information Systems graduate [Cum Laude] and Microsoft Azure Data Fundamentals certified professional based in Cape Town, South Africa. I specialise in building intelligent systems that bridge data, automation, and innovation."
        readMoreLink={about.path}
        imageSrc={person.avatar}
        imageAlt={person.name}
        overlayText={{ part1: "AI", part2: "Engineer" }}
      />
      <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
        <RevealFx translateY="16" delay={0.6}>
          <Projects range={[1, 1]} />
        </RevealFx>
        <Projects range={[2]} />
        <Mailchimp />
      </Column>
    </Column>
  );
}
