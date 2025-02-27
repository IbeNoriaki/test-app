"use client"

import { HomeIcon, WalletIcon, UserIcon, LayoutGridIcon, MapIcon } from "lucide-react"
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
import { ProfileCard } from "@/components/ui/profile-card"
import { HackathonCard } from "@/components/ui/hackathon-card"
import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/resume"
import { Icons } from "@/components/ui/icons"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"

const NAVIGATION_ITEMS = [
  { href: "/", icon: HomeIcon, label: "ホーム" },
  { href: "/wallet", icon: WalletIcon, label: "ウォレット" },
  { href: "/profile", icon: UserIcon, label: "プロフィール" },
  { href: "/explore", icon: LayoutGridIcon, label: "探索" },
]

const BLUR_FADE_DELAY = 0.04

type BadgeVariant = "default" | "outline" | "secondary" | "destructive";

// Hackathonのタイトルとアイコンの配列
const ACHIEVEMENT_BADGES = [
  { title: "Start", icon: <Icons.power className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: true },
  { title: "Point", icon: <Icons.coins className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: true },
  { title: "Token", icon: <Icons.token className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: true },
  { title: "Transfer", icon: <Icons.send className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
  { title: "Pump", icon: <Icons.trendingUp className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
  { title: "Distribute", icon: <Icons.share className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
  { title: "Market", icon: <Icons.store className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
  { title: "100GVolt", icon: <Icons.zap className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
  { title: "1000GVolt", icon: <Icons.zap className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
  { title: "Holder100", icon: <Icons.users className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
  { title: "Holder1000", icon: <Icons.users className="h-4 w-4" />, variant: "secondary" as BadgeVariant, achieved: false },
];

export default function Page() {
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
            <div className="flex flex-col items-start">
              <HyperText 
                text="pumpum.jp / profile" 
                className="text-lg sm:text-xl font-mono tracking-tight lowercase"
                duration={500}
                animateOnHover
              />
              <span className="text-xs font-medium text-muted-foreground -mt-1">
                ぱんぴゅーむ / プロフィール
              </span>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="pt-16 sm:pt-12 flex flex-col min-h-[100dvh] space-y-10 max-w-3xl mx-auto px-4">
          <div className="w-full px-2 py-1.5">
            <ProfileCard
              nickname="pumpum"
              walletAddress="0xa0Ae8F74dc1968a0269741FdC818685A578DAdB9"
              avatarUrl="/Avatar/image.png"
            />
          </div>
          
          {/* Progress bar space - will be added later */}
          <div id="progress-bar-container" className="bg-blue-500/50 h-4 -mt-4">
            {/* Progress bar will be added here */}
          </div>
          
          <section id="skills">
            <div className="space-y-2">
              <AnimatedGradientText>
                <MapIcon className="h-5 w-5" /> <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                <span className="inline animate-gradient bg-gradient-to-r from-[#60A5FA] via-[#9c40ff] to-[#60A5FA] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  推しロード
                </span>
               
              </AnimatedGradientText>
              <div className="flex flex-wrap gap-2">
                {ACHIEVEMENT_BADGES.map((badge) => (
                  <Badge
                    key={badge.title}
                    variant={badge.variant}
                    className={cn(
                      "flex items-center gap-1 bg-white text-black dark:bg-white dark:text-black",
                      !badge.achieved && "opacity-40"
                    )}
                  >
                    {badge.icon}
                    {badge.title}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
          <section id="hackathons">
            <div className="space-y-12 w-full py-12">
              
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                  {DATA.hackathons.map((project, id) => (
                    <BlurFade
                      key={project.description + project.dates}
                      delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                    >
                      <HackathonCard
                        description={project.description}
                        dates={project.dates}
                        image={project.image}
                        links={project.links}
                        isLocked={id >= 3}
                      />
                    </BlurFade>
                  ))}
                </ul>
              </BlurFade>
            </div>
          </section>
        </main>
      </div>

      {/* Footer space for Dock */}
      <footer className="h-20" />

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
  )
} 