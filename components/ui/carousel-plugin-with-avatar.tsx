"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { TrendingUp, TrendingDown } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"
import { formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPluginWithAvatar() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  // サンプルデータ
  const change24h = 5.2
  const points = 1000
  const timestamp = new Date()

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="w-full max-w-xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                  <div className="relative w-full h-full">
                    <Image
                      src="/Avatar/image.png"
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {/* 上昇率とVolt表示を横に並べる - 右上 */}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <ShinyButton
                        size="xs"
                        variant="blue"
                        className="pointer-events-none"
                      >
                        <div className="flex items-center gap-0.5">
                          <span className="text-xs font-medium">⚡️ 2.4V</span>
                        </div>
                      </ShinyButton>
                      
                      <ShinyButton
                        size="sm"
                        variant={change24h >= 0 ? "green" : "red"}
                        className="pointer-events-none"
                      >
                        <div className={`flex items-center gap-0.5 ${change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {change24h >= 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                          {Math.abs(change24h).toFixed(1)}%
                        </div>
                      </ShinyButton>
                    </div>
                    {/* ポイント表示 - 左上 */}
                    <div className="absolute top-2 left-2">
                      <ShinyButton
                        size="xs"
                        variant="yellow"
                        className="pointer-events-none"
                      >
                        <span className="text-xs font-medium">{points.toLocaleString()} PT</span>
                      </ShinyButton>
                    </div>
                    {/* タイムスタンプ - 左下 */}
                    <div className="absolute bottom-2 left-2">
                      <span className="text-xs text-white/80 drop-shadow-md">
                        {formatDistanceToNow(timestamp, { addSuffix: true, locale: ja })}
                      </span>
                    </div>
                    {/* アバター - 右下 */}
                    <div className="absolute bottom-2 right-2 w-12 h-12">
                      <Image
                        src="/Avatar/image2.png"
                        alt="Avatar"
                        fill
                        className="object-cover rounded-full border-2 border-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
} 