"use client";

import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";

import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { BotAvatar, UserAvatar } from "@/components/avatar";

export interface ChatMessageProps {
  role: "system" | "user",
  content?: string;
  isLoading?: boolean;
  src?: string;
};

export const ChatMessage = ({
  role,
  content,
  isLoading,
  src
}: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();

  const onCopy = () => {
    if (!content) {
      return;
    }

    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard",
    });
  }

  return (
    <div className={cn(
      "group flex items-start gap-x-3 py-4 w-full",
      role === "user" && "justify-end"
    )}>
      {role !== "user" && <BotAvatar />}
      <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
        {isLoading
          ? <BeatLoader
            size={5}
            color={theme === "light" ? "black" : "white"} />
          : content}
      </div>
      {role === "user" && <UserAvatar />}
    </div>
  )
}