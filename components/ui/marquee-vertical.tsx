"use client";

import { cn } from "@/lib/utils";

interface MarqueeVerticalProps {
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
}

export function MarqueeVertical({
  className,
  pauseOnHover = false,
  reverse = false,
  children,
}: MarqueeVerticalProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden [--gap:1rem] [--duration:40s]",
        className,
        {
          "[&:hover>*]:pause": pauseOnHover,
        }
      )}
    >
      <div className={cn(
        "flex flex-col animate-marquee-vertical gap-[--gap]",
        reverse && "animate-marquee-vertical-reverse"
      )}>
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex flex-col animate-marquee-vertical gap-[--gap]",
          reverse && "animate-marquee-vertical-reverse"
        )}
      >
        {children}
      </div>
    </div>
  );
} 