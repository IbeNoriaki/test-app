"use client";

import { useState } from 'react';
import { TrendingUp, TrendingDown } from "lucide-react";
import Image from 'next/image';
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface AssetTableProps {
  assets: {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    imageUrl: string;
    purchasers?: {
      imageUrl: string;
      profileUrl: string;
    }[];
  }[];
}

export function AssetTable({ assets }: AssetTableProps) {
  const ITEMS_PER_PAGE = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(assets.length / ITEMS_PER_PAGE);
  
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return assets.slice(startIndex, endIndex);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div className="relative overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky left-0 bg-background">Token</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24h Change</TableHead>
              <TableHead className="text-right">Holders</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getCurrentPageItems().map((asset) => (
              <TableRow key={asset.id}>
                <TableCell className="sticky left-0 bg-background">
                  <div className="flex items-center gap-3">
                    <Image
                      src={asset.imageUrl}
                      alt={asset.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{asset.name}</span>
                      <span className="text-sm text-muted-foreground">{asset.symbol}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${asset.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <div className={cn(
                    "flex items-center justify-end gap-1",
                    asset.change24h >= 0 ? "text-green-500" : "text-red-500"
                  )}>
                    {asset.change24h >= 0 ? (
                      <TrendingUp className="size-3" />
                    ) : (
                      <TrendingDown className="size-3" />
                    )}
                    {Math.abs(asset.change24h)}%
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {asset.purchasers && (
                    <div className="flex justify-end">
                      <AvatarCircles
                        avatarUrls={asset.purchasers}
                        className="-space-x-2"
                        size="sm"
                      />
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4">
          <Pagination>
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
        </div>
      )}
    </div>
  );
} 