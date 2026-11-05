import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/card";
import type { CallToActionContent } from "@/types/content";

export function CallToAction({ content }: { content: CallToActionContent }) {
  return (
    <Container as="section" className="py-24">
      <Reveal>
        <Card className="items-center gap-0 rounded-[36px] border border-line bg-white px-6 py-14 text-center text-base ring-0 sm:px-14">
          <SectionTitle>{content.title}</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-2">{content.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={content.primary.href} arrow="forward">
              {content.primary.label}
            </ButtonLink>
            <ButtonLink href={content.secondary.href} variant="secondary">
              {content.secondary.label}
            </ButtonLink>
          </div>
        </Card>
      </Reveal>
    </Container>
  );
}
