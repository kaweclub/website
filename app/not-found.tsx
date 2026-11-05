import { Mark } from "@/components/brand/Mark";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PageShell } from "@/components/layout/PageShell";
import { notFound } from "@/content/not-found";

export default function NotFound() {
  return (
    <PageShell>
      <Container narrow className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <Mark size={72} />
        <Eyebrow className="mt-8">{notFound.eyebrow}</Eyebrow>
        <SectionTitle as="h1" size="page" className="mt-3">
          {notFound.title}
        </SectionTitle>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-2">{notFound.body}</p>
        <ButtonLink href={notFound.action.href} arrow="back" className="mt-8">
          {notFound.action.label}
        </ButtonLink>
      </Container>
    </PageShell>
  );
}
