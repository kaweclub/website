"use client";

import { motion } from "framer-motion";
import { Check, Lock, Timer } from "lucide-react";
import { easeOut } from "@/components/motion/easing";
import type { MockupContent } from "@/types/content";
import { ClubHeader } from "./ClubHeader";
import { PhoneFrame } from "./PhoneFrame";
import { StatusBadge } from "./StatusBadge";

const inView = { once: true, amount: 0.4 } as const;

/** Club home during the reveal countdown. */
export function CountdownPhone({ data }: { data: MockupContent }) {
  const { club, chapter, countdown } = data;
  const progress = `${Math.round((countdown.submitted / club.members) * 100)}%`;

  return (
    <PhoneFrame
      label={`Kawe app: chapter ${chapter.number} of ${club.book} in its reveal countdown, ${countdown.remaining} until thoughts are revealed`}
    >
      <ClubHeader club={club} />
      <div className="px-3 pb-4">
        <div className="rounded-3xl border border-line bg-white p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[9px] font-semibold tracking-widest text-ink-3">CHAPTER {chapter.number}</p>
              <p className="text-[17px] font-semibold">{chapter.title}</p>
            </div>
            <StatusBadge icon={Timer}>Countdown</StatusBadge>
          </div>
          <p className="mt-3 text-[38px] font-bold leading-none tracking-tight">{countdown.remaining}</p>
          <p className="mt-1.5 text-[11px] text-ink-2">until thoughts are revealed and chat opens</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-adire-soft">
            <motion.div
              className="h-1.5 rounded-full bg-osun"
              initial={{ width: "0%" }}
              whileInView={{ width: progress }}
              viewport={inView}
              transition={{ duration: 1.2, ease: easeOut, delay: 0.5 }}
            />
          </div>
          <p className="mt-2 text-[10px] text-ink-2">
            {countdown.submitted} of {club.members} submitted · late thoughts still count
          </p>
          <div className="mt-3 flex items-center gap-2.5 border-t border-line pt-3">
            <motion.span
              className="grid h-7 w-7 place-items-center rounded-full bg-adire-soft text-adire"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={inView}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 1.2 }}
            >
              <Check className="size-3.5" strokeWidth={3} />
            </motion.span>
            <div>
              <p className="text-[11px] font-semibold">Your thoughts are in</p>
              <p className="text-[9px] text-ink-3">Hidden until the reveal</p>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-line py-2 text-center text-[11px] font-semibold">Edit my thoughts</div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 text-[10px] text-ink-3">
          <Lock className="size-3" />
          Chat opens after the reveal
        </div>
      </div>
    </PhoneFrame>
  );
}
