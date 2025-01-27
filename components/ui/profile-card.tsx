"use client";

import { Copy, Pencil } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileCardProps {
  avatarUrl?: string;
  nickname: string;
  walletAddress: string;
  onNicknameChange?: (newNickname: string) => void;
}

export function ProfileCard({
  avatarUrl = "https://avatar.vercel.sh/default",
  nickname,
  walletAddress,
  onNicknameChange,
}: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempNickname, setTempNickname] = useState(nickname);

  const handleCopyAddress = async () => {
    await navigator.clipboard.writeText(walletAddress);
  };

  const handleNicknameSubmit = () => {
    if (tempNickname.length >= 2) {
      onNicknameChange?.(tempNickname);
      setIsEditing(false);
    }
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
    if (address.length < 10) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-background/20 backdrop-blur-sm p-3 shadow-sm">
      <div className="shrink-0">
        <Avatar className="size-16">
          <AvatarImage src={avatarUrl} alt={nickname} />
          <AvatarFallback>{getInitials(nickname)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          {isEditing ? (
            <div className="grid gap-1.5">
              <Label htmlFor="nickname" className="text-xs">
                Nickname
              </Label>
              <div className="flex gap-1.5">
                <Input
                  id="nickname"
                  value={tempNickname}
                  onChange={(e) => setTempNickname(e.target.value)}
                  className="h-7 text-sm bg-background/50"
                  placeholder="Enter nickname"
                  autoFocus
                />
                <div className="flex gap-1">
                  <Button 
                    size="sm" 
                    onClick={handleNicknameSubmit}
                    className="h-7 px-2 text-xs"
                  >
                    Save
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => {
                      setTempNickname(nickname);
                      setIsEditing(false);
                    }}
                    className="h-7 px-2 text-xs bg-background/50"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="text-base font-medium">{nickname}</span>
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
        </div>
        <div className="flex items-center gap-1.5">
          <code className="rounded bg-muted/50 px-1.5 py-0.5 text-xs text-foreground/80">
            {shortenAddress(walletAddress)}
          </code>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={handleCopyAddress}
          >
            <Copy className="size-3" />
          </Button>
        </div>
      </div>
    </div>
  );
} 