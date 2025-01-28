import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HyperText } from "@/components/ui/hyper-text";
import { DockMenu } from "@/components/ui/dock-menu";
import { ProfileCard } from "@/components/ui/profile-card";
import { AssetGrid } from "@/components/ui/asset-grid";

export default function ProfilePage() {
  const assets = [
    {
      id: "1",
      name: "Gag Token",
      symbol: "$GYAG",
      balance: 1000,
      price: 0.15,
      change24h: 5.2,
      imageUrl: "/networks/op.png",
      chartData: [
        { month: "Jan", price: 0.10 },
        { month: "Feb", price: 0.12 },
        { month: "Mar", price: 0.11 },
        { month: "Apr", price: 0.13 },
        { month: "May", price: 0.14 },
        { month: "Jun", price: 0.15 },
      ],
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
      name: "Ethereum",
      symbol: "ETH",
      balance: 1.5,
      price: 3450.75,
      change24h: -2.1,
      imageUrl: "/networks/op.png",
      chartData: [
        { month: "Jan", price: 3200 },
        { month: "Feb", price: 3100 },
        { month: "Mar", price: 3300 },
        { month: "Apr", price: 3400 },
        { month: "May", price: 3600 },
        { month: "Jun", price: 3450 },
      ]
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
        { month: "Jan", price: 2.8 },
        { month: "Feb", price: 3.1 },
        { month: "Mar", price: 3.0 },
        { month: "Apr", price: 3.2 },
        { month: "May", price: 3.3 },
        { month: "Jun", price: 3.45 },
      ]
    },
    {
      id: "4",
      name: "USD Coin",
      symbol: "USDC",
      balance: 2500,
      price: 1.00,
      change24h: 0.01,
      imageUrl: "/networks/op.png",
      chartData: [
        { month: "Jan", price: 1.00 },
        { month: "Feb", price: 1.00 },
        { month: "Mar", price: 1.00 },
        { month: "Apr", price: 1.00 },
        { month: "May", price: 1.00 },
        { month: "Jun", price: 1.00 },
      ]
    },
    {
      id: "5",
      name: "Arbitrum",
      symbol: "ARB",
      balance: 750,
      price: 1.85,
      change24h: -1.3,
      imageUrl: "/networks/op.png",
      chartData: [
        { month: "Jan", price: 1.95 },
        { month: "Feb", price: 1.90 },
        { month: "Mar", price: 1.88 },
        { month: "Apr", price: 1.82 },
        { month: "May", price: 1.80 },
        { month: "Jun", price: 1.85 },
      ]
    },
    {
      id: "6",
      name: "Chainlink",
      symbol: "LINK",
      balance: 100,
      price: 15.75,
      change24h: 3.4,
      imageUrl: "/networks/op.png",
      chartData: [
        { month: "Jan", price: 14.20 },
        { month: "Feb", price: 14.50 },
        { month: "Mar", price: 14.80 },
        { month: "Apr", price: 15.10 },
        { month: "May", price: 15.40 },
        { month: "Jun", price: 15.75 },
      ]
    }
  ];

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
        {/* Header with ModeToggle, HyperText and ProfileCard */}
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
            <div className="w-full px-2 py-1.5">
              <ProfileCard
                nickname="pumpum"
                walletAddress="0xa0Ae8F74dc1968a0269741FdC818685A578DAdB9"
                avatarUrl="https://avatar.vercel.sh/pumpum"
              />
            </div>
          </div>
        </header>

        {/* Asset Grid */}
        <main className="pt-40 pb-24">  {/* ProfileCardの高さ + 余白を確保 */}
          <AssetGrid
            assets={assets}
          />
        </main>

        {/* Dock Menu */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 z-20">
          <DockMenu />
        </div>
      </div>
    </div>
  );
} 