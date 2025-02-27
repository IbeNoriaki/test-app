import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface Props {
  description: string;
  dates: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  description,
  dates,
  image,
  links,
  isLocked = false,
}: Props & { isLocked?: boolean }) {
  return (
    <li className={cn(
      "relative ml-10 py-4",
      isLocked && "opacity-40 hover:opacity-60 transition-opacity"
    )}>
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={description} className="object-contain" />
          <AvatarFallback>{description[0]}</AvatarFallback>
        </Avatar>
      </div>
      {isLocked && (
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">
            <Icons.lock className="h-4 w-4" />
          </Badge>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}