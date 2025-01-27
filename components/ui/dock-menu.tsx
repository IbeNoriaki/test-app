"use client";

import React from "react";
import { Home, Rocket, User } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockMenu() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <Link href="/">
          <DockIcon>
            <Home className="size-6" />
          </DockIcon>
        </Link>
        <DockIcon>
          <Rocket className="size-6" />
        </DockIcon>
        <Link href="/profile">
          <DockIcon>
            <User className="size-6" />
          </DockIcon>
        </Link>
      </Dock>
    </div>
  );
} 