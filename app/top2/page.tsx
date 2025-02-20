"use client"

import { HomeIcon, WalletIcon, UserIcon, LayoutGridIcon, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { HyperText } from "@/components/ui/hyper-text"
import { CarouselPluginWithAvatar } from "@/components/ui/carousel-plugin-with-avatar"
import { RankingGrid } from "@/components/ui/ranking-grid"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"

const NAVIGATION_ITEMS = [
  { href: "/", icon: HomeIcon, label: "ホーム" },
  { href: "/wallet", icon: WalletIcon, label: "ウォレット" },
  { href: "/profile", icon: UserIcon, label: "プロフィール" },
  { href: "/explore", icon: LayoutGridIcon, label: "探索" },
]

export default function Top2Page() {
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
              text="pumpum.jp" 
              className="text-lg sm:text-xl font-mono tracking-tight lowercase"
              duration={500}
              animateOnHover
            />
            <ModeToggle />
          </div>
        </header>

        {/* Main content area */}
        <main className="flex flex-col gap-4 pt-16">
          {/* Activities section */}
          <div className="px-4">
            <div className="mb-3 px-1 max-w-3xl mx-auto">
              <AnimatedGradientText>
              🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}

                <span className="inline animate-gradient bg-gradient-to-r from-[#60A5FA] via-[#9c40ff] to-[#60A5FA] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  最近の推し活
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />

                
              </AnimatedGradientText>
            </div>
            <CarouselPluginWithAvatar />
          </div>

          {/* Ranking Grid */}
          <div className="mt-4">
            <h2 className="text-sm font-bold mb-3 px-1 max-w-3xl mx-auto text-right">人気のファントークン</h2>
            <RankingGrid />
          </div>
        </main>

        {/* Dock Navigation */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <TooltipProvider>
            <Dock 
              className="bg-background/50 border-border/50"
              iconSize={48}
              iconMagnification={64}
              iconDistance={100}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <DockIcon key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full hover:bg-background/80"
                        )}
                      >
                        <item.icon className="size-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-8 bg-border/50" />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ModeToggle className="rounded-full hover:bg-background/80" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>テーマ切替</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
} 