"use client";

import { motion } from "framer-motion";
import { Eye, Send } from "lucide-react";
import { easeOut } from "@/components/motion/easing";
import { cn } from "@/lib/utils";
import type { AvatarTone, MockupContent } from "@/types/content";
import { ClubHeader } from "./ClubHeader";
import { PhoneFrame } from "./PhoneFrame";
import { StatusBadge } from "./StatusBadge";

const inView = { once: true, amount: 0.4 } as const;

const avatarStyles: Record<AvatarTone, string> = {
  osun: "bg-osun-deep",
  adire: "bg-adire",
};

/** Revealed thoughts and discussion. The thoughts un-blur as it scrolls into view, like the real reveal. */
export function RevealPhone({ data }: { data: MockupContent }) {
  const { club, chapter, thoughts, discussion } = data;
  // Chat bubbles appear after the thoughts have finished revealing.
  const chatStart = 0.3 + thoughts.length * 0.25 + 0.3;

  return (
    <PhoneFrame label="Kawe app: chapter thoughts revealed together and the discussion open">
      <ClubHeader club={club} />
      <div className="space-y-2.5 px-3 pb-4">
        <div className="flex items-center justify-between px-1">
          <p className="text-[15px] font-semibold">
            Chapter {chapter.number} · {chapter.title}
          </p>
          <StatusBadge icon={Eye}>Revealed</StatusBadge>
        </div>

        {thoughts.map((t, i) => (
          <motion.div
            key={t.author}
            className="rounded-2xl bg-white p-3"
            initial={{ opacity: 0.35, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={inView}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.3 + i * 0.25 }}
          >
            <div className="flex items-center gap-2">
              <span className={cn("grid h-6 w-6 place-items-center rounded-full text-[10px] font-semibold text-white", avatarStyles[t.avatar])}>
                {t.author[0]}
              </span>
              <span className="text-[11px] font-semibold">{t.author}</span>
            </div>
            <p className="mt-1.5 text-[11px] leading-snug text-ink-2">{t.text}</p>
          </motion.div>
        ))}

        <p className="px-1 text-[9px] font-semibold tracking-widest text-ink-3">DISCUSSION</p>
        {discussion.map((m, i) => (
          <motion.div
            key={m.text}
            className={cn(
              "rounded-2xl px-3 py-2 text-[11px]",
              m.mine ? "ml-auto w-[80%] bg-adire-soft" : "w-[85%] bg-white text-ink-2",
            )}
            initial={{ opacity: 0, x: m.mine ? 12 : -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ duration: 0.5, ease: easeOut, delay: chatStart + i * 0.4 }}
          >
            {m.text}
          </motion.div>
        ))}

        <div className="flex items-center gap-2 pt-1">
          <div className="flex-1 rounded-full bg-white px-3 py-2 text-[10px] text-ink-3">Message the group</div>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-adire text-cotton">
            <Send className="size-3.5" />
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}
