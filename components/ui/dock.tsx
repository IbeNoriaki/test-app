"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  children: React.ReactNode;
  direction?: "left" | "middle" | "right";
}

interface DockIconProps {
  children: React.ReactNode;
}

export function DockIcon({ children }: DockIconProps) {
  return (
    <button className="group relative p-2 transition-all hover:scale-110">
      <div className="transition-all group-hover:scale-110 dark:text-white">
        {children}
      </div>
    </button>
  );
}

export function Dock({ children, direction = "middle" }: DockProps) {
  return (
    <div
      className={cn(
        "flex gap-4 rounded-xl bg-white/20 p-4 backdrop-blur-md dark:bg-black/20",
        {
          "justify-start": direction === "left",
          "justify-center": direction === "middle",
          "justify-end": direction === "right",
        }
      )}
    >
      {children}
    </div>
  );
}
