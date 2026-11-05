import { Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/common/Container";
import { CurrentYear } from "@/components/common/CurrentYear";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Separator } from "@/components/ui/separator";
import { routes, site } from "@/config/site";
import { layoutCopy } from "@/content/layout";

const linkStyle = "underline-offset-4 hover:text-adire hover:underline";

export function SiteFooter() {
  const copy = layoutCopy.footer;
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo size={28} />
          <p className="mt-3 text-sm text-ink-3">{site.tagline}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-14">
          <div>
            <p className="text-sm font-semibold">{copy.contact}</p>
            <a href={`mailto:${site.supportEmail}`} className={`mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-ink-2 ${linkStyle}`}>
              <Mail className="size-4" aria-hidden="true" />
              {site.supportEmail}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold">{copy.follow}</p>
            <SocialLinks className="mt-3" />
          </div>
        </div>
      </Container>
      <Container>
        <Separator className="bg-line" />
      </Container>
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-xs text-ink-3">
        <p>
          © <CurrentYear /> {site.name}. {copy.rights}
        </p>
        <a href={routes.privacy} className={`inline-flex min-h-11 items-center ${linkStyle}`}>
          {copy.privacy}
        </a>
      </Container>
    </footer>
  );
}
