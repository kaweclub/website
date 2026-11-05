import { cn } from "@/lib/utils";
import type { MockupContent } from "@/types/content";

/** Club name, book and the "who's on which chapter" chips. */
export function ClubHeader({ club }: { club: MockupContent["club"] }) {
  return (
    <div className="px-4 pb-2 pt-1 text-center">
      <p className="text-[13px] font-semibold">{club.name}</p>
      <p className="text-[10px] text-ink-3">
        {club.book} · {club.members} members
      </p>
      <div className="mt-2 flex justify-center gap-1.5 text-[9px] font-medium">
        {club.chapterGroups.map((g) => (
          <span key={g.label} className={cn("rounded-full px-2 py-0.5", g.current ? "bg-adire-soft text-adire" : "bg-white text-ink-3")}>
            {g.label}
          </span>
        ))}
      </div>
    </div>
  );
}
