import { AdirePattern } from "@/components/brand/AdirePattern";
import { Mark } from "@/components/brand/Mark";
import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Reveal } from "@/components/motion/Reveal";
import type { TheNameContent } from "@/types/content";

export function TheName({ content }: { content: TheNameContent }) {
  return (
    <section id={content.id} className="relative overflow-hidden bg-adire text-cotton">
      <AdirePattern className="absolute inset-0 h-full w-full opacity-70" />
      <div className="absolute inset-0 bg-linear-to-r from-adire via-adire/95 to-adire/40" aria-hidden="true" />
      <Container className="relative py-24">
        <Reveal>
          <Mark size={64} tone="adire" />
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow tone="inverse" className="mt-8">
            {content.eyebrow}
          </Eyebrow>
          <SectionTitle size="display" className="mt-3">
            “<span lang="yo">{content.title.phrase}</span>.” {content.title.meaning}
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-adire-mist">{content.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
