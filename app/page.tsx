import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HyperText } from "@/components/ui/hyper-text";
import { DockMenu } from "@/components/ui/dock-menu";
import { Marquee } from "@/components/ui/marquee";
import { EventCard } from "@/components/ui/marquee";
import { Event } from "@/types/events";

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

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
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
