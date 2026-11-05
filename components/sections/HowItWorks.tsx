import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { RevealPhone } from "@/components/mockups/RevealPhone";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import type { HowItWorksContent, MockupContent, Step } from "@/types/content";

function StepCard({ step, number }: { step: Step; number: number }) {
  return (
    <Card className="flex-row gap-5 rounded-3xl border border-line bg-cotton p-6 text-base ring-0">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-adire text-[15px] font-bold text-cotton">{number}</span>
      <div>
        <h3 className="text-lg font-semibold">{step.title}</h3>
        <p className="mt-1.5 leading-relaxed text-ink-2">{step.body}</p>
      </div>
    </Card>
  );
}

export function HowItWorks({ content, mockup }: { content: HowItWorksContent; mockup: MockupContent }) {
  return (
    <section id={content.id} className="border-y border-line bg-white">
      <Container className="py-20">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <SectionTitle className="mt-3 max-w-2xl">{content.title}</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <Stagger as="ol" className="grid gap-6">
            {content.steps.map((step, i) => (
              <StaggerItem as="li" key={step.title}>
                <StepCard step={step} number={i + 1} />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15} className="flex justify-center">
            <RevealPhone data={mockup} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
