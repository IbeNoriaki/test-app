"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
          style={{
            zIndex: avatarUrls.length - index + 1
          }}
        >
          <div className={cn(
            "relative transition-transform",
            index === 0 ? "h-12 w-12 -mt-1" : "h-8 w-8 mt-1"
          )}>
            <Image
              className={cn(
                "rounded-full border-2 border-white dark:border-gray-800",
                index === 0 && "hover:scale-105 transition-transform"
              )}
              src={url.imageUrl}
              alt={`Avatar ${index + 1}`}
              fill
              sizes={index === 0 ? "48px" : "32px"}
            />
          </div>
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-center text-[10px] font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black relative mt-1"
          href=""
          style={{
            zIndex: 0
          }}
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
