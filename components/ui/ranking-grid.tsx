"use client"

import Image from "next/image"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

const fansData = Array.from({ length: 10 }, (_, i) => ({
  name: `ファン${i + 1}`,
  avatarPath: "/Avatar/image.png",
  symbol: `$FAN${i + 1}`,
  price: 0.15 + (i * 0.01),
  change24h: i % 2 === 0 ? 5.2 : -3.1
}))

export function RankingGrid() {
  const TokenInfo = ({ data, isLarge = false }: { 
    data: typeof fansData[0], 
    isLarge?: boolean 
  }) => (
    <div className={cn(
      "absolute bottom-1 right-1 bg-background/80 backdrop-blur-sm rounded-lg",
      isLarge ? "p-2" : "p-1"
    )}>
      <div className={cn(
        "flex items-center gap-0.5",
        data.change24h >= 0 ? "text-green-500" : "text-red-500",
        isLarge ? "text-sm" : "text-[10px]"
      )}>
        {data.change24h >= 0 
          ? <TrendingUp className={cn(isLarge ? "size-3" : "size-2")} /> 
          : <TrendingDown className={cn(isLarge ? "size-3" : "size-2")} />
        }
        {Math.abs(data.change24h).toFixed(1)}%
      </div>
    </div>
  )

  const GridItem = ({ data, className, isLarge = false }: { 
    data: typeof fansData[0], 
    className: string,
    isLarge?: boolean
  }) => (
    <div className={cn("flex items-center justify-center relative", className)}>
      <Image 
        src={data.avatarPath} 
        alt={data.name}
        fill
        className="object-cover"
      />
      <TokenInfo data={data} isLarge={isLarge} />
    </div>
  )

  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <h2 className="text-sm font-bold mb-3 px-1">Ranking Top 10</h2>
      
      <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
        <div className="absolute inset-0 bg-background/50 border border-border flex rounded-xl overflow-hidden">
          {/* 左側のグリッド */}
          <GridItem 
            data={fansData[0]} 
            className="w-[52%] h-full border-r border-border"
            isLarge={true}
          />
          
          {/* 右側のグリッド */}
          <div className="w-[48%] h-full flex flex-col">
            {/* 上段のグリッド（2分割） */}
            <div className="flex-1 border-b border-border flex">
              <GridItem 
                data={fansData[1]} 
                className="w-[52%] h-full border-r border-border"
              />
              <GridItem 
                data={fansData[2]} 
                className="w-[48%] h-full"
              />
            </div>
            
            {/* 中段のグリッド（3分割） */}
            <div className="flex-1 border-b border-border flex">
              <GridItem 
                data={fansData[3]} 
                className="w-[37%] h-full border-r border-border"
              />
              <GridItem 
                data={fansData[4]} 
                className="w-[33%] h-full border-r border-border"
              />
              <GridItem 
                data={fansData[5]} 
                className="w-[30%] h-full"
              />
            </div>

            {/* 下段のグリッド（4分割） */}
            <div className="flex-1 flex">
              <GridItem 
                data={fansData[6]} 
                className="w-[28%] h-full border-r border-border"
              />
              <GridItem 
                data={fansData[7]} 
                className="w-[26%] h-full border-r border-border"
              />
              <GridItem 
                data={fansData[8]} 
                className="w-[24%] h-full border-r border-border"
              />
              <GridItem 
                data={fansData[9]} 
                className="w-[22%] h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}