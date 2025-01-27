import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HyperText } from "@/components/ui/hyper-text";
import { DockMenu } from "@/components/ui/dock-menu";
import { ProfileCard } from "@/components/ui/profile-card";

export default function ProfilePage() {
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
              text="pumpum.jp / profile" 
              className="text-lg sm:text-xl font-mono tracking-tight lowercase"
              duration={500}
              animateOnHover
            />
            <ModeToggle />
          </div>
          <div className="relative w-full border-t border-border/50">
            <div className="max-w-2xl mx-auto p-4">
              <ProfileCard
                nickname="pumpum"
                walletAddress="0xa0Ae8F74dc1968a0269741FdC818685A578DAdB9"
                avatarUrl="https://avatar.vercel.sh/pumpum"
              />
            </div>
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