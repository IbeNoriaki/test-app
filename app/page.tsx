import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HyperText } from "@/components/ui/hyper-text";
import { DockMenu } from "@/components/ui/dock-menu";
import { Marquee } from "@/components/ui/marquee";
import { EventCard } from "@/components/ui/marquee";
import { Event } from "@/types/events";
import { MarqueeVertical } from "@/components/ui/marquee-vertical";
import { TokenCard } from "@/components/ui/token-card";
import { CarouselPlugin } from "@/components/ui/carousel-plugin";

// サンプルイベントデータ
const events: Event[] = [
  {
    id: "1",
    type: "POINT_PURCHASE",
    timestamp: new Date().toISOString(),
    amount: 1000,
    user: {
      name: "Alice",
      avatar: "https://avatar.vercel.sh/alice"
    },
    purchasers: [
      {
        imageUrl: "https://avatar.vercel.sh/alice",
        profileUrl: '#'
      },
      {
        imageUrl: "https://avatar.vercel.sh/bob",
        profileUrl: '#'
      },
      {
        imageUrl: "https://avatar.vercel.sh/charlie",
        profileUrl: '#'
      }
    ]
  },
  {
    id: "2",
    type: "TOKEN_ISSUE",
    timestamp: new Date().toISOString(),
    tokenSymbol: "GYAG",
    user: {
      name: "Bob",
      avatar: "https://avatar.vercel.sh/bob"
    }
  },
  {
    id: "3",
    type: "TOKEN_PUMP",
    timestamp: new Date().toISOString(),
    amount: 500,
    tokenSymbol: "GYAG",
    user: {
      name: "Charlie",
      avatar: "https://avatar.vercel.sh/charlie"
    },
    creator: {
      name: "Charlie",
      avatar: "https://avatar.vercel.sh/charlie"
    }
  }
];

// tokensデータを2つの配列に分割
const tokens = [
  { type: 'token' as const, symbol: 'GYAG' },
  { type: 'point' as const, amount: 1000 },
  { type: 'token' as const, symbol: 'PMPM' },
  { type: 'point' as const, amount: 500 },
  { type: 'token' as const, symbol: 'LOVE' },
  { type: 'token' as const, symbol: 'MEME' },
  { type: 'token' as const, symbol: 'COOL' },
  { type: 'point' as const, amount: 200 },
  { type: 'token' as const, symbol: 'HYPE' },
  { type: 'point' as const, amount: 300 },
  { type: 'token' as const, symbol: 'FUN' },
  { type: 'point' as const, amount: 400 },
  { type: 'token' as const, symbol: 'WOW' },
  { type: 'point' as const, amount: 600 },
  { type: 'token' as const, symbol: 'YAY' },
  { type: 'point' as const, amount: 700 },
  { type: 'token' as const, symbol: 'ZAP' },
  { type: 'point' as const, amount: 800 },
  { type: 'token' as const, symbol: 'BOOM' },
  { type: 'point' as const, amount: 900 },
  { type: 'token' as const, symbol: 'EXTRA' },
  { type: 'point' as const, amount: 1000 },
  { type: 'token' as const, symbol: 'MORE' },
  { type: 'point' as const, amount: 1100 },
  { type: 'token' as const, symbol: 'PLUS' },
  { type: 'point' as const, amount: 1200 },
  { type: 'token' as const, symbol: 'ADDED' },
  { type: 'point' as const, amount: 1300 },
  { type: 'token' as const, symbol: 'BONUS' },
  { type: 'point' as const, amount: 1400 },
  { type: 'token' as const, symbol: 'EXTRA1' },
  { type: 'point' as const, amount: 1500 },
  { type: 'token' as const, symbol: 'EXTRA2' },
  { type: 'point' as const, amount: 1600 },
  { type: 'token' as const, symbol: 'EXTRA3' },
  { type: 'point' as const, amount: 1700 },
  { type: 'token' as const, symbol: 'EXTRA4' },
  { type: 'point' as const, amount: 1800 },
  { type: 'token' as const, symbol: 'EXTRA5' },
  { type: 'point' as const, amount: 1900 },
];

const leftColumn = tokens.slice(0, 13);
const middleColumn = tokens.slice(13, 26);
const rightColumn = tokens.slice(26, 39);

export default function HomePage() {
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
          <div className="relative w-full border-t border-border/50">
            <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </Marquee>

            {/* Add Carousel section */}
            <div className="mt-32 px-4">
              <CarouselPlugin />
            </div>

            {/* 新しく追加するVertical Marquee */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 flex gap-2 h-[400px]">
              <div className="w-20">
                <MarqueeVertical 
                  pauseOnHover 
                  className="[--duration:20s] h-full"
                >
                  {leftColumn.map((token, index) => (
                    <TokenCard 
                      key={`token-left-${index}`} 
                      type={token.type}
                      symbol={token.symbol}
                      amount={token.amount}
                    />
                  ))}
                </MarqueeVertical>
              </div>

              <div className="w-20">
                <MarqueeVertical 
                  pauseOnHover 
                  reverse
                  className="[--duration:20s] h-full"
                >
                  {middleColumn.map((token, index) => (
                    <TokenCard 
                      key={`token-middle-${index}`} 
                      type={token.type}
                      symbol={token.symbol}
                      amount={token.amount}
                    />
                  ))}
                </MarqueeVertical>
              </div>

              <div className="w-20">
                <MarqueeVertical 
                  pauseOnHover 
                  className="[--duration:20s] h-full"
                >
                  {rightColumn.map((token, index) => (
                    <TokenCard 
                      key={`token-right-${index}`} 
                      type={token.type}
                      symbol={token.symbol}
                      amount={token.amount}
                    />
                  ))}
                </MarqueeVertical>
              </div>

              {/* グラデーションオーバーレイ */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background" />
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
          </div>
        </header>

        {/* Updated Dock implementation */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 z-20">
          <DockMenu />
        </div>
      </div>
    </div>
  );
}
