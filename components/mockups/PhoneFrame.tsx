/** A phone outline with a status bar. `label` describes the screen for screen readers. */
export function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative w-[290px] shrink-0 rounded-[44px] border border-line bg-white p-2.5 shadow-[0_30px_60px_-20px_rgba(21,18,46,0.35)]"
    >
      <div className="overflow-hidden rounded-[36px] bg-cotton" aria-hidden="true">
        <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold text-night">
          <span>9:41</span>
          <span className="flex gap-1">
            <span className="h-2 w-3.5 rounded-sm bg-night" />
            <span className="h-2 w-5 rounded-sm bg-night" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
