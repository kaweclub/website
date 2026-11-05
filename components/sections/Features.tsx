import { BookOpen, EyeOff, MessageCircle, Users, type LucideIcon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import type { Feature, FeatureIcon, FeaturesContent } from "@/types/content";

// Every key in `FeatureIcon` must have an icon, or TypeScript will complain.
const ICONS: Record<FeatureIcon, LucideIcon> = {
  "spoiler-free": EyeOff,
  tracker: BookOpen,
  clubs: Users,
  conversation: MessageCircle,
};

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = ICONS[feature.icon];
  return (
    <Card className="h-full gap-0 rounded-3xl border border-line bg-white p-7 text-base ring-0 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(21,18,46,0.35)]">
      <span className="grid size-11 place-items-center rounded-2xl bg-adire-soft text-adire transition-colors group-hover/card:bg-adire group-hover/card:text-cotton">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
      <p className="mt-1.5 leading-relaxed text-ink-2">{feature.body}</p>
    </Card>
  );
}

export function Features({ content }: { content: FeaturesContent }) {
  return (
    <Container as="section" id={content.id} className="py-20">
      <Reveal>
        <SectionTitle className="max-w-2xl">{content.title}</SectionTitle>
      </Reveal>
      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
        {content.items.map((f) => (
          <StaggerItem key={f.title} lift>
            <FeatureCard feature={f} />
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  );
}
