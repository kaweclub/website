import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { LegalDocumentContent } from "@/types/content";

// Styles the plain tags used in content/privacy.tsx (and any future policy pages).
const prose =
  "space-y-3 leading-relaxed text-ink-2 [&_a]:text-adire [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:text-night [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5";

/** Renders a policy page (privacy notice, terms, …) from content. */
export function LegalDocument({ doc }: { doc: LegalDocumentContent }) {
  return (
    <Container narrow className="py-16 sm:py-20">
      <Eyebrow>{doc.eyebrow}</Eyebrow>
      <SectionTitle as="h1" size="page" className="mt-3">
        {doc.title}
      </SectionTitle>
      <p className="mt-4 text-sm text-ink-3">Last updated {doc.lastUpdated}</p>
      <p className="mt-8 text-lg leading-relaxed text-ink-2">{doc.intro}</p>

      {doc.sections.map((s) => (
        <section key={s.title} className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
          <div className={`mt-3 ${prose}`}>{s.body}</div>
        </section>
      ))}
    </Container>
  );
}
