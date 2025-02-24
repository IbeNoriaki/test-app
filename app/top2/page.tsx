"use client"

import { HomeIcon, WalletIcon, UserIcon, LayoutGridIcon, ChevronRight, Crown, Antenna } from "lucide-react"
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
import { AssetTable } from "@/components/ui/asset-table"
import { 
  Menubar,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

const NAVIGATION_ITEMS = [
  { href: "/", icon: HomeIcon, label: "ホーム" },
  { href: "/wallet", icon: WalletIcon, label: "ウォレット" },
  { href: "/profile", icon: UserIcon, label: "プロフィール" },
  { href: "/explore", icon: LayoutGridIcon, label: "探索" },
]

const getLast7Days = () => {
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split('T')[0];
  });
  return dates;
};

const dates = getLast7Days();

const suggestionAssets = [
  {
    id: "1",
    name: "Gag Token",
    symbol: "$GYAG",
    balance: 1000,
    price: 0.15,
    change24h: 5.2,
    imageUrl: "/networks/op.png",
    chartData: [
      { date: dates[0], price: 0.10 },
      { date: dates[1], price: 0.12 },
      { date: dates[2], price: 0.11 },
      { date: dates[3], price: 0.13 },
      { date: dates[4], price: 0.14 },
      { date: dates[5], price: 0.145 },
      { date: dates[6], price: 0.15 },
    ],
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/alice", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/bob", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/charlie", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/dave", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/eve", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/frank", profileUrl: '#' }
    ],
    numHolders: 9
  },
  {
    id: "3",
    name: "Optimism",
    symbol: "OP",
    balance: 500,
    price: 3.45,
    change24h: 8.7,
    imageUrl: "/networks/op.png",
    chartData: [
      { date: dates[0], price: 2.8 },
      { date: dates[1], price: 3.1 },
      { date: dates[2], price: 3.0 },
      { date: dates[3], price: 3.2 },
      { date: dates[4], price: 3.3 },
      { date: dates[5], price: 3.45 },
      { date: dates[6], price: 3.45 },
    ],
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/ian", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/jack", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/kelly", profileUrl: '#' }
    ]
  },
  {
    id: "16",
    name: "Celestia",
    symbol: "TIA",
    balance: 100,
    price: 12.45,
    change24h: 8.9,
    imageUrl: "/networks/op.png",
    chartData: [
      { date: dates[0], price: 11.2 },
      { date: dates[1], price: 11.5 },
      { date: dates[2], price: 11.8 },
      { date: dates[3], price: 12.0 },
      { date: dates[4], price: 12.2 },
      { date: dates[5], price: 12.4 },
      { date: dates[6], price: 12.45 },
    ],
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/mike", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/nancy", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/oscar", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/pat", profileUrl: '#' }
    ]
  },
  {
    id: "18",
    name: "Immutable",
    symbol: "IMX",
    balance: 750,
    price: 3.15,
    change24h: -4.2,
    imageUrl: "/networks/op.png",
    chartData: [
      { date: dates[0], price: 3.4 },
      { date: dates[1], price: 3.35 },
      { date: dates[2], price: 3.3 },
      { date: dates[3], price: 3.25 },
      { date: dates[4], price: 3.2 },
      { date: dates[5], price: 3.18 },
      { date: dates[6], price: 3.15 },
    ],
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/quinn", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/rachel", profileUrl: '#' }
    ]
  },
  {
    id: "23",
    name: "Synthetix",
    symbol: "SNX",
    balance: 300,
    price: 3.25,
    change24h: 4.8,
    imageUrl: "/networks/op.png",
    chartData: [
      { date: dates[0], price: 3.0 },
      { date: dates[1], price: 3.1 },
      { date: dates[2], price: 3.15 },
      { date: dates[3], price: 3.2 },
      { date: dates[4], price: 3.22 },
      { date: dates[5], price: 3.24 },
      { date: dates[6], price: 3.25 },
    ],
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/alpha", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/beta", profileUrl: '#' }
    ]
  },
  {
    id: "24",
    name: "Render",
    symbol: "RNDR",
    balance: 150,
    price: 7.85,
    change24h: -2.3,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/gamma", profileUrl: '#' },
      { imageUrl: "https://avatar.vercel.sh/delta", profileUrl: '#' }
    ]
  },
  {
    id: "25",
    name: "Injective",
    symbol: "INJ",
    balance: 75,
    price: 34.20,
    change24h: 6.7,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/epsilon", profileUrl: '#' }
    ]
  },
  {
    id: "26",
    name: "Sui",
    symbol: "SUI",
    balance: 1200,
    price: 1.65,
    change24h: -1.2,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/zeta", profileUrl: '#' }
    ]
  },
  {
    id: "27",
    name: "Stacks",
    symbol: "STX",
    balance: 800,
    price: 2.35,
    change24h: 3.1,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/eta", profileUrl: '#' }
    ]
  },
  {
    id: "28",
    name: "Mantle",
    symbol: "MNT",
    balance: 2500,
    price: 0.95,
    change24h: 2.8,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/theta", profileUrl: '#' }
    ]
  },
  {
    id: "29",
    name: "Sei",
    symbol: "SEI",
    balance: 1800,
    price: 0.75,
    change24h: 5.6,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/iota", profileUrl: '#' }
    ]
  },
  {
    id: "30",
    name: "Base",
    symbol: "BASE",
    balance: 1000,
    price: 0.98,
    change24h: -3.2,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/kappa", profileUrl: '#' }
    ]
  },
  {
    id: "31",
    name: "Aptos",
    symbol: "APT",
    balance: 250,
    price: 15.45,
    change24h: 7.8,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/lambda", profileUrl: '#' }
    ]
  },
  {
    id: "32",
    name: "Near",
    symbol: "NEAR",
    balance: 450,
    price: 4.25,
    change24h: -1.5,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/mu", profileUrl: '#' }
    ]
  },
  {
    id: "33",
    name: "Hedera",
    symbol: "HBAR",
    balance: 10000,
    price: 0.12,
    change24h: 4.2,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/nu", profileUrl: '#' }
    ]
  },
  {
    id: "34",
    name: "Internet Computer",
    symbol: "ICP",
    balance: 100,
    price: 12.85,
    change24h: 9.4,
    imageUrl: "/networks/op.png",
    purchasers: [
      { imageUrl: "https://avatar.vercel.sh/xi", profileUrl: '#' }
    ]
  }
];

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
            <div className="flex flex-col items-start">
              <HyperText 
                text="pumpum.jp" 
                className="text-lg sm:text-xl font-mono tracking-tight lowercase"
                duration={500}
                animateOnHover
              />
              <span className="text-xs font-medium text-muted-foreground -mt-1">
                ぱんぴゅーむ
              </span>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex flex-col gap-4 pt-16 pb-4">
          {/* Activities section */}
          <div className="px-4">
            <div className="mb-3 px-1 max-w-3xl mx-auto">
              <AnimatedGradientText>
              🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}

                <span className="inline animate-gradient bg-gradient-to-r from-[#60A5FA] via-[#9c40ff] to-[#60A5FA] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  みんなの推し活状況
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />

                
              </AnimatedGradientText>
            </div>
            <CarouselPluginWithAvatar />
          </div>

          {/* Ranking Grid */}
          <div className="mt-4">
            <div className="mb-3 px-1 max-w-3xl mx-auto">
              <AnimatedGradientText>
                <Crown className="size-4 text-yellow-500" />
                <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                <span className="inline animate-gradient bg-gradient-to-r from-[#22c55e] via-[#ef4444] to-[#22c55e] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  人気クリエイター
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
            <RankingGrid />
          </div>

          {/* Suggestions Section */}
          <div className="mt-8 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                <AnimatedGradientText>
                  <Antenna className="size-4 text-blue-500" />
                  <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                  <span className="inline animate-gradient bg-gradient-to-r from-[#60A5FA] via-[#9c40ff] to-[#60A5FA] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                    クリエイター情報局
                  </span>
                </AnimatedGradientText>
              </div>
             
              <Menubar className="border-none">
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">人気順</MenubarTrigger>
                  {/*<MenubarContent>
                     <MenubarItem>今日</MenubarItem> 
                     <MenubarItem>今週</MenubarItem> 
                     <MenubarItem>今月</MenubarItem> 
                  </MenubarContent> */}
                </MenubarMenu>
                <MenubarSeparator />
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">新着順</MenubarTrigger>
                  {/* <MenubarContent>
                     <MenubarItem>最新</MenubarItem> 
                     <MenubarItem>注目</MenubarItem> 
                  </MenubarContent>　*/}
                </MenubarMenu>
                <MenubarSeparator />
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">上昇率順</MenubarTrigger>
                  {/* <MenubarContent>
                    <MenubarItem>急上昇</MenubarItem>
                    <MenubarItem>話題</MenubarItem>
                  </MenubarContent> */}
                </MenubarMenu>
              </Menubar>
              <div className="mt-4">
                <AssetTable assets={suggestionAssets} />
              </div>
            </div>
          </div>
        </main>

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
    </div>
  )
} 