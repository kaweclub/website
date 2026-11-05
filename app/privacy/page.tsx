import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { PageShell } from "@/components/layout/PageShell";
import { routes, site } from "@/config/site";
import { privacy } from "@/content/privacy";

export const metadata: Metadata = {
  title: `${privacy.eyebrow} · ${site.name}`,
  description: privacy.description,
  alternates: { canonical: routes.privacy },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalDocument doc={privacy} />
    </PageShell>
  );
}
