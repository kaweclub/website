import { PageShell } from "@/components/layout/PageShell";
import { CallToAction } from "@/components/sections/CallToAction";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TheName } from "@/components/sections/TheName";
import { home } from "@/content/home";
import { mockup } from "@/content/mockups";

export default function HomePage() {
  return (
    <PageShell>
      <Hero content={home.hero} mockup={mockup} />
      <HowItWorks content={home.howItWorks} mockup={mockup} />
      <Features content={home.features} />
      <TheName content={home.theName} />
      <CallToAction content={home.callToAction} />
    </PageShell>
  );
}
