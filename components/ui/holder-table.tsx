"use client"

import Image from "next/image"
import { Zap } from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

export interface Asset {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
  imageUrl: string
  purchasers?: Array<{ imageUrl: string; profileUrl: string }>
}

interface HolderTableProps {
  assets: Asset[]
}

export function HolderTable({ assets }: HolderTableProps) {
  return (
    <div className="bg-transparent overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px] sticky left-0 bg-background z-10">名前</TableHead>
            <TableHead className="w-[100px]">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-yellow-500" />
                Volt
              </div>
            </TableHead>
            <TableHead className="w-[140px]">最近の推し</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id} className="h-12">
              <TableCell className="sticky left-0 bg-background z-10">
                <div className="flex items-center gap-2">
                  <Image
                    src={asset.imageUrl}
                    alt={asset.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div className="font-medium truncate">{asset.name}</div>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">{asset.price.toFixed(4)}V</TableCell>
              <TableCell className="whitespace-nowrap">
                <div className="text-sm text-muted-foreground">
                  11:55 3月1日 2025年
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 