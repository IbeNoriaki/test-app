"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, type AnimationProps } from "motion/react";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "yellow" | "blue" | "green" | "red";
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, size = "md", variant = "yellow", ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative rounded-lg px-2 py-0.5 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        {
          'text-[8px] px-1.5 py-0.5': size === 'xs',
          'text-[10px] px-2 py-1': size === 'sm',
          'text-xs px-3 py-1.5': size === 'md',
          'text-sm px-4 py-2': size === 'lg',
        },
        {
          'bg-yellow-50 dark:bg-yellow-950/10': variant === 'yellow',
          'bg-blue-50 dark:bg-blue-950/10': variant === 'blue',
          'bg-green-50 dark:bg-green-950/10': variant === 'green',
          'bg-red-50 dark:bg-red-950/10': variant === 'red',
        },
        className,
      )}
      {...animationProps}
      {...props}
    >
      <span
        className={cn(
          "relative block size-full uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        )}
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
