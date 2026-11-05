import { FaAndroid, FaApple } from "react-icons/fa6";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { CountdownPhone } from "@/components/mockups/CountdownPhone";
import { Float } from "@/components/motion/Float";
import { Badge } from "@/components/ui/badge";
import type { HeroContent, MockupContent } from "@/types/content";

function LaunchBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="outline" className="h-auto gap-2 rounded-full border-line bg-white px-3 py-1 text-[13px] font-medium text-ink-2">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full rounded-full bg-osun opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex size-2 rounded-full bg-osun" />
      </span>
      {children}
      <span className="flex items-center gap-1 text-ink-3" aria-hidden="true">
        <FaApple />
        <FaAndroid />
      </span>
    </Badge>
  );
}

/**
 * The first screen. Deliberately has no entrance animation, so it shows the moment
 * the page arrives, before any JavaScript loads. Sections further down animate in.
 */
export function Hero({ content, mockup }: { content: HeroContent; mockup: MockupContent }) {
  return (
    <Container as="section" id={content.id} className="grid items-center gap-14 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
      <div>
        <LaunchBadge>{content.badge}</LaunchBadge>
        <h1 className="mt-6 text-[44px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[64px]">
          {content.headline.lead}
          <br />
          <span className="text-adire">{content.headline.highlight}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">{content.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={content.primary.href} arrow="forward">
            {content.primary.label}
          </ButtonLink>
          <ButtonLink href={content.secondary.href} variant="secondary">
            {content.secondary.label}
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-ink-3">{content.note}</p>
      </div>
      <div className="flex justify-center md:justify-end">
        <Float>
          <CountdownPhone data={mockup} />
        </Float>
      </div>
    </Container>
  );
}
