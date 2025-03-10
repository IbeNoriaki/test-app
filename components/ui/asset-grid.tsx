"use client";

import { useState } from 'react';
import { TrendingUp, TrendingDown } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface Asset {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  price: number;
  change24h: number;
  imageUrl: string;
  chartData: { date: string; price: number }[];
  purchasers?: {
    imageUrl: string;
    profileUrl: string;
  }[];
}

interface AssetGridProps {
  assets: Asset[];
}

export function AssetGrid({ assets }: AssetGridProps) {
  const { theme } = useTheme();
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(assets.length / ITEMS_PER_PAGE);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return assets.slice(startIndex, endIndex);
  };

  const getChartConfig = (change24h: number) => ({
    price: {
      label: "Price",
      color: change24h >= 0 ? "#22c55e" : "#ef4444", // green-500 : red-500
    },
  } satisfies ChartConfig);

  const padChartData = (data: { date: string; price: number }[]) => {
    const paddingCount = 2;
    const targetPrice = data[data.length - 1].price; // 最新の価格を基準に

    // 価格の最大値と最小値を取得
    const prices = data.map(d => d.price);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    const priceRange = maxPrice - minPrice;
    
    // パディングを追加する際の価格の調整（範囲を小さく）
    const topPadding = priceRange * 0.2;
    const bottomPadding = priceRange * 0.2;
    
    return [
      ...Array(paddingCount).fill({ date: '', price: targetPrice - bottomPadding }),
      ...data,
      ...Array(paddingCount).fill({ date: '', price: targetPrice + topPadding })
    ];
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2 p-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {getCurrentPageItems().map((asset, index) => (
          <div key={asset.id} className="aspect-square relative rounded-xl border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/15 transition-colors duration-200">
            <BorderBeam
              colorFrom={theme === 'dark' ? "#60A5FA" : "#3B82F6"}
              colorTo={theme === 'dark' ? "#93C5FD" : "#60A5FA"}
              duration={20}
              size={250}
              borderWidth={1}
              anchor={45}
            />
            <div className="absolute inset-0">
              <ResponsiveContainer width="100%" height="100%">
                <ChartContainer config={getChartConfig(asset.change24h)}>
                  <LineChart
                    data={padChartData(asset.chartData)}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.1} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tick={false}
                      domain={['dataMin', 'dataMax']}
                      type="category"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                      domain={[
                        (dataMin: number) => dataMin * 0.95,
                        (dataMax: number) => dataMax * 1.05
                      ]}
                      hide
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
            <div className="absolute inset-0 p-3">
              <div className="flex items-start justify-between">
                {/* 左側: アイコンとシンボル/保有量 */}
                <div className="flex items-center gap-2">
                  <Image
                    src={asset.imageUrl}
                    alt={asset.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">{asset.symbol}</p>
                    <p className="text-xs text-muted-foreground">{asset.balance.toLocaleString()}</p>
                  </div>
                </div>

                {/* 右側: 価格と変動率 */}
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
              {asset.purchasers && (
                <AvatarCircles
                  avatarUrls={asset.purchasers}
                  numPeople={index === 0 ? 9 : 0}  // 最初のトークンのみ追加の人数を表示
                  className="-space-x-2"
                  size="sm"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="my-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={cn(
                  currentPage === 1 && "pointer-events-none opacity-50"
                )}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }}
                  size="default"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={cn(
                  currentPage === totalPages && "pointer-events-none opacity-50"
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}