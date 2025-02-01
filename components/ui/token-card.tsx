import { cn } from "@/lib/utils";
import Image from "next/image";

interface TokenCardProps {
  type: 'token' | 'point';
  symbol?: string;
  amount?: number;
}

export function TokenCard({ type, symbol = 'GYAG', amount = 1000 }: TokenCardProps) {
  return (
    <div className={cn(
      "w-16 h-16 relative rounded-xl overflow-hidden",
      "bg-gradient-to-br",
      type === 'token' 
        ? "from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30"
        : "from-orange-500/20 to-yellow-500/20 dark:from-orange-500/30 dark:to-yellow-500/30",
      "border border-black/5 dark:border-white/5",
      "flex items-center justify-center",
      "hover:scale-105 transition-transform duration-200"
    )}>
      <Image
        src="/Avatar/image2.png"
        alt="Avatar"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      {type === 'token' ? (
        <div className="text-sm font-bold text-purple-700 dark:text-purple-300 z-10">
          {symbol}
        </div>
      ) : (
        <div className="text-sm font-bold text-orange-700 dark:text-orange-300 z-10">
          {amount.toLocaleString()}
        </div>
      )}
    </div>
  );
} 