"use client";

import { Copy, Pencil, Check, X } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface ProfileCard2Props {
  avatarUrl?: string;
  nickname: string;
  walletAddress: string;
  onNicknameChange?: (newNickname: string) => void;
}

export function ProfileCard2({
  avatarUrl = "/Avatar/image.png",
  nickname,
  walletAddress,
  onNicknameChange,
}: ProfileCard2Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState(nickname);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex items-start gap-4 px-2 py-1.5">
      <div className="shrink-0">
        <Avatar className="size-12 sm:size-14 rounded-lg">
          <AvatarImage src={avatarUrl} alt={nickname} className="rounded-lg" />
          <AvatarFallback className="rounded-lg">{getInitials(nickname)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex flex-col gap-1">
          {isEditing ? (
            <div className="flex items-center gap-1">
              <Input
                value={newNickname}
                onChange={(e) => setNewNickname(e.target.value)}
                className="h-7 w-32 text-base"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onNicknameChange?.(newNickname);
                    setIsEditing(false);
                  } else if (e.key === 'Escape') {
                    setNewNickname(nickname);
                    setIsEditing(false);
                  }
                }}
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => {
                  onNicknameChange?.(newNickname);
                  setIsEditing(false);
                }}
              >
                <Check className="size-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => {
                  setNewNickname(nickname);
                  setIsEditing(false);
                }}
              >
                <X className="size-3" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-base font-medium truncate">{nickname}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="size-3" />
              </Button>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <div className="relative size-4 shrink-0">
                <Image
                  src="/networks/op.png"
                  alt="Optimism"
                  fill
                  className="object-contain"
                />
              </div>
              <code className="rounded bg-muted/50 px-1.5 py-0.5 text-xs text-foreground/80">
                {shortenAddress(walletAddress)}
              </code>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={handleCopyAddress}
            >
              {copied ? (
                <Check className="size-3" />
              ) : (
                <Copy className="size-3" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 