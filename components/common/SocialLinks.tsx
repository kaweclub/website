import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/types/site";

// Every platform in `SocialPlatform` must have an icon, or TypeScript will complain.
const ICONS: Record<SocialPlatform, IconType> = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
};

/** Round icon buttons for each profile in `config/site.ts`. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {site.socials.map((s) => {
        const Icon = ICONS[s.platform];
        return (
          <li key={s.platform}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kawe on ${s.platform} (${s.handle})`}
              title={`${s.platform} · ${s.handle}`}
              className="grid size-11 place-items-center rounded-full border border-line bg-white text-night transition duration-200 hover:-translate-y-0.5 hover:border-adire hover:bg-adire hover:text-cotton focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-osun motion-reduce:hover:translate-y-0"
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
