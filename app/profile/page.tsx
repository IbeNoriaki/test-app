import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { HyperText } from "@/components/ui/hyper-text";
import { ProfileCard } from "@/components/ui/profile-card";
import { AssetGrid } from "@/components/ui/asset-grid";
import { Separator } from "@/components/ui/separator";
import { AssetTable } from "@/components/ui/asset-table";
import { AnalyticsSummary } from "@/components/ui/analytics-summary"

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
    },
    {
      id: "7",
      name: "Uniswap",
      symbol: "UNI",
      balance: 200,
      price: 7.25,
      change24h: -0.8,
      imageUrl: "/networks/op.png",
      chartData: [
        { date: dates[0], price: 6.8 },
        { date: dates[1], price: 7.0 },
        { date: dates[2], price: 7.2 },
        { date: dates[3], price: 7.4 },
        { date: dates[4], price: 7.6 },
        { date: dates[5], price: 7.8 },
        { date: dates[6], price: 7.25 },
      ]
    },
    {
      id: "8",
      name: "Aave",
      symbol: "AAVE",
      balance: 5,
      price: 95.50,
      change24h: 2.3,
      imageUrl: "/networks/op.png",
      chartData: [
        { date: dates[0], price: 93.2 },
        { date: dates[1], price: 94.5 },
        { date: dates[2], price: 96.8 },
        { date: dates[3], price: 98.0 },
        { date: dates[4], price: 100.3 },
        { date: dates[5], price: 99.0 },
        { date: dates[6], price: 95.5 },
      ]
    },
    {
      id: "9",
      name: "Polygon",
      symbol: "MATIC",
      balance: 1500,
      price: 0.85,
      change24h: 1.7,
      imageUrl: "/networks/op.png",
      chartData: [
        { date: dates[0], price: 0.80 },
        { date: dates[1], price: 0.82 },
        { date: dates[2], price: 0.84 },
        { date: dates[3], price: 0.86 },
        { date: dates[4], price: 0.88 },
        { date: dates[5], price: 0.85 },
        { date: dates[6], price: 0.85 },
      ]
    },
    {
      id: "10",
      name: "Compound",
      symbol: "COMP",
      balance: 10,
      price: 65.30,
      change24h: -1.5,
      imageUrl: "/networks/op.png",
      chartData: [
        { date: dates[0], price: 63.8 },
        { date: dates[1], price: 64.0 },
        { date: dates[2], price: 64.2 },
        { date: dates[3], price: 64.4 },
        { date: dates[4], price: 64.6 },
        { date: dates[5], price: 64.8 },
        { date: dates[6], price: 65.3 },
      ]
    },
    {
      id: "11",
      name: "Maker",
      symbol: "MKR",
      balance: 0.5,
      price: 1950.75,
      change24h: 3.2,
      imageUrl: "/networks/op.png",
      chartData: [
        { date: dates[0], price: 1920 },
        { date: dates[1], price: 1930 },
        { date: dates[2], price: 1940 },
        { date: dates[3], price: 1950 },
        { date: dates[4], price: 1960 },
        { date: dates[5], price: 1970 },
        { date: dates[6], price: 1950.75 },
      ]
    }
  ];

  const suggestionAssets = [
    ...assets,
    {
      id: "12",
      name: "Synthetix",
      symbol: "SNX",
      price: 3.25,
      change24h: 4.8,
      imageUrl: "/networks/op.png",
    },
    {
      id: "13",
      name: "Render",
      symbol: "RNDR",
      price: 7.85,
      change24h: -2.3,
      imageUrl: "/networks/op.png",
    },
    {
      id: "14",
      name: "Injective",
      symbol: "INJ",
      price: 34.20,
      change24h: 6.7,
      imageUrl: "/networks/op.png",
    },
    {
      id: "15",
      name: "Sui",
      symbol: "SUI",
      price: 1.65,
      change24h: -1.2,
      imageUrl: "/networks/op.png",
    },
    {
      id: "16",
      name: "Celestia",
      symbol: "TIA",
      price: 12.45,
      change24h: 8.9,
      imageUrl: "/networks/op.png",
    },
    {
      id: "17",
      name: "Stacks",
      symbol: "STX",
      price: 2.35,
      change24h: 3.1,
      imageUrl: "/networks/op.png",
    },
    {
      id: "18",
      name: "Immutable",
      symbol: "IMX",
      price: 3.15,
      change24h: -4.2,
      imageUrl: "/networks/op.png",
    },
    {
      id: "19",
      name: "Mantle",
      symbol: "MNT",
      price: 0.95,
      change24h: 2.8,
      imageUrl: "/networks/op.png",
    },
    {
      id: "20",
      name: "Sei",
      symbol: "SEI",
      price: 0.75,
      change24h: 5.6,
      imageUrl: "/networks/op.png",
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

        {/* Analytics Summary */}
        <div className="mt-48 mb-8">
          <AnalyticsSummary />
        </div>

        {/* Asset Grid */}
        <main className="pb-24">
          <AssetGrid assets={assets} />
          <div className="mt-8">
            <div className="max-w-3xl mx-auto px-2">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">Suggestions</h2>
                <p className="text-sm text-muted-foreground">
                  Discover new tokens that might interest you based on your holdings.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Popular</div>
                <Separator orientation="vertical" />
                <div>New</div>
                <Separator orientation="vertical" />
                <div>Trending</div>
              </div>
            </div>
            <div className="mt-4">
              <AssetTable assets={suggestionAssets} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 