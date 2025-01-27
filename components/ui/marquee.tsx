"use client";

import { cn } from "@/lib/utils";
import { formatDistanceToNow } from 'date-fns';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Event } from "@/types/events";
import { useEffect, useState } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Coins } from "lucide-react";

export const EventCard = ({ event }: { event: Event }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const timeAgo = mounted 
    ? formatDistanceToNow(new Date(event.timestamp), { addSuffix: true })
    : '';

  const typeConfig = {
    'POINT_PURCHASE': {
      label: 'Point',
      color: 'yellow' as const,
      icon: <Coins className="h-12 w-12" />
    },
    'TOKEN_ISSUE': {
      label: 'Issue',
      color: 'blue' as const,
      icon: null
    },
    'TOKEN_PUMP': {
      label: 'Pump',
      color: 'green' as const,
      icon: null
    }
  };

  const getAvatarData = (event: Event) => {
    if (event.type === 'POINT_PURCHASE' && event.purchasers) {
      return event.purchasers;
    }
    return [];
  };

  const typeConfigObj = typeConfig[event.type];

  return (
    <div className="relative flex flex-col gap-1.5 rounded-lg border border-border/50 px-4 py-3 mx-2 min-w-[260px]">
      <div className="absolute top-2 right-2">
        <ShinyButton
          disabled
          size="xs"
          variant={typeConfigObj.color}
          className="pointer-events-none h-4 min-h-0 px-1.5 py-0 text-[9px] font-medium opacity-90 uppercase tracking-wide"
        >
          {typeConfigObj.label}
        </ShinyButton>
      </div>

      <div className="flex items-center gap-2.5 mt-1">
        {event.type === 'POINT_PURCHASE' ? (
          <div className="flex h-12 w-12 items-center justify-center text-yellow-500">
            {typeConfigObj.icon}
          </div>
        ) : (
          <Avatar className="h-8 w-8">
            <AvatarImage src={event.user.avatar} />
            <AvatarFallback>{event.user.name[0]}</AvatarFallback>
          </Avatar>
        )}
        
        <div className="flex flex-col gap-0.5">
          {event.type === 'POINT_PURCHASE' && (
            <>
              <span className="font-medium text-base leading-none">
                {event.amount.toLocaleString()} POINT
              </span>
              <span className="text-xs text-muted-foreground leading-none">
                Purchased {timeAgo}
              </span>
              <div className="mt-1">
                <AvatarCircles
                  avatarUrls={getAvatarData(event)}
                  className="-space-x-2"
                />
              </div>
            </>
          )}
          
          {event.type === 'TOKEN_ISSUE' && (
            <span>
              Issued to <span className="font-medium">{event.user.name}</span>
            </span>
          )}
          
          {event.type === 'TOKEN_PUMP' && (
            <span>
              <span className="font-medium">{event.amount.toLocaleString()}</span> pumped by {event.user.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

interface MarqueeProps {
  className?: string;
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  pauseOnHover = false,
  children,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--gap:1rem] [--duration:40s]",
        className,
        {
          "[&:hover>*]:pause": pauseOnHover,
        }
      )}
    >
      <div className="flex animate-marquee items-center gap-[--gap]">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex animate-marquee items-center gap-[--gap]"
      >
        {children}
      </div>
    </div>
  );
}
