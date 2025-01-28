import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HyperText } from "@/components/ui/hyper-text";
import { DockMenu } from "@/components/ui/dock-menu";
import { ProfileCard } from "@/components/ui/profile-card";
import { AssetGrid } from "@/components/ui/asset-grid";

export default function ProfilePage() {
  const getLast7Days = () => {
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().split('T')[0];
    });
    return dates;
  };

  const dates = getLast7Days();

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
        { date: dates[0], price: 0.10 },
        { date: dates[1], price: 0.12 },
        { date: dates[2], price: 0.11 },
        { date: dates[3], price: 0.13 },
        { date: dates[4], price: 0.14 },
        { date: dates[5], price: 0.145 },
        { date: dates[6], price: 0.15 },
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
        },
        {
          imageUrl: "https://avatar.vercel.sh/dave",
          profileUrl: '#'
        },
        {
          imageUrl: "https://avatar.vercel.sh/eve",
          profileUrl: '#'
        },
        {
          imageUrl: "https://avatar.vercel.sh/frank",
          profileUrl: '#'
        }
      ],
      numHolders: 9  // 表示される5人 + 非表示1人 + 9人 = 合計15人
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
        { date: dates[0], price: 3200 },
        { date: dates[1], price: 3100 },
        { date: dates[2], price: 3300 },
        { date: dates[3], price: 3400 },
        { date: dates[4], price: 3600 },
        { date: dates[5], price: 3450 },
        { date: dates[6], price: 3450 },
      ],
      purchasers: [
        {
          imageUrl: "https://avatar.vercel.sh/grace",
          profileUrl: '#'
        },
        {
          imageUrl: "https://avatar.vercel.sh/henry",
          profileUrl: '#'
        }
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
        { date: dates[0], price: 2.8 },
        { date: dates[1], price: 3.1 },
        { date: dates[2], price: 3.0 },
        { date: dates[3], price: 3.2 },
        { date: dates[4], price: 3.3 },
        { date: dates[5], price: 3.45 },
        { date: dates[6], price: 3.45 },
      ],
      purchasers: [
        {
          imageUrl: "https://avatar.vercel.sh/ian",
          profileUrl: '#'
        },
        {
          imageUrl: "https://avatar.vercel.sh/jack",
          profileUrl: '#'
        },
        {
          imageUrl: "https://avatar.vercel.sh/kelly",
          profileUrl: '#'
        }
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
        { date: dates[0], price: 1.00 },
        { date: dates[1], price: 1.00 },
        { date: dates[2], price: 1.00 },
        { date: dates[3], price: 1.00 },
        { date: dates[4], price: 1.00 },
        { date: dates[5], price: 1.00 },
        { date: dates[6], price: 1.00 },
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
        { date: dates[0], price: 1.95 },
        { date: dates[1], price: 1.90 },
        { date: dates[2], price: 1.88 },
        { date: dates[3], price: 1.82 },
        { date: dates[4], price: 1.80 },
        { date: dates[5], price: 1.85 },
        { date: dates[6], price: 1.85 },
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
        { date: dates[0], price: 14.20 },
        { date: dates[1], price: 14.50 },
        { date: dates[2], price: 14.80 },
        { date: dates[3], price: 15.10 },
        { date: dates[4], price: 15.40 },
        { date: dates[5], price: 15.75 },
        { date: dates[6], price: 15.75 },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
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
                avatarUrl="/Avatar/image.png"
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