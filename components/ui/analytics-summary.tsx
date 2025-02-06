"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const summaryData = {
  battery: {
    label: "Battery",
    value: 25890,
    avatar: "/Avatar/battery.png"
  },
  volt: {
    label: "Volt",
    value: 18432,
    avatar: "/Avatar/volt.png"
  }
}

export function AnalyticsSummary() {
  return (
    <Card className="max-w-3xl mx-auto px-2 bg-transparent">
      <div className="flex">
        {Object.entries(summaryData).map(([key, data]) => (
          <div
            key={key}
            className="flex-1 flex items-center gap-4 border-l first:border-l-0 px-6 py-4 sm:px-8 sm:py-6"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={data.avatar} alt={data.label} />
              <AvatarFallback>{data.label[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">
                {data.label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {data.value.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
} 