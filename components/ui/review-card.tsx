import { cn } from "@/lib/utils";
import Image from "next/image";

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

export const ReviewCard = ({
  img,
  name,
  username,
  body,
}: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative h-8 w-8">
          <Image 
            className="rounded-full" 
            src={img} 
            alt=""
            fill
            sizes="32px"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
}; 