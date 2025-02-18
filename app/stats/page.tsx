"use client"

import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { HyperText } from "@/components/ui/hyper-text"
import { HyperNumber } from "@/components/ui/hyper-number"

export default function StatsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background FlickeringGrid */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          className="h-full w-full [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.015}
          height={2000}
          width={2000}
        />
      </div>
      
      {/* Optional overlay for better readability */}
      <div className="fixed inset-0 z-[1] bg-background/30 backdrop-blur-[2px]" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        {/* Header with ModeToggle and HyperText */}
        <header className="fixed top-0 left-0 right-0 flex flex-col z-20">
          <div className="flex justify-between items-center px-2 py-1.5 max-w-3xl mx-auto w-full">
            <HyperText 
              text="pumpum.jp / stats" 
              className="text-lg sm:text-xl font-mono tracking-tight lowercase"
              duration={500}
              animateOnHover
            />
            <ModeToggle />
          </div>
        </header>

        {/* Main content area */}
        <main className="flex flex-col gap-8 pt-16">
          <div className="flex justify-center items-center pt-8">
            <HyperNumber 
              value={10000}
              className="text-4xl font-mono"
              duration={500}
              animateOnHover
            />
          </div>
        </main>
      </div>
    </div>
  )
} 