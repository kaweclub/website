import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/** Small Osun pill showing a chapter's state, e.g. "Countdown" or "Revealed". */
export function StatusBadge({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <Badge className="h-auto gap-1 rounded-full bg-osun-soft px-2 py-0.5 text-[10px] font-semibold text-osun-deep">
      <Icon aria-hidden="true" />
      {children}
    </Badge>
  );
}
