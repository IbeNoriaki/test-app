"use client"

import { ModeToggle } from "@/components/ui/mode-toggle";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { HyperText } from "@/components/ui/hyper-text";
import { ProfileCard2 } from "@/components/ui/profile-card2";
import { Card } from "@/components/ui/card";
import { Wallet, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState } from "react";

export default function PointPage() {
  // ポイント購入オプション
  const pointOptions = [
    { points: 2000, price: 1900, batteries: 1 },
    { points: 4000, price: 3800, batteries: 2 },
    { points: 10000, price: 9500, batteries: 5, popular: true },
    { points: 20000, price: 18800, batteries: 10 },
    { points: 50000, price: 45000, special: "超お得", batteries: 25 },
  ];

  // 選択されたポイントオプションのインデックス
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

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
              text="pumpum.jp / point" 
              className="text-lg sm:text-xl font-mono tracking-tight lowercase"
              duration={500}
              animateOnHover
            />
            <ModeToggle />
          </div>
          <div className="relative w-full border-t border-border/50">
            <div className="w-full px-2 py-1.5">
              <ProfileCard2
                avatarUrl="/Avatar/image.png"
                nickname="ユーザー名"
                walletAddress="0x1234567890abcdef1234567890abcdef12345678"
              />
            </div>
          </div>
        </header>

        {/* Volt Card with Points */}
        <div className="mt-32 mb-0 px-2 max-w-3xl mx-auto">
          <Card className="border-indigo-500/20 bg-transparent backdrop-blur-sm shadow-sm">
            {/* Point Section - Simplified */}
            <div className="px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative size-8 overflow-hidden rounded-full flex items-center justify-center">
                  <Image 
                    src="/Avatar/battery.png" 
                    fill 
                    alt="Point" 
                    className="object-contain"
                    sizes="100%"
                  />
                </div>
                <span className="text-sm font-medium">Point</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold">5,000</span>
                <span className="text-xs text-muted-foreground">P</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Main content area */}
        <main className="mt-4 px-2 pb-20 max-w-3xl mx-auto">
          <div className="space-y-4">
            {/* Point Purchase Options */}
            <section>
              <div className="mb-2 px-1 flex justify-start">
                <AnimatedGradientText>
                  <Wallet className="size-4 text-indigo-500" />
                  <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                  <span className="inline animate-gradient bg-gradient-to-r from-[#60A5FA] via-[#9c40ff] to-[#60A5FA] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                    ポイントメニュー
                  </span>
                </AnimatedGradientText>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {pointOptions.map((option, index) => (
                  <Card 
                    key={option.points}
                    className={cn(
                      "border-indigo-500/20 bg-transparent backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-200 relative",
                      selectedOptionIndex === index ? "ring-2 ring-indigo-500 bg-indigo-500/5" : "hover:bg-indigo-500/5"
                    )}
                    onClick={() => setSelectedOptionIndex(index)}
                  >
                    {/* 人気・超お得バッジを右上に配置 */}
                    {option.popular && (
                      <div className="absolute top-1 right-1">
                        <span className="bg-gradient-to-r from-amber-500 to-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                          人気
                        </span>
                      </div>
                    )}
                    {option.special && (
                      <div className="absolute top-1 right-1">
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                          {option.special}
                        </span>
                      </div>
                    )}
                    
                    <div className="p-2">
                      <div className="flex flex-col">
                        {/* バッテリーアイコン表示エリア - サイズアップ */}
                        <div className="flex items-center gap-1.5">
                          <div className="relative size-10 overflow-hidden rounded-full flex items-center justify-center bg-indigo-500/10">
                            <Image 
                              src="/Avatar/battery.png" 
                              fill 
                              alt="Point" 
                              className="object-contain p-1"
                              sizes="100%"
                            />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                            <X 
                              className="size-3 text-indigo-500 animate-pulse hover:scale-110 transition-transform mr-0.5" 
                              strokeWidth={2.5}
                            /> 
                            <NumberTicker 
                              value={option.batteries} 
                              className="text-base font-bold text-muted-foreground" 
                              delay={0.2 * index}
                            />
                          </span>
                        </div>
                        
                        {/* ポイント情報 - センター揃え、サイズ強調 */}
                        <div className="mb-0.5 -mt-0.5 text-center">
                          <h3 className="font-bold text-base md:text-lg">{option.points.toLocaleString()} pt</h3>
                        </div>
                        
                        {/* 価格 - Badgeを使用して黒背景・白テキストで表示 */}
                        <div className="text-center">
                          <Badge 
                            className="bg-black text-white border-transparent font-medium text-xs px-3 py-1"
                          >
                            ¥{option.price.toLocaleString()}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
} 