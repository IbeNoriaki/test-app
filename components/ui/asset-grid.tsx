"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { BorderBeam } from "@/components/ui/border-beam";

interface Asset {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  price: number;
  change24h: number;
  imageUrl: string;
  chartData: { month: string; price: number }[];
  purchasers?: {
    imageUrl: string;
    profileUrl: string;
  }[];
}

interface AssetGridProps {
  assets: Asset[];
}

export function AssetGrid({ assets }: AssetGridProps) {
  const getChartConfig = (change24h: number) => ({
    price: {
      label: "Price",
      color: change24h >= 0 ? "#22c55e" : "#ef4444", // green-500 : red-500
    },
  } satisfies ChartConfig);

  return (
    <div className="grid grid-cols-2 gap-2 p-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {assets.map((asset, index) => (
        <div key={asset.id} className="aspect-square relative rounded-xl">
          <BorderBeam />
          {/* Chart (背面) */}
          <div className="absolute inset-0">
            <ResponsiveContainer width="100%" height="100%">
              <ChartContainer config={getChartConfig(asset.change24h)}>
                <LineChart
                  data={asset.chartData}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.1} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="var(--color-price)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </ResponsiveContainer>
          </div>

          {/* Token Info (前面) */}
          <div className="absolute inset-x-0 top-0 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative size-8">
                  <img src={asset.imageUrl} alt={asset.name} className="rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{asset.symbol}</p>
                  <p className="text-xs text-muted-foreground">{asset.balance.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">${asset.price.toFixed(2)}</p>
                <p className={`text-xs ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center gap-0.5`}>
                  {asset.change24h >= 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                  {Math.abs(asset.change24h)}%
                </p>
              </div>
            </div>
          </div>

          {/* Avatar Circles (最前面) */}
          <div className="absolute bottom-3 left-3">
            {index === 0 && asset.purchasers && (
              <AvatarCircles
                avatarUrls={asset.purchasers}
                className="-space-x-2"
                size="sm"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}